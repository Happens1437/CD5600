let fullCatalog = [];
let cart = [];

// ==========================================
// 🌐 LANGUAGE SYSTEM
// ==========================================

const translations = {
    en: {
        nav_home: 'Home', nav_catalog: 'Catalog', nav_socials: 'Socials', nav_about: 'About', nav_faq: 'FAQ',
        browse_collection: 'Browse Collection', read_about: 'Read About Us',
        highlighted_albums: 'Highlighted Albums', new_additions: 'New Additions', newly_added: 'Newly Added',
        master_catalog: 'Master Catalog', all_artists: 'All Artists',
        sort_default: 'Sort: Default', sort_low_high: 'Price: Low-High', sort_high_low: 'Price: High-Low',
        search_placeholder: 'Search artist or album...',
        secure_purchase: 'Secure Purchase', add_to_cart: 'Add to Cart', back_to_catalog: 'Back to Catalog',
        unit_price: 'Unit Price',
        shopping_cart: 'Shopping Cart', total_balance: 'Total Balance', finalize_checkout: 'Finalize Checkout',
        cart_empty: 'Your inventory is empty', follow_instagram: 'Follow on Instagram',
        view_instagram: 'View on Instagram', about_title: 'About Us.', faq_title: 'F.A.Q Vault.',
        shipping: 'Shipping', returns: 'Returns', contact: 'Contact', privacy: 'Privacy',
        no_matches: 'No matches found in vault',
        nav_how: 'How to Buy',
        how_heading: 'How to Buy.',
        how_subtitle: 'Three simple steps to get music delivered to your door.',
        how_step1_title: 'Browse the catalog',
        how_step1_text: 'Find the album you want right here on cd5600.shop. Browse by artist, filter by price, or search for a specific title.',
        how_cta: 'Click Secure Purchase',
        how_step2_title: 'Purchase on Extra.ge',
        how_step2_text: 'You will be redirected to our store on Extra.ge — Georgia\'s largest and most trusted online marketplace. Your payment and personal data are fully protected.',
        how_buyer: 'Buyer protected',
        how_confirmed: 'Order confirmed',
        how_step3_title: 'We deliver to your door',
        how_step3_text: 'We ship all across Georgia. Your CD is packaged securely and delivered straight to your address.',
        how_tbilisi: 'Tbilisi',
        how_cities: 'Other cities',
        how_mountain: 'Mountain regions',
        how_note1: 'All CDs are original factory sealed imports from Europe and the US.',
        how_note2: 'Every purchase on Extra.ge is secure and fully buyer-protected.',
        faq_q1: 'Can you ship outside of Tbilisi?',
        faq_a1: 'Yes, we ship all around Georgia. Your order is packed securely and delivered straight to your address.',
        faq_q2: 'What are the shipping costs?',
        faq_a2: 'Tbilisi Zone – 7.99 GEL\nOutside Tbilisi (Batumi, Kutaisi, Rustavi, etc.) – 9.99 GEL\nMountainous regions – 10.99 GEL',
        faq_q3: 'Are your CDs original?',
        faq_a3: 'Yes. Every CD we sell is a 100% authentic original pressing imported from the US or Europe. No bootlegs, no fakes.',
        faq_q4: 'Do you take custom requests?',
        faq_a4: 'Yes. If you are looking for a specific album, reach out to us on Instagram. We will find it and get back to you with a price.',
        faq_q5: 'Are the CDs factory sealed?',
        faq_a5: 'Yes, all our new imports arrive factory sealed so you get the full unboxing experience.',
        faq_q6: 'What is the return policy?',
        faq_a6: 'If your CD arrives cracked, skips, or has a manufacturing defect — we will replace it or give you a full refund. Sealed CDs can only be returned unopened. We do not accept returns for "ordered by mistake" or "changed my mind."',
        sold_out: 'Sold Out', you_might_also_like: 'You Might Also Like', tracklist: 'Tracklist',
    },
    ka: {
        nav_home: 'მთავარი', nav_catalog: 'კატალოგი', nav_socials: 'სოციალები', nav_about: 'ჩვენს შესახებ', nav_faq: 'კითხვები',
        browse_collection: 'კოლექციის დათვალიერება', read_about: 'ჩვენს შესახებ',
        highlighted_albums: 'გამორჩეული ალბომები', new_additions: 'ახალი დამატებულები', newly_added: 'ახლად დამატებული',
        master_catalog: 'მთავარი კატალოგი', all_artists: 'ყველა არტისტი',
        sort_default: 'დახარისხება: ნაგულისხმევი', sort_low_high: 'ფასი: ზრდადი', sort_high_low: 'ფასი: კლებადი',
        search_placeholder: 'მოძებნე არტისტი ან ალბომი...',
        secure_purchase: 'შეძენა', add_to_cart: 'კალათაში დამატება', back_to_catalog: 'კატალოგში დაბრუნება',
        unit_price: 'ფასი',
        shopping_cart: 'კალათა', total_balance: 'სულ', finalize_checkout: 'შეკვეთის დასრულება',
        cart_empty: 'კალათა ცარიელია', follow_instagram: 'Instagram-ზე გამოწერა',
        view_instagram: 'Instagram-ზე ნახვა', about_title: 'ჩვენს შესახებ.', faq_title: 'კითხვა-პასუხი.',
        shipping: 'მიწოდება', returns: 'დაბრუნება', contact: 'კონტაქტი', privacy: 'კონფიდენციალურობა',
        no_matches: 'ვერაფერი მოიძებნა',
        nav_how: 'როგორ ვიყიდო',
        how_heading: 'როგორ ვიყიდო.',
        how_subtitle: 'სამი მარტივი ნაბიჯი მუსიკის სახლამდე მიტანისთვის.',
        how_step1_title: 'კატალოგის დათვალიერება',
        how_step1_text: 'იპოვეთ სასურველი ალბომი cd5600.shop-ზე. მოძებნეთ არტისტის, ფასის ან სახელის მიხედვით.',
        how_cta: 'დააჭირეთ შეძენის ღილაკს',
        how_step2_title: 'შეძენა Extra.ge-ზე',
        how_step2_text: 'გადამისამართდებით ჩვენს მაღაზიაში Extra.ge-ზე — საქართველოს ყველაზე დიდ და სანდო ონლაინ მარკეტფლეისზე. თქვენი გადახდა და პერსონალური მონაცემები სრულად დაცულია.',
        how_buyer: 'მყიდველი დაცულია',
        how_confirmed: 'შეკვეთა დადასტურებულია',
        how_step3_title: 'მივიტანთ თქვენს კართან',
        how_step3_text: 'ვაგზავნით მთელ საქართველოში. თქვენი CD უსაფრთხოდ არის შეფუთული და პირდაპირ თქვენს მისამართზე მიეწოდება.',
        how_tbilisi: 'თბილისი',
        how_cities: 'სხვა ქალაქები',
        how_mountain: 'მთიანი რეგიონები',
        how_note1: 'ყველა CD ორიგინალური, ქარხნულად დალუქული იმპორტია ევროპიდან და აშშ-იდან.',
        how_note2: 'ყველა შეძენა Extra.ge-ზე უსაფრთხოა და მყიდველი სრულად დაცულია.',
        faq_q1: 'შესაძლებელია თუ არა თბილისის გარეთ მიწოდება?',
        faq_a1: 'დიახ, ჩვენ ვაგზავნით მთელ საქართველოში. ჩვენ ვუზრუნველყოფთ, რომ თქვენი მაღალი ხარისხის მედია უსაფრთხოდ იყოს შეფუთული და უსაფრთხოდ მიწოდებული თქვენს ზუსტ მისამართზე.',
        faq_q2: 'რა არის მიწოდების საფასური?',
        faq_a2: 'თბილისის ზონა – 7.99 ლარი\nთბილისს გარეთ (ბათუმი, ქუთაისი, რუსთავი და სხვა) – 9.99 ლარი\nთბილისს გარეთ მთიანი რეგიონები – 10.99 ლარი',
        faq_q3: 'CD ები ორიგინალია?',
        faq_a3: 'აბსოლუტურად. ჩვენთან არსებული თითოეული ერთეული არის 100%-ით ავთენტური, ორიგინალი ბეჭდვა, რომელიც იმპორტირებულია პირდაპირ ამერიკის შეერთებულ შტატებსა და ევროპაში დამოწმებული დისტრიბუტორებისგან.',
        faq_q4: 'იღებთ თუ არა ინდივიდუალურ შეკვეთებს?',
        faq_a4: 'დიახ. თუ კონკრეტულ ალბომს ეძებთ, დაგვიკავშირდით ინსტაგრამის საშუალებით. ჩვენი კურატორები მას მოძებნიან და ინფორმაციას მოგაწვდიან.',
        faq_q5: 'CD ები გაუხსნელია?',
        faq_a5: 'დიახ, ჩვენი ყველა ახალი იმპორტი ჩამოდის ქარხნულად დალუქული, ასე რომ თქვენ მიიღებთ სრულ ავთენტურ გახსნის გამოცდილებას.',
        faq_q6: 'რა არის დაბრუნების პოლიტიკა?',
        faq_a6: 'დაზიანებული ან დეფექტური ნივთები: ჩვენ დაგიბრუნებთ ნივთს და თანხას, თუ მიღებული CD გატეხილია, გამოტოვებულია ან აქვს საწარმოო დეფექტი. შემოგთავაზებთ ჩანაცვლებას (თუ მარაგშია) ან სრულ ანაზღაურებას. ახალი/დალუქული CD-ები უნდა დაბრუნდეს გაუხსნელ შეფუთვაში. ბეჭდის დაზიანების შემდეგ ვერ მივიღებთ დაბრუნებას, თუ დისკი დეფექტური არ არის. მომხმარებლის შეცდომა: ჩვენ არ დავაბრუნებთ ნივთებს რომელიც შეცდომით არის შეკვეთილი.',
        sold_out: 'გაყიდულია', you_might_also_like: 'ასევე შეიძლება მოგეწონოთ', tracklist: 'ტრეკლისტი',
    }
};

let currentLang = 'en';

window.t = function(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

window.toggleLang = function() {
    currentLang = currentLang === 'en' ? 'ka' : 'en';
    const btn = document.getElementById('lang-btn');
    if (btn) btn.innerText = currentLang === 'en' ? 'EN' : 'ქა';
    window.applyTranslations();
    window.renderAll();
}

window.applyTranslations = function() {
    const navMap = { 'nav-home': 'nav_home', 'nav-catalog': 'nav_catalog', 'nav-socials': 'nav_socials', 'nav-about': 'nav_about', 'nav-faq': 'nav_faq', 'nav-how': 'nav_how' };
    Object.entries(navMap).forEach(([id, key]) => { const el = document.getElementById(id); if (el) el.innerText = window.t(key); });

    const mobileNavMap = { 'mobile-nav-home': 'nav_home', 'mobile-nav-catalog': 'nav_catalog', 'mobile-nav-socials': 'nav_socials', 'mobile-nav-about': 'nav_about', 'mobile-nav-faq': 'nav_faq', 'mobile-nav-how': 'nav_how' };
    Object.entries(mobileNavMap).forEach(([id, key]) => { const el = document.getElementById(id); if (el) el.innerText = window.t(key); });

    const idMap = {
        'btn-browse': 'browse_collection', 'btn-about': 'read_about',
        'btn-finalize': 'finalize_checkout', 'text-total-balance': 'total_balance',
        'text-follow-ig': 'follow_instagram', 'footer-shipping': 'shipping',
        'footer-returns': 'returns', 'footer-contact': 'contact',
    };
    Object.entries(idMap).forEach(([id, key]) => { const el = document.getElementById(id); if (el) el.innerText = window.t(key); });

    // Headings with colored spans - update innerHTML to preserve yellow span
    const headingMap = {
        'text-highlighted': `${window.t('highlighted_albums').split(' ').slice(0,-1).join(' ')} <span class="text-[#ffcc00]">${window.t('highlighted_albums').split(' ').slice(-1)[0]}</span>`,
        'text-new-additions': `${window.t('new_additions').split(' ').slice(0,-1).join(' ')} <span class="text-[#ffcc00]">${window.t('new_additions').split(' ').slice(-1)[0]}</span>`,
        'text-master-catalog': `${window.t('master_catalog').split(' ').slice(0,-1).join(' ')} <span class="text-[#ffcc00]">${window.t('master_catalog').split(' ').slice(-1)[0]}</span>`,
        'text-cart-title': `${window.t('shopping_cart').split(' ').slice(0,-1).join(' ')} <span class="text-[#ffcc00]">${window.t('shopping_cart').split(' ').slice(-1)[0]}</span>`,
        'text-about-title': `${window.t('about_title').split(' ').slice(0,-1).join(' ')} <span class="text-[#ffcc00]">${window.t('about_title').split(' ').slice(-1)[0]}</span>`,
        'text-faq-title': `${window.t('faq_title').split(' ').slice(0,-1).join(' ')} <span class="text-[#ffcc00]">${window.t('faq_title').split(' ').slice(-1)[0]}</span>`,
    };
    Object.entries(headingMap).forEach(([id, html]) => { const el = document.getElementById(id); if (el) el.innerHTML = html; });

    const searchInput = document.getElementById('catalog-search');
    if (searchInput) searchInput.placeholder = window.t('search_placeholder');

    const artistSelect = document.getElementById('filter-artist');
    if (artistSelect && artistSelect.options[0]) artistSelect.options[0].text = window.t('all_artists');

    const sortSelect = document.getElementById('sort-price');
    if (sortSelect) {
        if (sortSelect.options[0]) sortSelect.options[0].text = window.t('sort_default');
        if (sortSelect.options[1]) sortSelect.options[1].text = window.t('sort_low_high');
        if (sortSelect.options[2]) sortSelect.options[2].text = window.t('sort_high_low');
    }

    // FAQ questions and answers
    for (let i = 1; i <= 6; i++) {
        const q = document.getElementById(`faq-q${i}`);
        const a = document.getElementById(`faq-a${i}`);
        if (q) q.innerText = window.t(`faq_q${i}`);
        if (a) a.innerText = window.t(`faq_a${i}`);
    }

    // How to Buy page
    const howMap = {
        'how-heading': 'how_heading', 'how-subtitle': 'how_subtitle',
        'how-step1-title': 'how_step1_title', 'how-step1-text': 'how_step1_text',
        'how-cta': 'how_cta', 'how-step2-title': 'how_step2_title',
        'how-step2-text': 'how_step2_text', 'how-buyer': 'how_buyer',
        'how-confirmed': 'how_confirmed', 'how-step3-title': 'how_step3_title',
        'how-step3-text': 'how_step3_text', 'how-tbilisi': 'how_tbilisi',
        'how-cities': 'how_cities', 'how-mountain': 'how_mountain',
        'how-note1': 'how_note1', 'how-note2': 'how_note2',
    };
    Object.entries(howMap).forEach(([id, key]) => { const el = document.getElementById(id); if (el) el.innerText = window.t(key); });
}

// ==========================================
// CORE FUNCTIONS
// ==========================================

window.getImg = function(product) {
    return (product.imgs && product.imgs.length > 0) ? product.imgs[0] : '';
}

window.escapeHtml = function(str) {
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}

window.showToast = function(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-msg').innerText = msg;
    toast.classList.remove('translate-y-24', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-24', 'opacity-0'), 3000);
}

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('translate-x-full');
}

window.getProduct = function(id) {
    return fullCatalog.find(x => x.id == id) || { artist: 'Unknown', album: 'Unknown Unit', price: 0, imgs: [] };
}

window.addToCart = function(event, id) {
    if (event) event.stopPropagation();
    const product = window.getProduct(id);
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.quantity++; } else { cart.push({ ...product, quantity: 1 }); }
    window.updateCartUI();
    window.showToast(`Unit ${id} added to Cart.`);
}

window.removeFromCart = function(id) {
    cart = cart.filter(item => item.id !== id);
    window.updateCartUI();
}

window.updateQuantity = function(id, delta) {
    const item = cart.find(x => x.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity < 1) window.removeFromCart(id);
        else window.updateCartUI();
    }
}

window.updateCartUI = function() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').innerText = count;
    const cartMount = document.getElementById('cart-mount');
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";

    if (cart.length === 0) {
        cartMount.innerHTML = `<div class="text-center py-20 text-white/20 uppercase tracking-widest font-bold">${window.t('cart_empty')}</div>`;
    } else {
        cartMount.innerHTML = cart.map(item => `
            <div class="glass p-4 md:p-6 flex items-center gap-4 md:gap-6 group">
                <div class="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex-shrink-0">
                    <img src="${window.getImg(item)}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold uppercase italic truncate text-sm md:text-base">${item.album}</h4>
                    <p class="text-white/40 text-[9px] md:text-[10px] uppercase truncate">${item.artist}</p>
                </div>
                <div class="flex items-center gap-2 md:gap-4 bg-black/40 px-3 py-1.5 md:px-4 md:py-2 rounded-sm border border-white/5">
                    <button onclick="updateQuantity('${item.id}', -1)" class="text-xs hover:text-[#ffcc00]"><i class="fas fa-minus"></i></button>
                    <span class="text-xs md:text-sm font-bold w-4 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity('${item.id}', 1)" class="text-xs hover:text-[#ffcc00]"><i class="fas fa-plus"></i></button>
                </div>
                <p class="hidden sm:block text-[#ffcc00] font-black w-24 text-right text-sm">₾${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart('${item.id}')" class="text-white/20 hover:text-red-500"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
    }
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerText = `₾${total.toFixed(2)}`;
}

window.buildProductDetailHtml = function(product, id) {
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";
    const soldOut = product.inStock === false;

    const imgs = (product.imgs && product.imgs.length > 0) ? product.imgs : [fallbackImg];
    const thumbs = imgs.length > 1 ? `
        <div class="flex gap-2 mt-3 flex-wrap">
            ${imgs.map((src) => `
                <div onclick="document.getElementById('main-img-${id}').src='${src}'"
                     class="w-16 h-16 border border-white/10 hover:border-[#ffcc00] cursor-pointer overflow-hidden transition-colors">
                    <img src="${src}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
                </div>
            `).join('')}
        </div>` : '';

    const purchaseAction = soldOut
        ? `<span class="w-full sm:w-auto bg-white/5 border border-white/10 text-white/40 px-12 py-5 font-black uppercase tracking-widest inline-block text-center cursor-not-allowed">${window.t('sold_out')}</span>`
        : `<a href="https://extra.ge/seller/cd-5600/419" target="_blank" class="w-full sm:w-auto bg-[#ffcc00] text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-white transform hover:-translate-y-1 inline-block text-center">
                        ${window.t('secure_purchase')}
                    </a>`;

    const tracklistBlock = (product.tracklist && product.tracklist.length > 0) ? `
        <div class="mb-8">
            <h3 class="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">${window.t('tracklist')}</h3>
            <ol class="space-y-1 text-sm text-white/80">
                ${product.tracklist.map((track, i) => `
                <li class="flex gap-3 py-1.5 border-b border-white/5">
                    <span class="text-[#ffcc00]/60 font-bold w-6 flex-shrink-0">${String(i + 1).padStart(2, '0')}</span>
                    <span>${window.escapeHtml(track)}</span>
                </li>`).join('')}
            </ol>
        </div>` : '';

    const related = window.getRelatedProducts(product, id);
    const relatedBlock = related.length > 0 ? `
        <div class="mt-20">
            <h3 class="text-2xl md:text-3xl font-black uppercase italic mb-6">${window.t('you_might_also_like')}</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                ${related.map(p => window.cardHtml(p, false)).join('')}
            </div>
        </div>` : '';

    return `
        <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
                <button onclick="showPage('catalog')" class="text-xs font-bold uppercase tracking-widest text-[#ffcc00] mb-8 hover:underline">
                    <i class="fas fa-arrow-left mr-2"></i> ${window.t('back_to_catalog')}
                </button>
                <div class="aspect-square glass p-4 border-2 border-white/5 relative">
                    ${soldOut ? `<div class="absolute top-6 left-6 z-10 bg-black/80 border border-white/20 text-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest">${window.t('sold_out')}</div>` : ''}
                    <img id="main-img-${id}" src="${imgs[0]}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover border border-white/10 ${soldOut ? 'opacity-40' : ''}">
                </div>
                ${thumbs}
            </div>
            <div>
                <div class="flex items-center space-x-4 mb-4">
                    <span class="h-px w-8 bg-[#ffcc00]"></span>
                    <span class="text-[#ffcc00] font-bold text-[10px] md:text-xs uppercase tracking-widest">Serial_ID: ${id}-HIFI</span>
                </div>
                <h2 class="text-3xl md:text-5xl font-black uppercase italic mb-2">${product.album}</h2>
                <p class="text-xl md:text-2xl text-white/40 uppercase font-light tracking-tighter mb-8">${product.artist}</p>
                <div class="glass p-6 md:p-8 border-l-4 border-[#ffcc00] mb-8 relative">
                    <p class="text-sm leading-relaxed text-white/80">${product.description || 'Standard high-fidelity master recording.'}</p>
                </div>
                <div class="flex flex-col sm:flex-row items-start sm:items-end gap-6 md:gap-8 mb-12">
                    <div>
                        <p class="text-[9px] text-white/30 uppercase tracking-[0.3em] mb-1">${window.t('unit_price')}</p>
                        <p class="text-4xl md:text-5xl font-black text-[#ffcc00]">₾${product.price.toFixed(2)}</p>
                    </div>
                    ${purchaseAction}
                </div>
                ${tracklistBlock}
            </div>
        </div>
        ${relatedBlock}
    `;
}

window.getRelatedProducts = function(product, id) {
    const others = fullCatalog.filter(p => p.id !== id);
    const sameArtist = others.filter(p => p.artist === product.artist);
    const rest = others.filter(p => p.artist !== product.artist).sort(() => 0.5 - Math.random());
    return [...sameArtist, ...rest].slice(0, 4);
}

window.showProductDetail = async function(id) {
    const product = window.getProduct(id);
    const mount = document.getElementById('detail-mount');
    window.showPage('product-detail', id);
    mount.innerHTML = window.buildProductDetailHtml(product, id);
}

window.toggleAI = function() {
    const widget = document.getElementById('ai-chat-widget');
    if (widget.classList.contains('scale-0')) {
        widget.classList.remove('scale-0', 'opacity-0', 'pointer-events-none');
        widget.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
    } else {
        widget.classList.add('scale-0', 'opacity-0', 'pointer-events-none');
        widget.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
    }
}

const PAGE_PATHS = { home: '/', catalog: '/catalog', socials: '/socials', about: '/about', faq: '/faq', how: '/how-to-buy', cart: '/cart' };
const PATH_PAGES = Object.fromEntries(Object.entries(PAGE_PATHS).map(([page, path]) => [path, page]));

function normalizePath(p) {
    return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

window.showPage = function(id, productId) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const n = document.getElementById(`nav-${id}`);
    if (n) n.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const path = id === 'product-detail' ? `/cd/${productId}` : (PAGE_PATHS[id] || '/');
    if (normalizePath(location.pathname) !== path) {
        history.pushState({ page: id, productId }, '', path);
    }
}

window.renderRoute = function(path) {
    const cdMatch = normalizePath(path).match(/^\/cd\/([^/]+)$/);
    if (cdMatch && window.getProduct(cdMatch[1]).artist !== 'Unknown') {
        window.showProductDetail(cdMatch[1]);
        return;
    }
    const page = PATH_PAGES[normalizePath(path)] || 'home';
    window.showPage(page);
}

window.addEventListener('popstate', () => window.renderRoute(location.pathname));

window.populateFilters = function() {
    const artistSelect = document.getElementById('filter-artist');
    if (!artistSelect) return;
    const uniqueArtists = [...new Set(fullCatalog.map(item => item.artist))].sort();
    uniqueArtists.forEach(artist => {
        const option = document.createElement('option');
        option.value = artist;
        option.textContent = artist;
        option.className = "bg-[#0a0a0a]";
        artistSelect.appendChild(option);
    });
}

window.applyFilters = function() {
    const query = document.getElementById('catalog-search').value.toLowerCase();
    const selectedArtist = document.getElementById('filter-artist').value;
    const sortOrder = document.getElementById('sort-price').value;
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    let filtered = fullCatalog.filter(p => {
        const matchesSearch = p.artist.toLowerCase().includes(query) || p.album.toLowerCase().includes(query);
        const matchesArtist = selectedArtist === 'all' || p.artist === selectedArtist;
        return matchesSearch && matchesArtist;
    });
    if (sortOrder === 'low-high') filtered.sort((a, b) => a.price - b.price);
    else if (sortOrder === 'high-low') filtered.sort((a, b) => b.price - a.price);

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-20 text-center text-white/20 uppercase font-black tracking-widest">${window.t('no_matches')}</div>`;
    } else {
        grid.innerHTML = filtered.map(p => window.cardHtml(p, false)).join('');
    }
}

window.cardHtml = function(p, isC) {
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";
    const imgSrc = window.getImg(p);
    const soldOut = p.inStock === false;
    return `
    <div class="cd-card glass p-3 md:p-4 rounded-sm group cursor-pointer ${isC ? 'min-w-[240px] md:min-w-[320px]' : ''}" onclick="showProductDetail('${p.id}')">
        <div class="relative mb-3 md:mb-4 aspect-square overflow-hidden bg-white/5">
            <img src="${imgSrc}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover ${soldOut ? 'opacity-40' : ''}">
            ${soldOut ? `<div class="absolute top-2 left-2 bg-black/80 border border-white/20 text-white/80 px-2 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest">${window.t('sold_out')}</div>` : ''}
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                ${soldOut
                    ? `<span class="bg-white/10 text-white/50 w-3/4 py-2 text-[10px] font-black uppercase text-center">${window.t('sold_out')}</span>`
                    : `<button onclick="addToCart(event, '${p.id}')" class="bg-[#ffcc00] text-black w-3/4 py-2 text-[10px] font-black uppercase">${window.t('add_to_cart')}</button>`}
            </div>
        </div>
        <div class="flex justify-between items-start">
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-[10px] md:text-xs uppercase truncate pr-2 text-white">${p.album}</h3>
                <p class="text-white/40 text-[8px] md:text-[10px] uppercase truncate">${p.artist}</p>
            </div>
            <span class="text-[#ffcc00] font-bold text-[10px] md:text-xs">₾${p.price.toFixed(2)}</span>
        </div>
    </div>
    `;
};

window.renderAll = function() {
    const carousel = document.getElementById('home-carousel');
    const newArr = document.getElementById('new-arrivals-list');
    const randomCatalog = [...fullCatalog].sort(() => 0.5 - Math.random());
    if (carousel) carousel.innerHTML = randomCatalog.slice(0, 6).map(p => window.cardHtml(p, true)).join('');
    window.applyFilters();
    if (newArr && fullCatalog.length > 0) {
        const newestFirst = [...fullCatalog].sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        newArr.innerHTML = newestFirst.slice(0, 4).map(p => `
            <div class="glass p-4 md:p-8 flex flex-col sm:flex-row gap-4 md:gap-8 items-center border-l-4 md:border-l-8 border-[#ffcc00] group cursor-pointer" onclick="showProductDetail('${p.id}')">
                <div class="w-24 h-24 md:w-40 md:h-40 bg-white/10 flex-shrink-0 rounded-sm overflow-hidden">
                    <img src="${window.getImg(p)}" onerror="this.src='https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80'" class="w-full h-full object-cover">
                </div>
                <div class="text-center sm:text-left min-w-0">
                    <span class="bg-[#ffcc00] text-black px-2 py-1 text-[8px] md:text-[10px] font-black uppercase">${window.t('newly_added')}</span>
                    <h3 class="text-lg md:text-2xl font-black italic mt-3 md:mt-4 uppercase text-white truncate">${p.album}</h3>
                    <p class="text-white/40 mt-1 md:mt-2 text-xs truncate">${p.artist}</p>
                </div>
            </div>
        `).join('');
    }
}

window.scrollCarousel = function(dir) {
    document.getElementById('home-carousel').scrollBy({ left: dir * 300, behavior: 'smooth' });
}

// ==========================================
// 🎧 HERO CD PLAYER — user-designed widget (built in a separate Claude
// session; this is that widget's own JS, ported in as-authored — same
// physics-based spin-up/spin-down, motion blur, and playback state
// machine, just wrapped in a named init function instead of an
// auto-running IIFE so it starts from window.onload like everything else.
// ==========================================
window.initCd5600Player = function() {
    const root = document.getElementById('cd5600');
    if (!root) return;
    const $ = (s) => root.querySelector(s);
    const disc = $('[data-disc]'), art = $('[data-art]'), halo = $('[data-halo]'), led = $('[data-led]'),
        sweep = $('[data-sweep]'), dot = $('[data-dot]'), trackEl = $('[data-track]'), timeEl = $('[data-time]'),
        statusEl = $('[data-status]'), playBtn = $('[data-play]'), powerIcon = $('[data-power] svg');

    const MAX = 240; // deg/sec (~40 RPM — logo stays readable). Use ~3000 for realistic 500 RPM.
    let powered = false, playing = false, track = 1;
    let vel = 0, angle = 0, fluct = 0, last = null, elapsed = 0;

    const PLAY_SVG = '<svg width="22" height="24" viewBox="0 0 22 24"><polygon points="4,2 4,22 20,12"/></svg>';
    const PAUSE_SVG = '<svg width="20" height="22" viewBox="0 0 20 22"><rect x="3" y="2" width="4.5" height="18" rx="1.4"/><rect x="12.5" y="2" width="4.5" height="18" rx="1.4"/></svg>';

    function sync() {
        [$('[data-prev]'), playBtn, $('[data-next]')].forEach((b) => {
            b.style.opacity = powered ? '1' : '0.34'; b.style.pointerEvents = powered ? 'auto' : 'none';
        });
        powerIcon.querySelectorAll('path,line').forEach((n) => n.setAttribute('stroke', powered ? 'var(--acc)' : '#9a9aa0'));
        powerIcon.style.filter = powered ? 'drop-shadow(0 0 6px color-mix(in srgb,var(--acc) 80%,transparent))' : 'none';
        dot.style.background = powered ? 'var(--acc)' : '#3a2b0a';
        dot.style.boxShadow = powered ? '0 0 8px 1px color-mix(in srgb,var(--acc) 80%,transparent)' : 'none';
        dot.style.animation = (powered && playing) ? 'cdLedBlink 1.1s ease-in-out infinite' : 'none';
        statusEl.textContent = !powered ? 'STANDBY' : (playing ? 'PLAYING' : 'PAUSED');
        statusEl.style.color = powered ? 'color-mix(in srgb,var(--acc) 85%,white)' : 'rgba(255,255,255,.34)';
        playBtn.innerHTML = playing ? PAUSE_SVG : PLAY_SVG;
        trackEl.textContent = 'TR ' + String(track).padStart(2, '0');
    }

    function togglePower() {
        powered = !powered; if (!powered) playing = false;
        if (powered) {
            led.style.animation = 'none'; void led.offsetWidth;
            led.style.animation = 'cdSeamRipple 1s ease-out forwards, cdIdlePulse 4.5s ease-in-out 1s infinite';
            sweep.style.animation = 'none'; void sweep.offsetWidth; sweep.style.animation = 'cdSweep 1.2s ease-out';
        } else { led.style.animation = 'none'; led.style.opacity = '0'; elapsed = 0; }
        sync();
    }
    function togglePlay() { if (powered) { playing = !playing; sync(); } }
    function fluctMag() { return MAX * 0.5; }
    function changeTrack(d) {
        if (!powered) return;
        track += d; if (track < 1) track = 12; if (track > 12) track = 1;
        elapsed = 0; fluct = d > 0 ? -fluctMag() : fluctMag();
        sync();
        trackEl.style.animation = 'none'; void trackEl.offsetWidth; trackEl.style.animation = 'cdFlash .55s ease-in-out';
    }

    $('[data-power]').addEventListener('click', togglePower);
    playBtn.addEventListener('click', togglePlay);
    $('[data-next]').addEventListener('click', () => changeTrack(1));
    $('[data-prev]').addEventListener('click', () => changeTrack(-1));

    function tick(t) {
        if (last == null) last = t;
        let dt = (t - last) / 1000; last = t; if (dt > 0.05) dt = 0.05;
        const spinning = powered && playing;
        const tgt = spinning ? MAX + fluct : 0;
        fluct += (0 - fluct) * Math.min(1, 3 * dt);
        const k = tgt > vel ? 1.9 : 2.8;
        vel += (tgt - vel) * Math.min(1, k * dt);
        if (!spinning && Math.abs(vel) < 6) {
            vel = 0; const near = Math.round(angle / 360) * 360;
            angle += (near - angle) * Math.min(1, 9 * dt);
            if (Math.abs(near - angle) < 0.15) angle = near % 360;
        } else { angle = (angle + vel * dt) % 360; }
        const speed = Math.min(1, Math.abs(vel) / MAX);
        disc.style.transform = 'rotate(' + angle.toFixed(2) + 'deg)';
        art.style.filter = 'blur(' + (speed * 0.7).toFixed(2) + 'px)';
        halo.style.opacity = (speed * 0.4).toFixed(3);
        if (spinning) elapsed += dt;
        const s = Math.floor(elapsed);
        timeEl.textContent = String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
        requestAnimationFrame(tick);
    }

    sync();
    requestAnimationFrame(tick);
    // auto power-on + auto-play so it's already "alive" without needing a click
    setTimeout(togglePower, 700);
    setTimeout(() => { if (powered && !playing) togglePlay(); }, 2000);
}

window.renderSocials = async function() {
    const grid = document.getElementById('insta-grid');
    if (!grid) return;
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";
    try {
        const response = await fetch('https://feeds.behold.so/n0vxTxmQfQ1tWOb3jcLK');
        const data = await response.json();
        const posts = data.posts || [];
        grid.innerHTML = posts.map(post => {
            const img = post.sizes?.large?.mediaUrl || post.sizes?.medium?.mediaUrl || fallbackImg;
            const url = post.permalink || 'https://www.instagram.com/cd.5600/';
            return `
                <a href="${url}" target="_blank" class="aspect-square bg-white/5 relative group block overflow-hidden border border-transparent hover:border-[#ffcc00] transition-colors">
                    <img src="${img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                        <span class="text-white text-xs font-bold uppercase tracking-widest">${window.t('view_instagram')}</span>
                    </div>
                </a>
            `;
        }).join('');
    } catch (e) {
        console.error('Failed to load Instagram feed:', e);
        grid.innerHTML = '<div class="col-span-3 text-center text-white/20 uppercase tracking-widest py-10">Feed unavailable</div>';
    }
}

window.chatMessages = [];

async function fetchGeminiWithRetry(payload, retries = 5) {
    const url = `/.netlify/functions/chat`;
    let delay = 1000;
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        } catch (error) {
            if (i === retries - 1) { console.error("Fetch Error:", error); throw error; }
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
}

window.askAI = async function() {
    const input = document.getElementById('ai-input');
    const historyDiv = document.getElementById('ai-chat-history');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    historyDiv.innerHTML += `<div class="p-3 bg-white/5 border border-white/10 rounded-lg text-right text-white ml-8 shadow-md"><span class="text-[#ffcc00] text-[10px] font-bold uppercase tracking-widest block mb-1">You</span>${text}</div>`;
    const msgId = 'msg-' + Date.now();
    historyDiv.innerHTML += `<div id="${msgId}" class="p-3 bg-[#ffcc00]/5 border border-[#ffcc00]/20 rounded-lg text-white/60 font-mono animate-pulse mr-8 shadow-md">✨ Checking vault databanks...</div>`;
    historyDiv.scrollTop = historyDiv.scrollHeight;
    try {
        window.chatMessages.push({ role: "user", parts: [{ text: text }] });
        const compactCatalog = fullCatalog.map(c => ({ id: c.id, artist: c.artist, album: c.album, price: c.price }));
        const systemPrompt = `You are the CDSHOP Assistant for CD5600, a CD shop in Tbilisi, Georgia. Shipping: Tbilisi 7.99 GEL, outside Tbilisi 9.99 GEL, mountainous 10.99 GEL. All CDs are 100% authentic original pressings. Factory sealed. Custom requests via Instagram DM. Returns only if seal intact or disc defective. Catalog: ${JSON.stringify(compactCatalog)}. Keep responses concise and helpful with an edgy audiophile tone.`;
        const payload = { systemInstruction: { parts: [{ text: systemPrompt }] }, contents: window.chatMessages };
        const responseText = await fetchGeminiWithRetry(payload);
        window.chatMessages.push({ role: "model", parts: [{ text: responseText }] });
        const msgEl = document.getElementById(msgId);
        msgEl.classList.remove('animate-pulse', 'text-white/60', 'font-mono');
        msgEl.classList.add('text-white/90');
        msgEl.innerHTML = `<span class="text-[#ffcc00] text-[10px] font-bold uppercase tracking-widest block mb-1">CD5600</span>${responseText.replace(/\n/g, '<br>')}`;
        historyDiv.scrollTop = historyDiv.scrollHeight;
    } catch (e) {
        document.getElementById(msgId).innerHTML = `<span class="text-red-500 font-bold">Connection to mainframe lost. (Error 401: Unauthorized)</span>`;
        window.chatMessages.pop();
    }
}

window.onload = async () => {
    const res = await fetch('/data/catalog.json');
    fullCatalog = await res.json();
    window.populateFilters();
    window.renderAll();
    window.initCd5600Player();
    await window.renderSocials();
    window.updateCartUI();
    window.applyTranslations();
    window.renderRoute(location.pathname);
};
