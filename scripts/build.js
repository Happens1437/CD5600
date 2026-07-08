// Netlify build step: assembles data/cds/*.json into data/catalog.json,
// regenerates llms.txt from llms.template.txt, and injects a plain-text
// catalog listing into index.html for non-JS crawlers.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const cdsDir = path.join(root, 'data', 'cds');

function slugify(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const files = fs.readdirSync(cdsDir).filter(f => f.endsWith('.json')).sort();

const usedIds = new Set();
const catalog = files.map(file => {
    const item = JSON.parse(fs.readFileSync(path.join(cdsDir, file), 'utf8'));
    let base = slugify(`${item.artist}-${item.album}`);
    let id = base;
    let n = 2;
    while (usedIds.has(id)) { id = `${base}-${n++}`; }
    usedIds.add(id);
    return { id, ...item };
});

fs.writeFileSync(path.join(root, 'data', 'catalog.json'), JSON.stringify(catalog, null, 2));
console.log(`Wrote ${catalog.length} items to data/catalog.json`);

const catalogText = catalog
    .map(c => `* ${c.artist} - ${c.album} - ${c.price.toFixed(2)} GEL`)
    .join('\n');

const llmsTemplate = fs.readFileSync(path.join(root, 'llms.template.txt'), 'utf8');
fs.writeFileSync(path.join(root, 'llms.txt'), llmsTemplate.replace('{{CATALOG}}', catalogText));
console.log('Wrote llms.txt');

const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
const ssrList = catalog
    .map(c => `<p>${c.artist} – ${c.album} – ${c.price.toFixed(2)} GEL</p>`)
    .join('\n');
html = html.replace(
    /<!-- CATALOG_SSR -->[\s\S]*?<!-- \/CATALOG_SSR -->/,
    `<!-- CATALOG_SSR -->${ssrList}<!-- /CATALOG_SSR -->`
);
fs.writeFileSync(indexPath, html);
console.log('Injected catalog text into index.html');
