// Netlify build step:
// - assembles data/cds/*.json into data/catalog.json (fetched by app.js at runtime)
// - fetches a track listing per CD from Deezer's public API when one isn't
//   already set in the source JSON (best-effort; failures just leave it empty)
// - regenerates llms.txt from llms.template.txt with a full inventory listing
// - writes the root index.html with the site-wide catalog SSR block for crawlers
// - generates one static page per CD at cd/<id>/index.html with product-specific
//   meta/OG/Twitter/JSON-LD tags (for link previews and non-JS crawlers) and a
//   pre-rendered detail block; app.js takes over once it loads.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const cdsDir = path.join(root, 'data', 'cds');
const templatePath = path.join(root, 'index.html');

function slugify(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function truncate(str, n) {
    if (!str) return '';
    return str.length > n ? str.slice(0, n - 1).trimEnd() + '…' : str;
}

function jsonLd(obj) {
    return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchTracklist(artist, album) {
    const cleanedAlbum = album.replace(/\s*\([^)]*\)\s*/g, ' ').trim();
    try {
        const searchUrl = `https://api.deezer.com/search/album?q=${encodeURIComponent(`${cleanedAlbum} ${artist}`)}`;
        const searchRes = await fetch(searchUrl);
        if (!searchRes.ok) return [];
        const searchData = await searchRes.json();
        const match = searchData.data && searchData.data[0];
        if (!match) return [];

        await sleep(150);
        const tracksRes = await fetch(`https://api.deezer.com/album/${match.id}/tracks`);
        if (!tracksRes.ok) return [];
        const tracksData = await tracksRes.json();
        return (tracksData.data || []).map(t => t.title).filter(Boolean);
    } catch (e) {
        console.warn(`WARNING: tracklist fetch failed for "${album}" by ${artist}: ${e.message}`);
        return [];
    }
}

async function main() {
    const allFiles = fs.readdirSync(cdsDir);
    const skipped = allFiles.filter(f => !f.endsWith('.json'));
    if (skipped.length > 0) {
        console.warn(`WARNING: ignoring non-JSON files in data/cds/ (won't appear on the site): ${skipped.join(', ')}`);
    }
    const files = allFiles.filter(f => f.endsWith('.json')).sort();

    const usedIds = new Set();
    const catalog = [];
    for (const file of files) {
        const item = JSON.parse(fs.readFileSync(path.join(cdsDir, file), 'utf8'));
        let base = slugify(`${item.artist}-${item.album}`);
        let id = base;
        let n = 2;
        while (usedIds.has(id)) { id = `${base}-${n++}`; }
        usedIds.add(id);
        if (!item.dateAdded || isNaN(Date.parse(item.dateAdded))) {
            console.warn(`WARNING: ${file} has no valid dateAdded, treating as oldest`);
            item.dateAdded = new Date(0).toISOString();
        }
        if (typeof item.inStock !== 'boolean') item.inStock = true;
        if (!Array.isArray(item.tracklist) || item.tracklist.length === 0) {
            item.tracklist = await fetchTracklist(item.artist, item.album);
            await sleep(150);
        }
        catalog.push({ id, ...item });
    }

    fs.writeFileSync(path.join(root, 'data', 'catalog.json'), JSON.stringify(catalog, null, 2));
    console.log(`Wrote ${catalog.length} items to data/catalog.json`);
    console.log(`Tracklists found: ${catalog.filter(c => c.tracklist.length > 0).length}/${catalog.length}`);

    const catalogTextPlain = catalog
        .map(c => `* ${c.artist} - ${c.album} - ${c.price.toFixed(2)} GEL${c.inStock === false ? ' (sold out)' : ''}`)
        .join('\n');

    const llmsTemplate = fs.readFileSync(path.join(root, 'llms.template.txt'), 'utf8');
    fs.writeFileSync(path.join(root, 'llms.txt'), llmsTemplate.replace('{{CATALOG}}', catalogTextPlain));
    console.log('Wrote llms.txt');

    const ssrList = catalog
        .map(c => `<p>${escapeHtml(c.artist)} – ${escapeHtml(c.album)} – ${c.price.toFixed(2)} GEL${c.inStock === false ? ' (Sold Out)' : ''}</p>`)
        .join('\n');

    function injectCatalogSsr(html) {
        return html.replace(
            /<!-- CATALOG_SSR -->[\s\S]*?<!-- \/CATALOG_SSR -->/,
            `<!-- CATALOG_SSR -->${ssrList}<!-- /CATALOG_SSR -->`
        );
    }

    const template = fs.readFileSync(templatePath, 'utf8');

    // --- Root index.html ---
    let rootHtml = injectCatalogSsr(template);
    rootHtml = rootHtml.replace('__HOME_ACTIVE__', 'active').replace('__PRODUCT_ACTIVE__', '');
    fs.writeFileSync(templatePath, rootHtml);
    console.log('Wrote index.html');

    // --- Per-product static pages ---
    const cdDir = path.join(root, 'cd');
    fs.rmSync(cdDir, { recursive: true, force: true });
    fs.mkdirSync(cdDir, { recursive: true });

    for (const item of catalog) {
        const title = `${item.album} by ${item.artist} | CD5600`;
        const desc = truncate(item.description || `${item.album} by ${item.artist}, available at CD5600.`, 160);
        const image = (item.imgs && item.imgs[0]) || 'https://www.cd5600.shop/favicon.png';
        const url = `https://www.cd5600.shop/cd/${item.id}`;
        const availability = item.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock';

        const metaBlock = `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(desc)}">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="product">
    <meta property="og:site_name" content="CD5600">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(desc)}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta property="og:url" content="${url}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(desc)}">
    <meta name="twitter:image" content="${escapeHtml(image)}">
    <script type="application/ld+json">${jsonLd({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: `${item.album} by ${item.artist}`,
            image,
            description: desc,
            offers: {
                '@type': 'Offer',
                priceCurrency: 'GEL',
                price: item.price,
                availability,
                url
            }
        })}</script>`;

        const tracklistSsr = item.tracklist.length > 0
            ? `<ol>${item.tracklist.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ol>`
            : '';

        const ssrDetail = `<img src="${escapeHtml(image)}" alt="${escapeHtml(item.album)} by ${escapeHtml(item.artist)}" style="max-width:300px">
    <h1>${escapeHtml(item.album)}</h1>
    <p>${escapeHtml(item.artist)}</p>
    <p>₾${item.price.toFixed(2)}${item.inStock === false ? ' — Sold Out' : ''}</p>
    <p>${escapeHtml(item.description || '')}</p>
    ${tracklistSsr}`;

        let page = injectCatalogSsr(template);
        page = page.replace('__HOME_ACTIVE__', '').replace('__PRODUCT_ACTIVE__', 'active');
        page = page.replace(/<!-- PRODUCT_META_START -->[\s\S]*?<!-- PRODUCT_META_END -->/, metaBlock);
        page = page.replace(
            /<!-- PRODUCT_SSR_START -->[\s\S]*?<!-- PRODUCT_SSR_END -->/,
            `<!-- PRODUCT_SSR_START -->${ssrDetail}<!-- PRODUCT_SSR_END -->`
        );

        const productDir = path.join(cdDir, item.id);
        fs.mkdirSync(productDir, { recursive: true });
        fs.writeFileSync(path.join(productDir, 'index.html'), page);
    }
    console.log(`Wrote ${catalog.length} product pages to cd/`);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
