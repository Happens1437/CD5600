// RESTORED FULL CATALOG
const fullCatalog = [
    { id: 100, artist: 'Rolling Stones', album: 'Tattoo You', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/1/16/TattooYou81.jpg', description: 'Classic rock masterpiece featuring "Start Me Up".' },
    { id: 104, artist: 'Pink Floyd', album: 'Dark Side of the Moon', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png', description: 'The ultimate audiophile benchmark.' },
    { id: 106, artist: 'Radiohead', album: 'OK Computer', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png', description: 'Atmospheric and complex alternative rock.' },
    { id: 112, artist: 'Nirvana', album: 'Nevermind', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg', description: 'The grunge record that changed the world.' },
    { id: 133, artist: 'Daft Punk', album: 'Random Access Memories', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Daft_Punk_-_Random_Access_Memories.png/250px-Daft_Punk_-_Random_Access_Memories.png', description: 'Electronic music produced with analog warmth.' },
    { id: 140, artist: 'Gorillaz', album: 'Cracker Island', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Cracker_Island.png/250px-Cracker_Island.png', description: 'Crisp electronic and pop production.' },
    { id: 141, artist: 'Linkin Park', album: 'Meteora 20th Anniversary Edition', price: 65.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Meteora20_-_Linkin_Park.jpg/250px-Meteora20_-_Linkin_Park.jpg', description: 'Definitive remastered edition.' },
    { id: 142, artist: 'Twenty One Pilots', album: 'Clancy', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Twenty_One_Pilots_-_Clancy.png/250px-Twenty_One_Pilots_-_Clancy.png', description: 'Latest conceptual chapter.' },
    { id: 143, artist: 'Kendrick Lamar', album: 'Mr. Morale & The Big Steppers', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png/250px-Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png', description: 'Grammy-winning deep double album.' },
    { id: 144, artist: 'XXXTENTACION', album: 'Skins', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/XXXTentacion_%E2%80%93_Skins.png/250px-XXXTentacion_%E2%80%93_Skins.png', description: 'Posthumous emotional delivery.' },
    { id: 145, artist: 'Lana Del Rey', album: 'Did You Know That There’s a Tunnel Under Ocean Blvd', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Lana_Del_Rey_-_Did_You_Know_That_There%27s_a_Tunnel_Under_Ocean_Blvd.png', description: 'Rich orchestral pop.' },
    { id: 146, artist: 'Billie Eilish', album: 'Happier Than Ever', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Billie_Eilish_-_Happier_Than_Ever.png/250px-Billie_Eilish_-_Happier_Than_Ever.png', description: 'Immaculate studio mastering.' },
    { id: 147, artist: 'Lana Del Rey', album: 'Norman Fucking Rockwell!', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png/250px-Lana_Del_Rey_-_Norman_Fucking_Rockwell.png', description: 'Masterfully produced pop record.' },
    { id: 148, artist: 'Lana Del Rey', album: 'Blue Banisters', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Lana_Del_Rey_-_Blue_Banisters_cover.png/250px-Lana_Del_Rey_-_Blue_Banisters_cover.png', description: 'Intimate vocal tracking.' },
    { id: 149, artist: 'Justin Hurwitz', album: 'La La Land Score', price: 40.00, img: 'https://i.discogs.com/ECTi5kla4dlzslpWD_1GTlfYffLm82SxkH_iFfLc5GE/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMjQ4/Mzc3LTE0OTQwOTE2/NjktMTEyMS5qcGVn.jpeg', description: 'Sweeping orchestral arrangements.' },
    { id: 150, artist: 'Lana Del Rey', album: 'Lust for Life', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Lana_Del_Rey_-_Lust_for_Life.png/250px-Lana_Del_Rey_-_Lust_for_Life.png', description: 'Cinematic pop production.' },
    { id: 151, artist: 'Maroon 5', album: 'Jordi', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Maroon_5_-_Jordi.png/250px-Maroon_5_-_Jordi.png', description: 'Punchy low-end engineering.' },
    { id: 152, artist: 'The Strokes', album: 'The New Abnormal', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/The_Strokes_-_The_New_Abnormal.png/250px-The_Strokes_-_The_New_Abnormal.png', description: 'Rick Rubin produced alt-rock.' },
    { id: 153, artist: 'Kendrick Lamar', album: 'Good Kid, M.A.A.D City', price: 45.00, img: 'https://cdn-images.dzcdn.net/images/cover/b5be27644d505bad7bdb516fe4165475/500x500.jpg', description: 'Cinematic hip-hop masterpiece.' },
    { id: 154, artist: 'Charli XCX', album: 'Brat', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/250px-Charli_XCX_-_Brat_%28album_cover%29.png', description: 'High-energy hyperpop.' },
    { id: 155, artist: 'Taylor Swift', album: '1989', price: 55.00, img: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png', description: 'Glistening 80s-inspired synth-pop.' },
    { id: 156, artist: 'Radiohead', album: 'In Rainbows', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Inrainbowscover.png/250px-Inrainbowscover.png', description: 'Warm analog tape transfers.' },
    { id: 157, artist: 'Frank Ocean', album: 'Channel Orange', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg', description: 'Lush, genre-bending R&B.' },
    { id: 158, artist: 'Red Hot Chili Peppers', album: 'I\'m with You', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/RHCP_I%27m_With_You_Cover.jpg/250px-RHCP_I%27m_With_You_Cover.jpg', description: 'Dynamic funk-rock.' },
    { id: 159, artist: 'Limp Bizkit', album: 'The Unquestionable Truth', price: 35.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/The_Unquestionable_Truth_%28Part_1%29.jpg/250px-The_Unquestionable_Truth_%28Part_1%29.jpg', description: 'Heavy, raw nu-metal.' },
    { id: 160, artist: 'KISS', album: 'Tokyo 2001', price: 40.00, img: 'https://i.discogs.com/AWwNbNPwgaEHwqO6wlp6PgQ4U_euQZUAVTiw1KAkDe8/rs:fit/g:sm/q:90/h:553/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9MLTI3MDYw/MTQtMTY3MzQ5NjU1/NS02MjA5LmpwZWc.jpeg', description: 'Soundboard recording.' },
    { id: 161, artist: 'AC/DC', album: 'Power Up', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/ACDCPowerUp.jpg/250px-ACDCPowerUp.jpg', description: 'Pure hard rock tone.' },
    { id: 162, artist: 'The Beatles', album: 'Let It Be', price: 65.00, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Beatles_-_Let_It_Be.png/250px-The_Beatles_-_Let_It_Be.png', description: 'Legendary studio final.' },
    { id: 163, artist: 'Radiohead', album: 'TKOL RMX', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/84/TKOL_RMX_1234567.png/250px-TKOL_RMX_1234567.png', description: 'Complex electronic remixes.' },
    { id: 164, artist: 'Coldplay', album: 'Rush of Blood to the Head', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png/250px-Coldplay_-_A_Rush_of_Blood_to_the_Head_Cover.png', description: 'Sweeping alt-rock anthems.' },
    { id: 165, artist: 'Coldplay', album: 'Viva la Vida', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png/250px-Coldplay_-_Viva_la_Vida_or_Death_and_All_His_Friends.png', description: 'Expansive instrumentation.' },
    { id: 166, artist: 'Ozzy Osbourne', album: 'Patient Number 9', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/OzzyOsbournePatientNumber9.jpg/250px-OzzyOsbournePatientNumber9.jpg', description: 'Modern heavy metal.' },
    { id: 167, artist: 'Lamb of God', album: 'Omens', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/LambofGod_Omens.jpg/250px-LambofGod_Omens.jpg', description: 'Crushing groove metal.' },
    { id: 168, artist: 'Red Hot Chili Peppers', album: 'Greatest Hits', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/79/GreatestHitsRHCP.jpg/250px-GreatestHitsRHCP.jpg', description: 'Essential collection.' },
    { id: 169, artist: 'Juice WRLD', album: 'Legends Never Die', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Juice_Wrld_-_Legends_Never_Die.png/250px-Juice_Wrld_-_Legends_Never_Die.png', description: 'Melodic emo-rap.' },
    { id: 170, artist: 'Slipknot', album: 'We Are Not Your Kind', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Slipknot_-_We_Are_Not_Your_Kind.png/250px-Slipknot_-_We_Are_Not_Your_Kind.png', description: 'Brutally heavy triumph.' },
    { id: 171, artist: 'Eminem', album: 'Curtain Call 2', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Eminem_-_Curtain_Call_2.png/250px-Eminem_-_Curtain_Call_2.png', description: 'Iconic hip-hop beats.' },
    { id: 172, artist: 'Green Day', album: 'Father of All', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Father_of_All.jpg/250px-Father_of_All.jpg', description: 'Garage-rock inspired punk.' },
    { id: 173, artist: 'Juice WRLD', album: 'Fighting Demons', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Juice_Wrld_-_Fighting_Demons.png/250px-Juice_Wrld_-_Fighting_Demons.png', description: 'Trap atmosphere.' },
    { id: 174, artist: 'Radiohead', album: 'The King of Limbs', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Radioheadthekingoflimbs.png/250px-Radioheadthekingoflimbs.png', description: 'Polyrhythmic texture.' },
    { id: 175, artist: 'Sam Smith', album: 'Love Goes', price: 35.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Sam_Smith_-_Love_Goes.png/250px-Sam_Smith_-_Love_Goes.png', description: 'Lush pop orchestration.' },
    { id: 176, artist: 'Sevendust', album: 'All I See Is War', price: 35.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/SevendustAlliseeiswar.jpg/250px-SevendustAlliseeiswar.jpg', description: 'Melodic metal groove.' },
    { id: 177, artist: 'Mike Shinoda', album: 'Post Traumatic', price: 35.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Post_Traumatic_album.jpg/250px-Post_Traumatic_album.jpg', description: 'Solo genre-blending work.' },
    { id: 178, artist: 'Oasis', album: 'Be Here Now', price: 75.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/BeHereNowcover.jpg/250px-BeHereNowcover.jpg', description: 'Deluxe 3CD Edition.' },
    { id: 179, artist: 'Kanye West', album: 'Graduation', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg', description: 'Stadium rap synth textures.' },
    { id: 180, artist: 'Tyler, The Creator', album: 'Call Me If You Get Lost', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Call_Me_If_You_Get_Lost_album_cover.jpg/250px-Call_Me_If_You_Get_Lost_album_cover.jpg', description: 'Mixtape-era inspired rap.' },
    { id: 181, artist: 'Kendrick Lamar', album: 'DAMN.', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png', description: 'Pulitzer winning clarity.' },
    { id: 182, artist: 'XXXTENTACION', album: 'Bad Vibes Forever', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Bad_vibes_forever_xxxtentacion.jpg/250px-Bad_vibes_forever_xxxtentacion.jpg', description: 'Multi-genre release.' },
    { id: 183, artist: 'Metallica', album: '...And Justice for All', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Metallica_-_...And_Justice_for_All_cover.jpg/250px-Metallica_-_...And_Justice_for_All_cover.jpg', description: 'Infamous dry thrash mix.' },
    { id: 184, artist: 'Led Zeppelin', album: 'Remasters', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Led_Zeppelin_-_Remasters.jpg/250px-Led_Zeppelin_-_Remasters.jpg', description: 'Dynamic analog transfers.' },
    { id: 185, artist: 'Travis Scott', album: 'ASTROWORLD', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Travis_Scott_-_Astroworld.png/250px-Travis_Scott_-_Astroworld.png', description: 'Psychedelic trap opera.' },
    { id: 186, artist: 'Tyler, The Creator', album: 'IGOR', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg', description: 'Experimental neo-soul.' },
    { id: 187, artist: 'Pink Floyd', album: 'Wish You Were Here', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png', description: 'Absolute audio perfection.' },
    { id: 188, artist: 'Evangelion', album: 'Finally', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Evangelion_Finally.jpg/250px-Evangelion_Finally.jpg', description: 'Sweeping anime scores.' },
    { id: 189, artist: 'Twenty One Pilots', album: 'Scaled and Icy', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/5/52/Twenty_One_Pilots_-_Scaled_and_Icy.png', description: 'Vibrant alternative pop.' },
    { id: 190, artist: 'XXXTENTACION', album: '?', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/%3F_XXXTENTACION_Cover.png/250px-%3F_XXXTENTACION_Cover.png', description: 'Genre-defying trap metal.' },
    { id: 191, artist: 'XXXTENTACION', album: '17', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/XXXTentacion_17_CD_Cover.jpeg/250px-XXXTentacion_17_CD_Cover.jpeg', description: 'Lo-fi personal tracks.' },
    { id: 192, artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', price: 45.00, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cigarettes_After_Sex_%28album%29.svg/250px-Cigarettes_After_Sex_%28album%29.svg.png', description: 'Ambient dream pop.' },
    { id: 193, artist: 'The Notorious B.I.G.', album: 'Greatest Hits', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/a/a2/GreatestHitsBIG.jpg', description: 'East Coast boom-bap.' },
    { id: 194, artist: 'Alt-J', album: 'Relaxer', price: 35.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Alt-J_-_Relaxer_cover.jpg/250px-Alt-J_-_Relaxer_cover.jpg', description: 'Surreal sonic landscape.' },
    { id: 195, artist: 'Billie Eilish', album: 'Hit Me Hard and Soft', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png/250px-Billie_Eilish_-_Hit_Me_Hard_and_Soft.png', description: 'Immaculate sub-bass frequencies.' },
    { id: 196, artist: 'The Big Four', album: 'Live in Sofia', price: 55.00, img: 'https://i.discogs.com/W2ajR6Ob0ZJueOSTkLtsDU3tQy5VAh9ylfLUPxDqciQ/rs:fit/g:sm/q:90/h:600/w:433/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3NjU2/NDYtMTU2MDAwNDMx/MC0zODAzLmpwZWc.jpeg', description: 'Historical metal gathering.' },
    { id: 197, artist: 'Olivia Rodrigo', album: 'Guts', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png', description: 'Pop-punk instrumental tracking.' },
    { id: 198, artist: 'Olivia Rodrigo', album: 'Sour', price: 40.00, img: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Olivia_Rodrigo_-_SOUR.png', description: 'Explosive distorted pop.' }
];

let cart = [];

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
    return fullCatalog.find(x => x.id == id) || { artist: 'Unknown', album: 'Unknown Unit', price: 0, img: '' };
}

window.addToCart = function(event, id) {
    if (event) event.stopPropagation();
    const product = window.getProduct(id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
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
        cartMount.innerHTML = '<div class="text-center py-20 text-white/20 uppercase tracking-widest font-bold">Your inventory is empty</div>';
    } else {
        cartMount.innerHTML = cart.map(item => `
            <div class="glass p-4 md:p-6 flex items-center gap-4 md:gap-6 group">
                <div class="w-16 h-16 md:w-24 md:h-24 bg-white/5 flex-shrink-0">
                    <img src="${item.img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold uppercase italic truncate text-sm md:text-base">${item.album}</h4>
                    <p class="text-white/40 text-[9px] md:text-[10px] uppercase truncate">${item.artist}</p>
                </div>
                <div class="flex items-center gap-2 md:gap-4 bg-black/40 px-3 py-1.5 md:px-4 md:py-2 rounded-sm border border-white/5">
                    <button onclick="updateQuantity(${item.id}, -1)" class="text-xs hover:text-[#ffcc00]"><i class="fas fa-minus"></i></button>
                    <span class="text-xs md:text-sm font-bold w-4 text-center">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="text-xs hover:text-[#ffcc00]"><i class="fas fa-plus"></i></button>
                </div>
                <p class="hidden sm:block text-[#ffcc00] font-black w-24 text-right text-sm">₾${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})" class="text-white/20 hover:text-red-500"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
    }
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerText = `₾${total.toFixed(2)}`;
}

window.showProductDetail = async function(id) {
    const product = window.getProduct(id);
    const mount = document.getElementById('detail-mount');
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";
    window.showPage('product-detail');
    mount.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
                <button onclick="showPage('catalog')" class="text-xs font-bold uppercase tracking-widest text-[#ffcc00] mb-8 hover:underline">
                    <i class="fas fa-arrow-left mr-2"></i> Back to Catalog
                </button>
                <div class="aspect-square glass p-4 border-2 border-white/5">
                    <img src="${product.img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover border border-white/10">
                </div>
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
                    
                    <button onclick="askAIAbout(${id})" class="mt-6 w-full bg-white/5 border border-white/10 text-white px-6 py-3 font-bold uppercase tracking-widest hover:border-[#ffcc00] hover:text-[#ffcc00] transition-all text-xs flex items-center justify-center gap-2">
                        <i class="fas fa-sparkles"></i> ✨ Analyze Mastering Quality
                    </button>
                    <div id="ai-album-analysis-${id}" class="mt-4 text-xs text-white/80 leading-relaxed font-mono hidden bg-black/40 p-4 border border-[#ffcc00]/20 rounded-sm"></div>
                </div>
                <div class="flex flex-col sm:flex-row items-start sm:items-end gap-6 md:gap-8 mb-12">
                    <div>
                        <p class="text-[9px] text-white/30 uppercase tracking-[0.3em] mb-1">Unit Price</p>
                        <p class="text-4xl md:text-5xl font-black text-[#ffcc00]">₾${product.price.toFixed(2)}</p>
                    </div>
                    <a href="https://extra.ge/seller/cd-5600/419" target="_blank" class="w-full sm:w-auto bg-[#ffcc00] text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-white transform hover:-translate-y-1 inline-block text-center">
                       Secure Purchase
                  </a>
                </div>
            </div>
        </div>
    `;
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

window.showPage = function(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const n = document.getElementById(`nav-${id}`);
    if (n) n.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
        grid.innerHTML = '<div class="col-span-full py-20 text-center text-white/20 uppercase font-black tracking-widest">No matches found in vault</div>';
    } else {
        grid.innerHTML = filtered.map(p => window.cardHtml(p, false)).join('');
    }
}

window.cardHtml = function(p, isC) {
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";
    return `
    <div class="cd-card glass p-3 md:p-4 rounded-sm group cursor-pointer ${isC ? 'min-w-[240px] md:min-w-[320px]' : ''}" onclick="showProductDetail(${p.id})">
        <div class="relative mb-3 md:mb-4 aspect-square overflow-hidden bg-white/5">
            <img src="${p.img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3">
                <button onclick="addToCart(event, ${p.id})" class="bg-[#ffcc00] text-black w-3/4 py-2 text-[10px] font-black uppercase">Add to Cart</button>
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
        newArr.innerHTML = randomCatalog.slice(6, 10).map(p => `
            <div class="glass p-4 md:p-8 flex flex-col sm:flex-row gap-4 md:gap-8 items-center border-l-4 md:border-l-8 border-[#ffcc00] group cursor-pointer" onclick="showProductDetail(${p.id})">
                <div class="w-24 h-24 md:w-40 md:h-40 bg-white/10 flex-shrink-0 rounded-sm overflow-hidden">
                    <img src="${p.img}" onerror="this.src='https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80'" class="w-full h-full object-cover">
                </div>
                <div class="text-center sm:text-left min-w-0">
                    <span class="bg-[#ffcc00] text-black px-2 py-1 text-[8px] md:text-[10px] font-black uppercase">Newly Added</span>
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

// RESTORED FULL 9 SOCIAL POSTS
const instagramPosts = [
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.75761-15/503987529_17844996912498405_2388812368448295299_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzY0NzIzMDcwMjMxMDc0MTIyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0MDB4MTQwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=UHnAQk-PjOQQ7kNvwGP3Y7u&_nc_oc=Adn5WUvVNoYteR6D9BfVk1Hw43-Mp5awzSZlVztDrlnlTo7ofwDJK4WNBv_O66JT-Ak&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=YZvhmsXg0MsUnP2FDZ7E4w&oh=00_AfsZaHrX1VDndos1Ofh6KjR_nnqtDNK3jvIrvNonnGAZ5w&oe=699D7A41", likes: 142, comments: 8 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.75761-15/506293829_17847151443498405_6585257884382635914_n.jpg?stp=dst-jpg_e35_s750x750_sh0.08_tt6&_nc_cat=105&ig_cache_key=MzY1NDczNTc1MTE4MzI1NzMxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=hAANXlJ2s68Q7kNvwHsdJd3&_nc_oc=AdmObM6dH7c8BmR3CWt0mASg4i55oz-gUel9DOwaJYNODbpOwzwEX6num_sPp35K12I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=oOTBajhonjWzStozhKYgFA&oh=00_AfujRObf20VA8WQEnjSnogAYF7uLXVeBDJpqqTRnw5W82w&oe=699D78BF", likes: 89, comments: 3 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.82787-15/503467548_17850090549498405_1135554960457912479_n.webp?_nc_cat=110&ig_cache_key=MzY2OTQ5MzQxMDY0NjYwODk3MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=EJDudGYdlr4Q7kNvwG5Xv5G&_nc_oc=Adlv0TuUD1JxLJq_eF-PitUiK_GwRMdb2s_nJBMxGsO5Pb6e1T0XGnWtV9hfdfAOAFY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=YZvhmsXg0MsUnP2FDZ7E4w&oh=00_Aft4fJoxw8Zo3NjO3qtldGwUzCyxPjiJ-yGrn_8eZb6WPQ&oe=699DAD19", likes: 215, comments: 14 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.82787-15/514662905_17850093921498405_984266900009713654_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY2OTUwODk3NzcyMTk5NTM3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=QgWTJRs_r_EQ7kNvwGyzjZJ&_nc_oc=AdkabEbhP4cTuqYsv-TTc0DEARFASg4JXz5Njg-BkCMpy5WV9pwzFHw4CaiA6t-DoIU&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=IUk87LmpUZpqkFlRMMbQAA&oh=00_Aft7630DVo_8wADMaTbHtTLwIpc7ZSYg3JCUsRLAx1gZow&oe=699D91ED", likes: 304, comments: 22 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.82787-15/526744379_17853531912498405_6333513248661084237_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY4OTA2MzUzNzMxMDQzMDMyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=nI8050HfRN8Q7kNvwHovdPG&_nc_oc=Adkbmk-pUEDLYsbDSthFUOnQOf4LB9dncxz0nLOD852O4lTlj2cFm_bj6cBLRzrD_E4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=IUk87LmpUZpqkFlRMMbQAA&oh=00_AfvFh8be1out8xcGlSDIslV--U_fvEy4fZEvVL2K-C0DRQ&oe=699D93B8", likes: 120, comments: 5 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.82787-15/515444698_17850095007498405_6130634836618691552_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY2OTUxMzI5OTUwNzYzMjczNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=WYiCNjc-el4Q7kNvwEhZpxE&_nc_oc=Adn6Esx9fQJNMYboQ5Us2LhgN9z_6-xbizeGmP282jaeueCnqWWlGW9C3VByygufZic&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=IUk87LmpUZpqkFlRMMbQAA&oh=00_Aft1JVeL54h3XKpI1HX_X-Jpk0deJgyGEqTDwjD6gdHsLg&oe=699D942B", likes: 95, comments: 2 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-1.fna.fbcdn.net/v/t51.82787-15/523234648_17852515167498405_8186943714255175853_n.webp?_nc_cat=111&ig_cache_key=MzY4MzI1ODgzMDU5MTQ4MzU5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=Hw8TpAydxFAQ7kNvwF1seic&_nc_oc=AdlpxaQs-Q88ZTwVQI_MPja4OhooNBTe86OhXv-hiIbyCZ6VY-sdC1Oz5WkJnRZXVAE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-1.fna&_nc_gid=IUk87LmpUZpqkFlRMMbQAA&oh=00_AfuD8mQJX5qx8bXvIhaswdP2rEXXVvX5mQ4FBkDgaZCTBg&oe=699D82D5", likes: 412, comments: 31 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-2.fna.fbcdn.net/v/t51.82787-15/516785347_17850095142498405_1738140964918221688_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08_tt6&_nc_cat=109&ig_cache_key=MzY2OTUxNDUzMDUzNTg0OTc3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=F5wJ0HHCCYYQ7kNvwFZGx3E&_nc_oc=AdlQ0Udih3rxloKbpn4aP6PD1GXaxGcr40X_pa8jKpm0hVkXrMDu0rV1nXW-ERfz43I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-2.fna&_nc_gid=IUk87LmpUZpqkFlRMMbQAA&oh=00_AftsZkILcl-tiUT8T4_5THlz28z-FwBuPChvQtMEcj3kTg&oe=699D9FF9", likes: 178, comments: 9 },
    { url: "https://www.instagram.com/cd.5600/", img: "https://instagram.ftbs3-2.fna.fbcdn.net/v/t51.82787-15/529569444_17854638609498405_5511773162666903214_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzY5NTUwMzA2OTA2ODQ4OTkwNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=oHQQjtiJlWMQ7kNvwHnF34t&_nc_oc=AdmRn79_bDk7xn9S3sKcRixG5oMFW5fDUFIi_1qvA0pvkllz_DtlKZKF_7u7E_BZSFs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.ftbs3-2.fna&_nc_gid=YZvhmsXg0MsUnP2FDZ7E4w&oh=00_AfvLHi0kjdBkX3COJkpiUfwaiv0_zKm5GG5FmTYDVuVBBQ&oe=699D8C97", likes: 256, comments: 18 }
];

window.renderSocials = function() {
    const grid = document.getElementById('insta-grid');
    if (!grid) return;
    const fallbackImg = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80";
    grid.innerHTML = instagramPosts.map(post => `
        <a href="${post.url}" target="_blank" class="aspect-square bg-white/5 relative group block overflow-hidden border border-transparent hover:border-[#ffcc00] transition-colors">
            <img src="${post.img}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 md:gap-6 backdrop-blur-sm">
                <span class="text-white text-xs md:text-sm font-bold flex items-center gap-2"><i class="fas fa-heart text-[#ffcc00]"></i> ${post.likes}</span>
                <span class="text-white text-xs md:text-sm font-bold flex items-center gap-2"><i class="fas fa-comment text-[#ffcc00]"></i> ${post.comments}</span>
            </div>
        </a>
    `).join('');
}

// ==========================================
// ✨ GEMINI API LLM INTEGRATIONS
// ==========================================
window.chatMessages = [];

async function fetchGeminiWithRetry(payload, retries = 5) {
    // Pointing to your local Netlify Function instead of Google
    const url = `/.netlify/functions/chat`;
    let delay = 1000;
    
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        } catch (error) {
            if (i === retries - 1) {
                console.error("Sonic Curator Fetch Error:", error);
                throw error;
            }
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
    
    // Append User Message
    historyDiv.innerHTML += `<div class="p-3 bg-white/5 border border-white/10 rounded-lg text-right text-white ml-8 shadow-md"><span class="text-[#ffcc00] text-[10px] font-bold uppercase tracking-widest block mb-1">You</span>${text}</div>`;
    
    // Append Typing Indicator
    const msgId = 'msg-' + Date.now();
    historyDiv.innerHTML += `<div id="${msgId}" class="p-3 bg-[#ffcc00]/5 border border-[#ffcc00]/20 rounded-lg text-white/60 font-mono animate-pulse mr-8 shadow-md">✨ Checking vault databanks...</div>`;
    historyDiv.scrollTop = historyDiv.scrollHeight;
    
    try {
        window.chatMessages.push({ role: "user", parts: [{ text: text }] });
        
        // Pass compact catalog as context to Gemini
        const compactCatalog = fullCatalog.map(c => ({ id: c.id, artist: c.artist, album: c.album, price: c.price }));
        const systemPrompt = `You are the CDSHOP Assistant, a helpful, industrial assistant located on the website for a CD shop in Tbilisi, Georgia. 
        You act as the primary customer support and product recommendation engine.
        
        KNOWLEDGE BASE:
        - Location: Tbilisi, Georgia.
        - Shipping: Yes, we ship all around Georgia. Tbilisi Zone is 7.99 GEL. Outside Tbilisi (Batumi, Kutaisi, Rustavi, etc.) is 9.99 GEL. Mountainous regions are 10.99 GEL.
        - Authenticity: All CDs are 100% authentic, original European/American pressings. No bootlegs.
        - Condition: All brand-new imports are factory sealed.
        - Custom Requests: Yes, users can request specific out-of-print or limited masters via Instagram DM.
        - Returns: Only accepted if the factory seal is intact, OR if the disc arrives cracked/defective. No returns for "ordered by mistake".
        - Audio Quality: We specialize in 1.41 Mbps bit-perfect, lossless audio (Linear PCM encoding).
        
        PRODUCT CATALOG:
        Recommend high-fidelity CDs exclusively from this vault JSON: ${JSON.stringify(compactCatalog)}. 
        
        TONE & RULES:
        Keep responses concise, helpful, and focused. Use an edgy but professional audiophile tone. Use emojis sparingly. Do not invent products outside the catalog. If asked about shipping or policies, use the exact rules from the Knowledge Base above.`;
        
        const payload = {
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: window.chatMessages
        };
        
        const responseText = await fetchGeminiWithRetry(payload);
        
        // Update History State & UI
        window.chatMessages.push({ role: "model", parts: [{ text: responseText }] });
        const msgEl = document.getElementById(msgId);
        msgEl.classList.remove('animate-pulse', 'text-white/60', 'font-mono');
        msgEl.classList.add('text-white/90');
        msgEl.innerHTML = `<span class="text-[#ffcc00] text-[10px] font-bold uppercase tracking-widest block mb-1">CD5600</span>${responseText.replace(/\n/g, '<br>')}`;
        historyDiv.scrollTop = historyDiv.scrollHeight;
    } catch (e) {
        let errorMsg = "Connection to mainframe lost. (Error 401: Unauthorized)";
        document.getElementById(msgId).innerHTML = `<span class="text-red-500 font-bold">${errorMsg}</span>`;
        window.chatMessages.pop(); // Remove failed attempt
    }
}

window.askAIAbout = async function(id) {
    const product = getProduct(id);
    const div = document.getElementById(`ai-album-analysis-${id}`);
    div.classList.remove('hidden');
    div.innerHTML = '<span class="animate-pulse text-[#ffcc00]">✨ Analyzing master recording profile...</span>';
    
    const prompt = `Write a short, edgy, 2-sentence audiophile review focusing on the mastering quality, instrumentation, and physical CD fidelity of the album "${product.album}" by ${product.artist}. Frame it as an exclusive insight from the CD5600 vault.`;
    
    const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
    
    try {
        const text = await fetchGeminiWithRetry(payload);
        div.innerHTML = `<span class="text-[#ffcc00] uppercase font-bold tracking-widest mb-2 block">✨ Master Analysis Complete:</span> <span class="text-white">${text}</span>`;
    } catch (e) {
        let errorMsg = "Analysis failed. Network error.";
        div.innerHTML = `<span class="text-red-500 font-bold">${errorMsg}</span>`;
    }
}

window.onload = () => {
    window.populateFilters();
    window.renderAll();
    window.renderSocials();
    window.updateCartUI();
};
