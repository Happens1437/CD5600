// RESTORED FULL CATALOG
const fullCatalog = [
    { id: 100, artist: 'Rolling Stones', album: 'Tattoo You', price: 40.00, imgs: ['https://sonic.ge/dyn/gRPyKdrnDJM76LMtTEGhzN15dIsSXJF3wR9SE-ONU3s/rs:fit:720:0/plain/images/products/original/e852e589-323b-49fc-a315-286a9140807e.jpg'], description: 'Tattoo You (1981) is a seminal Rolling Stones album featuring the hit "Start Me Up," widely recognized for blending 1970s studio outtakes with new vocals and overdubs. It solidified a hard-rocking sound with hits like "Hang Fire" and ballads like "Waiting on a Friend".' },
    { id: 101, artist: 'Sam Smith', album: 'Love Goes', price: 35.00, imgs: ['https://sonic.ge/dyn/B6DEfRUlkiI4TqTtNeuStcv5EFBStFw-OKaVCFpr7wc/rs:fit:720:0/plain/images/products/original/7ccc642e-a184-4d5b-b05b-b0cb8fe5e750.jpg'], description: 'Love Goes, Sam Smith\'s third studio album (2020), is a pop-oriented "proper heartbreak" record exploring personal growth, loneliness, and regret following their first true heartbreak.' },
    { id: 102, artist: 'Radiohead', album: 'The King of Limbs', price: 40.00, imgs: ['https://sonic.ge/dyn/q_XimAf7F8Khm0vfO8aw0Od8mAlYuZo3nQYEmtW1CV0/rs:fit:720:0/plain/images/products/original/65a4c2a6-77fb-4ddf-9fd4-8d87f6ba3dac.jpg'], description: 'The King of Limbs (2011) is Radiohead\'s eighth studio album, a brief, rhythm-focused, and experimental project described as "moody, rhythm-heavy electronica" and "ambient psychedelia".' },
    { id: 103, artist: 'Radiohead', album: 'In Rainbows', price: 40.00, imgs: ['https://sonic.ge/dyn/0nAGctWcsp6JQH6bNpYFZVnVUKe8CBICkuCg5hjWN8c/rs:fit:720:0/plain/images/products/original/b1e1a3e2-205f-4dc1-a18d-b1d96a215908.jpg'], description: 'Released in 2007, Radiohead\'s In Rainbows is widely regarded as a masterpiece of alternative rock, blending warm, intimate, and introspective songwriting with electronic textures and lush instrumentation.' },
    { id: 104, artist: 'Pink Floyd', album: 'Dark Side of the Moon', price: 55.00, imgs: ['https://sonic.ge/dyn/O75VYfk7lrLrBhsixfpezjXNrHcWHO0GN1QXLkl9fJc/rs:fit:720:0/plain/images/products/original/80b9b775-28ef-4161-b7fe-35d2555e4044.jpg'], description: 'The Dark Side of the Moon (1973) is Pink Floyd\'s iconic 8th studio album, a progressive rock concept masterpiece exploring conflict, greed, time, death, and mental insanity.' },
    { id: 105, artist: 'Cigarettes After Sex', album: 'Cigarettes After Sex', price: 40.00, imgs: ['https://sonic.ge/dyn/UwRpGedIcnmMaGkntaeRNAtueUA_c3hljGVwg59a5c4/rs:fit:720:0/plain/images/products/original/a5559410-33e8-453c-bc14-b0698aee13b1.jpg'], description: 'Released in June 2017, Cigarettes After Sex is the debut studio album by the ambient dream pop band. Known for its slow, intimate vocals, the album is a cinematic exploration of love and romance. Debut album featuring "K.", "Apocalypse," and "Sunsetz."' },
    { id: 106, artist: 'Radiohead', album: 'OK Computer', price: 55.00, imgs: ['https://sonic.ge/dyn/290vXErkLQVhNjDsBw0iS8eYdDhiIOK-08zaqiAtBaM/rs:fit:720:0/plain/images/products/original/08b9aa8b-ef8d-43f9-beba-8bd62f1d73bf.jpg'], description: 'OK Computer (1997) is Radiohead\'s landmark third studio album, critically acclaimed for its prescient exploration of 21st-century anxiety, technological alienation, and consumerism. 2-disc version includes original album + B-sides.' },
    { id: 107, artist: 'Twenty One Pilots', album: 'Trench', price: 40.00, imgs: ['https://sonic.ge/dyn/EpU8Xhhr4zyzH84qOa-nd-5dHjnAec7NkHor1rskuDk/rs:fit:720:0/plain/images/products/original/42e630dc-1cee-4cc3-a122-bbc0a22f2fbc.jpg'], description: 'Trench (2018) is the fifth studio album by Twenty One Pilots, a concept record exploring mental health, suicide, and doubt through a fictional, dystopian narrative. Featuring "Jumpsuit," "Nico and the Niners," and "Chlorine."' },
    { id: 108, artist: 'Kanye West', album: 'Graduation', price: 40.00, imgs: ['https://sonic.ge/dyn/wSfVCgD0WQ2RcjerQCgW1ifc9j_yjlox7vH6u1fc8uw/rs:fit:720:0/plain/images/products/original/bbeeb8a3-5397-46a4-9ce6-ab694f755b23.jpg', 'https://sonic.ge/dyn/dx3XEW5oUCGun7c7Yu3tv9GqkJyuQdSjECFDCewXRTg/rs:fit:720:0/plain/images/products/original/3f1bf853-9004-452e-8c13-7f6185a3cebd.jpg'], description: 'Graduation (2007) is Kanye West\'s third studio album, marking a major sonic shift toward arena-ready synth-pop and electronic influences. Features hits like "Stronger," "Good Life," and "Homecoming."' },
    { id: 109, artist: 'The Beatles', album: 'Let It Be', price: 55.00, imgs: ['https://sonic.ge/dyn/fEPzzAia5ogLicaE0swP8zm5XPQePr3SEqYd5PkaIvw/rs:fit:720:0/plain/images/products/original/969f3335-eb0c-45d9-af07-289c529c3130.jpg'], description: 'The Beatles\' iconic final studio album, newly mixed by Giles Martin. The Special Edition Deluxe 2CD includes a disc of outtake highlights and a 40-page booklet, released alongside Peter Jackson\'s documentary "Get Back."' },
    { id: 110, artist: 'Kendrick Lamar', album: 'Good Kid, M.A.A.D City', price: 55.00, imgs: ['https://sonic.ge/dyn/869wjZYAISzuZz8z4yxQYhGwjfL1570owtlrnVdtO48/rs:fit:720:0/plain/images/products/original/b9c0ef58-f0e0-4f10-9ef3-cbadd5011ed9.jpg'], description: 'Good Kid, M.A.A.D City (2012) is Kendrick Lamar\'s cinematic major-label debut, chronicling a "day in the life" of his younger self navigating peer pressure, gang violence, and temptation in Compton. Deluxe 2CD edition.' },
    { id: 111, artist: 'Charli XCX', album: 'Brat', price: 40.00, imgs: ['https://sonic.ge/dyn/RflbravFoUeQv9fuMnegm3TKQBJy3NDgWed0YODU0aE/rs:fit:720:0/plain/images/products/original/051da6cf-5161-4a9b-b21d-18a1a0fa4c6f.jpg'], description: 'Brat (2024) is Charli XCX\'s critically acclaimed sixth studio album, defining a hedonistic, chaotic, and vulnerable "party girl" aesthetic. Featuring "Von Dutch," "360," and "Apple."' },
    { id: 112, artist: 'Nirvana', album: 'Nevermind', price: 40.00, imgs: ['https://sonic.ge/dyn/bhTCwLjBsfNgrHPAn-ka77OMREbPkz8Jkor6YfX0ouM/rs:fit:720:0/plain/images/products/original/aa057890-5af6-416f-b918-9cd5c1550f51.jpg'], description: 'Released on September 24, 1991, Nevermind is Nirvana\'s second studio album which brought grunge and alternative rock to the mainstream. Featuring "Smells Like Teen Spirit," "Come as You Are," and "Lithium."' },
    { id: 113, artist: 'Taylor Swift', album: '1989', price: 50.00, imgs: ['https://sonic.ge/dyn/OojXFjLqC3wGEhWyJ7bXKLpnDb6VqMLx8nAGx0fWbm8/rs:fit:720:0/plain/images/products/original/da785510-6ee1-406c-9240-bbc702dfbf98.jpg'], description: 'The 2014 Deluxe Edition of Taylor Swift\'s 1989 features 13 tracks plus three bonus songs and three exclusive songwriting voice memos. Includes a 20-page booklet and collectible photo prints.' },
    { id: 114, artist: 'Maroon 5', album: 'Jordi', price: 40.00, imgs: ['https://sonic.ge/dyn/dhkgMAO09kh1Z5ek-0VxN5tb6OjhTB7mlQGARfucCCI/rs:fit:720:0/plain/images/products/original/14880908-165a-46a4-a171-433e866833ea.jpg'], description: 'Jordi is the seventh studio album by Maroon 5, released on June 11, 2021, as a tribute to their late manager Jordan Feldstein. Features collaborations with Megan Thee Stallion, Stevie Nicks, and H.E.R.' },
    { id: 115, artist: 'The Strokes', album: 'The New Abnormal', price: 40.00, imgs: ['https://sonic.ge/dyn/3ogSpaw9KuGmTBzpJ0qvZSGFFdt4-shAJ1CYPRZ_M4o/rs:fit:720:0/plain/images/products/original/d7327329-4d17-4bbb-9b81-6f5ee4eced1f.jpg'], description: 'The New Abnormal (2020) is the critically acclaimed sixth studio album by The Strokes, produced by Rick Rubin. Features standout tracks like "At the Door" and Grammy-winning "The Adults Are Talking."' },
    { id: 116, artist: 'Cowboy Bebop', album: 'OST (Cassette)', price: 35.00, imgs: ['https://cdn-p.smehost.net/sites/af0adc8ea1314bfb8328afdc06ce1e06/wp-content/uploads/2020/07/Final-Cover_Cowboy-Bebop-scaled.jpg', 'https://img.alicdn.com/imgextra/i1/3082239007/O1CN01AAyqb02GPG4Unx4t5_!!3082239007.jpg_.webp', 'https://img.alicdn.com/imgextra/i4/3082239007/O1CN01wgwl5Y2GPG4Uny9NY_!!3082239007.jpg_.webp'], description: 'The Cowboy Bebop Original Soundtrack cassette features the iconic jazz, blues, and bebop score composed by Yoko Kanno and the Seatbelts. This analog release captures the noir-infused soundtrack in a specialized cassette format.' },
    { id: 117, artist: 'Evangelion', album: 'Finale (Colored Cassette)', price: 35.00, imgs: ['https://static.wikia.nocookie.net/evangelion/images/6/69/COVER_EVANGELION_FINALLY.png/revision/latest/scale-to-width-down/1000?cb=20221010000456', 'https://img.alicdn.com/imgextra/i3/3082239007/O1CN01ZxfBBH2GPG3JjlHyR_!!3082239007.jpg_.webp', 'https://img.alicdn.com/imgextra/i4/3082239007/O1CN016UilkO2GPG3K0VBqD_!!3082239007.jpg_.webp', 'https://img.alicdn.com/imgextra/i3/3082239007/O1CN01XGBh5e2GPG2e7v5B3_!!3082239007.jpg_.webp'], description: 'Neon Genesis Evangelion soundtrack collection on limited colored tape. Sweeping anime scores on a beautifully presented cassette.' },
    { id: 118, artist: 'NANA', album: 'OST (Cassette)', price: 35.00, imgs: ['https://i.discogs.com/ae6TWvg4HjX61QWuvx5N3N4VSIH8Qbsdq6g8ZT13zJc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2Mjk4/MzgzLTE2Nzc5MjE2/NDItOTU1OS5wbmc.jpeg', 'https://img.alicdn.com/imgextra/i2/2218154030461/O1CN019MAV661FHBcouYFP2_!!2218154030461.jpg_.webp', 'https://img.alicdn.com/imgextra/i2/2218154030461/O1CN01mYEZq51FHBcgCd6dG_!!2218154030461.jpg_.webp', 'https://img.alicdn.com/imgextra/i3/2218154030461/O1CN01nid66Q1FHBcmVgeKs_!!2218154030461.jpg_.webp'], description: 'Original soundtrack/best-of from the NANA anime series on cassette.' },
    { id: 119, artist: 'Cyberpunk Edgerunners', album: 'OST (Cassette)', price: 35.00, imgs: ['https://i.ebayimg.com/images/g/2ncAAOSwqu9jRL9d/s-l1600.webp', 'https://img.alicdn.com/imgextra/i3/3082239007/O1CN01rkGvV32GPGMw6bGLL_!!3082239007.jpg_.webp'], description: 'Soundtrack to the hit Netflix anime. Limited edition cassette.' },
    { id: 120, artist: 'Frank Ocean', album: 'Channel Orange', price: 35.00, imgs: ['https://sonic.ge/dyn/L7SzGQANBc0RBVl21nBBRKMZMT2jd1pkqloLnWyxuLk/rs:fit:720:0/plain/images/products/original/f8730373-8b12-45ae-a371-3d0716f9006c.jpg'], description: 'Channel Orange (2012) is Frank Ocean\'s critically acclaimed debut studio album, renowned for its genre-blending mix of neo-soul, funk, and pop-soul exploring themes of unrequited love and wealth.' },
    { id: 121, artist: 'Justin Hurwitz', album: 'La La Land Score', price: 40.00, imgs: ['https://sonic.ge/dyn/j8D54p5hmFZZR9Jo_x0IyarrB_kWSR0UPxHxYn1FHyE/rs:fit:720:0/plain/images/products/original/dd98fc70-f671-4c7d-85ae-1b5e91376d5c.jpg'], description: 'The La La Land Original Soundtrack, composed by Justin Hurwitz, is a jazz-infused musical score featuring performances from Ryan Gosling and Emma Stone. Standout tracks include "City of Stars" and "Audition (The Fools Who Dream)".' },
    { id: 122, artist: 'The Big 4', album: 'Live from Sofia (2-DVD)', price: 55.00, imgs: ['https://img.alicdn.com/imgextra/i1/1966856941/O1CN011syl7D2192DPRRUul_!!4611686018427386605-0-item_pic.jpg_.webp', 'https://img.alicdn.com/imgextra/i3/1966856941/O1CN01dJYCMX219280gk49g_!!1966856941.jpg_.webp', 'https://img.alicdn.com/imgextra/i2/1966856941/O1CN01RQcLqt219283XDX6U_!!1966856941.jpg_.webp'], description: 'The Big 4: Live from Sofia, Bulgaria (2-DVD) captures the historic 2010 Sonisphere Festival where Metallica, Slayer, Megadeth, and Anthrax shared a stage for the first time. Over 5 hours of live performances.' },
    { id: 123, artist: 'Radiohead', album: 'TKOL RMX', price: 40.00, imgs: ['https://sonic.ge/dyn/4GslLsLewxJDwM4RhnSdzDwORdtEgCNDgw9FfO_2NJw/rs:fit:720:0/plain/images/products/original/9ebdb4be-df5f-4391-b822-8def65f7d1a5.jpg'], description: 'TKOL RMX 1234567 is a 2011 compilation by Radiohead featuring remixes of songs from The King of Limbs by artists including Four Tet, Caribou, Modeselektor, and SBTRKT.' },
    { id: 124, artist: 'Limp Bizkit', album: 'The Unquestionable Truth', price: 30.00, imgs: ['https://sonic.ge/dyn/auky80Ky2i40SJJ9qFEA8yM11zcyyTG8Hzstkolsa-w/rs:fit:720:0/plain/images/products/original/ef7f7827-0a5d-459c-9433-10b7c591d9e9.jpg'], description: 'The Unquestionable Truth (Part 1) (2005) marks the return of guitarist Wes Borland, featuring a darker, experimental, heavily industrial-influenced sound departing from their rap-metal roots.' },
    { id: 125, artist: 'AC/DC', album: 'PWR UP', price: 40.00, imgs: ['https://sonic.ge/dyn/1XmTlWLZzfvVXeF2yl6U73_DhjRJ-j7NfLjQBgLpuyw/rs:fit:720:0/plain/images/products/original/81898902-f16d-48c8-b845-837a8ecce46e.jpg'], description: 'PWR/UP (Power Up) is AC/DC\'s 17th studio album (2020), marking a triumphant return for the classic lineup delivering 12 tracks of high-voltage rock as a tribute to the late Malcolm Young.' },
    { id: 126, artist: 'Sevendust', album: 'All I See Is War', price: 40.00, imgs: ['https://sonic.ge/dyn/nU3aEUQNOdHZvKTKR0pqgR34OjOBG0A6RYVj7b5m7r4/rs:fit:720:0/plain/images/products/original/58436774-03a3-4e7f-bd2d-1230934c712c.jpg'], description: 'All I See Is War (2018) is Sevendust\'s 12th studio album, featuring heavy, rhythmic riffs, melodic vocals, and lyrical themes focused on personal struggles and societal conflicts.' },
    { id: 127, artist: 'Minecraft', album: 'Volume Alpha (Cassette)', price: 35.00, imgs: ['https://i.discogs.com/T-aQnDs4_qjFSbsJFLzPb5OUskub4PhHmT3wcfkB3MU/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2OTI5/NTYtMTYwNDk2NDA5/MS0xNzMzLnBuZw.jpeg', 'https://img.alicdn.com/imgextra/i3/2218154030461/O1CN01FM7fDK1FHBeWYUXWr_!!2218154030461.jpg_.webp'], description: 'Iconic Minecraft video game soundtrack by C418 on green cassette tape.' },
    { id: 128, artist: 'KISS', album: 'Off The Soundboard: Live in Virginia Beach', price: 40.00, imgs: ['https://sonic.ge/dyn/At5lxRjRav1kjpiy1OcJNJWWetPW_xhvvdWBG2Y2z88/rs:fit:720:0/plain/images/products/original/e9dbc213-47ff-4c3d-8b59-2e592e2b394e.jpg'], description: 'KISS - Off The Soundboard: Live in Virginia Beach is a 20-song live album recorded on July 25, 2004, at the Virginia Beach Amphitheatre during the "Rock The Nation" Tour.' },
    { id: 129, artist: 'Lamb of God', album: 'Omens', price: 40.00, imgs: ['https://sonic.ge/dyn/teeOVYCJEUs2XoI-lUp9KkltI03-G3O23kawINFeXCs/rs:fit:720:0/plain/images/products/original/850b70a5-9ba0-4a53-8ee3-72455d1f53b1.jpg'], description: 'Omens (2022) is Lamb of God\'s ninth studio album, a "pissed-off," heavy, and chaotic record reacting to the state of the world with intense, raw, and groove-heavy sounds.' },
    { id: 130, artist: 'Slipknot', album: 'We Are Not Your Kind', price: 40.00, imgs: ['https://cdn-images.dzcdn.net/images/cover/fdc2196c15fbf2ee91881a78af4da153/500x500-000000-80-0-0.jpg'], description: 'Released in 2019, Slipknot\'s We Are Not Your Kind is a highly experimental sixth studio album exploring themes of depression and societal division, blending nu metal with electronic and industrial elements.' },
    { id: 131, artist: 'Ozzy Osbourne', album: 'Patient Number 9', price: 45.00, imgs: ['https://i.discogs.com/9V7Cv9FGVYQe5GdisUA-cmrythf9lAtbu-_Ez9idofU/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NzMw/MjY1LTE2NjQ5OTk4/NzctNDkzMC5qcGVn.jpeg'], description: 'Patient Number 9 (2022) is Ozzy Osbourne\'s 13th studio album, a critically acclaimed, Grammy-winning (Best Rock Album) heavy metal project produced by Andrew Watt.' },
    { id: 132, artist: 'Twenty One Pilots', album: 'Scaled and Icy', price: 40.00, imgs: ['https://i.discogs.com/PKSPb97om0klixp2euTF3xHj75ZCX9GxY0cNIjZueZc/rs:fit/g:sm/q:90/h:545/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODA1/NzIzLTE2MjE1MTU3/NTUtNjg0OS5qcGVn.jpeg'], description: 'Scaled And Icy (2021) is Twenty One Pilots\' sixth studio album, produced during COVID-19 lockdown as a vibrant, synth-pop-heavy reaction to the darker Trench.' },
    { id: 133, artist: 'Daft Punk', album: 'Random Access Memories', price: 45.00, imgs: ['https://i.discogs.com/B8r9egFISje41D_qJh9r-fwNdr1FqcxJYpJkeUw7giY/rs:fit/g:sm/q:90/h:600/w:595/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3MDMx/NzQzLTE2ODM5Nzk2/MjEtMzYyMi5qcGVn.jpeg'], description: 'Random Access Memories (10th Anniversary Edition) by Daft Punk celebrates their final album with 35 minutes of unreleased music, including demos and studio outtakes.' },
    { id: 134, artist: 'Pink Floyd', album: 'Wish You Were Here', price: 40.00, imgs: ['https://i.discogs.com/pZnTKUeiKsxSyvX_87YMgccx0bq5sjqThFH9iSNAtAY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjEx/ODEyLTE2MzczMzYw/OTctOTI4MC5qcGVn.jpeg'], description: 'Released in September 1975, Pink Floyd\'s Wish You Were Here is a critically acclaimed concept album exploring themes of absence and alienation, serving as a tribute to former member Syd Barrett.' },
    { id: 135, artist: 'Evangelion', album: 'Finally (CD)', price: 40.00, imgs: ['https://cdn-p.smehost.net/sites/af0adc8ea1314bfb8328afdc06ce1e06/wp-content/uploads/2020/12/Unknown-scaled.jpeg'], description: 'Evangelion - Finally (2020) is a 15-track compilation CD celebrating the 25th anniversary of Neon Genesis Evangelion, featuring vocal songs by Yoko Takahashi and Megumi Hayashibara.' },
    { id: 136, artist: 'Guns N\' Roses', album: 'Appetite for Destruction', price: 40.00, imgs: ['https://i.discogs.com/ZFQq1JDPycIH_Q0lyv6FDBfALnU__gJ5rzNu3OBXWsY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTcy/MDYtMTM3MTQ3MDk2/NC03NzgyLmpwZWc.jpeg'], description: 'Appetite for Destruction (1987) is the debut studio album by Guns N\' Roses, widely regarded as a raw, gritty classic that redefined 1980s hard rock. Features "Welcome to the Jungle," "Sweet Child o\' Mine," and "Paradise City".' },
    { id: 137, artist: 'Tyler, The Creator', album: 'IGOR', price: 40.00, imgs: ['https://i.discogs.com/x1xysoS_DIm4qfk89b5KzBbiz5_-2DzFuaeUMSsyIig/rs:fit/g:sm/q:90/h:560/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDIy/NzU2LTE1NzgzNTA5/OTctNTI1My5wbmc.jpeg'], description: 'IGOR (2019) is Tyler, The Creator\'s critically acclaimed, Grammy-winning album, featuring a deeply personal, synth-heavy blend of neo-soul, funk, and R&B exploring themes of heartbreak and jealousy.' },
    { id: 138, artist: 'Travis Scott', album: 'ASTROWORLD', price: 45.00, imgs: ['https://i.discogs.com/EJzFyUkI9IXsUCOxtvuwffxqZvIjplGNQFG7rIwOWAQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNTY0/NDgwLTE3NDM0MTk4/NjctNjcxNC5wbmc.jpeg'], description: 'Astroworld is Travis Scott\'s critically acclaimed 2018 third studio album, designed as a nostalgic, psychedelic tribute to the defunct Houston theme park. Features "Sicko Mode" and "Butterfly Effect."' },
    { id: 139, artist: 'Led Zeppelin', album: 'Remasters', price: 40.00, imgs: ['https://i.discogs.com/d47qBqc-YaBdfZ7G9j-sQnnUwNF9DK4Ha5atj_r92eU/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMjI5/MDUtMTE5Mzg2MDYx/Ni5qcGVn.jpeg'], description: 'Led Zeppelin Remasters (1990) is a comprehensive, digitally remastered compilation of the band\'s top tracks from their eight studio albums, curated to fix poor 1980s CD sound quality.' },
    { id: 140, artist: 'Gorillaz', album: 'Cracker Island', price: 40.00, imgs: ['https://i.discogs.com/Ye4zvuO-qLyW42XOR6KYtR1LcaFUkW8jlR3L9IJ7UQU/rs:fit/g:sm/q:90/h:595/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2MjAx/NDgwLTE2NzcxODQ0/NzUtODkxMy5qcGVn.jpeg'], description: 'Cracker Island (2023) is the eighth studio album by Gorillaz, featuring a synth-pop, funk-influenced sound centered on themes of social media and modern paranoia. Features Thundercat, Stevie Nicks, Bad Bunny, and Tame Impala.' },
    { id: 141, artist: 'Linkin Park', album: 'Meteora 20th Anniversary Edition', price: 75.00, imgs: ['https://sonic.ge/dyn/5ObUMsIcVa2x2RRJbBBQANhCOAEjagapB146WbOxX98/rs:fit:720:0/plain/images/products/original/7e383acb-55bf-4d79-8e1a-40c395d11255.jpg'], description: 'The Linkin Park Meteora 20th Anniversary Edition (3CD) celebrates the landmark 2003 album with the newly unearthed track "Lost" featuring Chester Bennington, rare demos, b-sides, and unreleased live concerts.' },
    { id: 142, artist: 'Twenty One Pilots', album: 'Clancy', price: 40.00, imgs: ['https://i.discogs.com/ujpdHD-6Cc_RAL0xBdYIlHJcpHNHRBFge_qNPAJ-DQQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzY0/NjA0LTE3MTY1NTU3/NzMtMjc1MS5qcGVn.jpeg'], description: 'Clancy is the seventh studio album by Twenty One Pilots (2024), the final chapter in a narrative tetralogy, focusing on protagonist Clancy leading a rebellion against the city of Dema.' },
    { id: 143, artist: 'Kendrick Lamar', album: 'Mr. Morale & The Big Steppers', price: 40.00, imgs: ['https://i.discogs.com/PrYdQZwjjfcA7Z9lBOCS0end7SBIO1-P3hGlGoc8Q04/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzMjA4/NjE0LTE2NTI0MjQw/NjgtOTUzNy5qcGVn.jpeg'], description: 'Mr. Morale & The Big Steppers (2022) is Kendrick Lamar\'s 5th studio album, an introspective double-LP exploring generational trauma, toxic masculinity, and fame.' },
    { id: 144, artist: 'XXXTENTACION', album: 'Skins', price: 40.00, imgs: ['https://i.discogs.com/znFVkUq9joIKGK6aTyetLY3VSQHqCV-kUKwkpF0HZlM/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNjI2/MTAxLTE2NDgxMjM2/OTctMjE4NS5qcGVn.jpeg'], description: 'Skins is the third studio album by XXXTentacion, released posthumously. The 10-track, 19-minute album blends lo-fi, emo, trap, and punk rock, featuring Kanye West and Travis Barker.' },
    { id: 145, artist: 'Lana Del Rey', album: 'Did You Know That There\'s a Tunnel Under Ocean Blvd', price: 40.00, imgs: ['https://i.discogs.com/sZgxm10JrAVoxZs0yBdRBQ61MuDl44g5nHIIsTpkr1M/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NTE3/NzczLTE3NjYzODY1/NzktMjI3Ni5qcGVn.jpeg'], description: 'Lana Del Rey\'s 2023 album uses the forgotten Jergins Tunnel in Long Beach as a metaphor for her fear of being forgotten. Piano-driven, autobiographical songs reflecting on aging, fame, and legacy.' },
    { id: 146, artist: 'Billie Eilish', album: 'Happier Than Ever', price: 40.00, imgs: ['https://sonic.ge/dyn/yBnOjmRQr-jbSLWILe4jMffX4N3EyMuzN6i4UyC0i2o/rs:fit:720:0/plain/images/products/original/2898e385-c61c-4767-95e6-ba53dc2eed8e.jpg'], description: 'Happier Than Ever (2021) is Billie Eilish\'s second studio album, an emo pop-punk record detailing emotional liberation from toxic relationships. Starting soft and ukulele-driven, it evolves into a high-intensity rock anthem.' },
    { id: 147, artist: 'Green Day', album: 'Father of All', price: 40.00, imgs: ['https://sonic.ge/dyn/h7kWn1xkTFYZTGX-AsNrK0DAq5Ot1TuwmcAP5i8wbdU/rs:fit:720:0/plain/images/products/original/547aa82a-0390-434e-87a3-b060d61bc456.jpg'], description: 'Father of All Motherfuckers is Green Day\'s 13th studio album (2020). A short, 26-minute, high-energy record blending garage rock, soul, and glam, departing from their traditional pop-punk sound.' },
    { id: 148, artist: 'Metallica', album: '...And Justice for All', price: 40.00, imgs: ['https://i.discogs.com/Jv5S9NFifzfu3HTb-fQ41CtOCZSm3jDWaKidAuTpLHU/rs:fit/g:sm/q:90/h:586/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNzc5/MzIyLTE1NTUyMTUy/NzAtNzY1Ni5qcGVn.jpeg'], description: 'Released in 1988, Metallica\'s ...And Justice for All is a complex, progressive thrash metal album tackling themes of political corruption, war, and injustice. Features "One" and the title track.' },
    { id: 149, artist: 'Tyler, The Creator', album: 'Call Me If You Get Lost', price: 40.00, imgs: ['https://i.discogs.com/c4XWiglS5vjOgflotKOHLdaL01ypptt1U0gCRJnsUmk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNjE5/OTI3LTE2NDgwNjc3/ODgtMjU3My5qcGVn.jpeg'], description: 'Call Me If You Get Lost (2021) is Tyler, The Creator\'s Grammy-winning seventh studio album, blending rap, jazz, and soul hosted by DJ Drama as a homage to 2000s Gangsta Grillz mixtapes.' },
    { id: 150, artist: 'Kendrick Lamar', album: 'DAMN.', price: 40.00, imgs: ['https://i.discogs.com/n9BtVuF-dJtmghgg5MhBtN_nME-Wqb4SboSfeBxnWVE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTMz/NTM4LTE0OTIyMDQ5/NjMtMzE5Ni5qcGVn.jpeg'], description: 'DAMN. (2017) is Kendrick Lamar\'s Pulitzer Prize-winning fourth studio album, exploring the duality of "wickedness" and "weakness" through themes of faith, karma, fear, and introspection.' },
    { id: 151, artist: 'XXXTENTACION', album: 'Bad Vibes Forever', price: 40.00, imgs: ['https://i.discogs.com/orSqG7XLCoMgEORe6w_HN4ZQMif8rOXNCfgaJ57dVhY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNjE5/OTI3LTE2NDgwNjc3/ODgtMjU3My5qcGVn.jpeg'], description: 'Bad Vibes Forever (2019) is XXXTENTACION\'s fourth and final posthumous studio album, a 25-track project spanning emo rap, hip-hop, and rock, featuring Lil Wayne, Trippie Redd, and Blink-182.' },
    { id: 152, artist: 'Lana Del Rey', album: 'Blue Banisters', price: 40.00, imgs: ['https://sonic.ge/dyn/T70-34YjcN8ZLd3FfhxfjaOjwkzNnKp28q3AW6Vnslk/rs:fit:720:0/plain/images/products/original/fa12c240-71ab-4435-ad3a-958180619da4.jpg'], description: 'Blue Banisters is the eighth studio album by Lana Del Rey (2021), a deeply personal folk-pop and Americana-infused record characterized by piano-led ballads, minimalist production, and nostalgic themes.' },
    { id: 153, artist: 'Lana Del Rey', album: 'Lust for Life', price: 40.00, imgs: ['https://sonic.ge/dyn/KiqsCPfiub1IMBc1Fm_g3yKzigaFMbpWE0h_XQC4TPg/rs:fit:720:0/plain/images/products/original/747cb929-8c1d-4b64-b2a0-f62028f5793f.jpg'], description: 'Lust for Life (2017) is Lana Del Rey\'s fifth studio album, featuring a more collaborative, pop-focused sound blending 60s-inspired pop with modern trap beats, exploring themes of mature love and nostalgia.' },
    { id: 154, artist: 'Lana Del Rey', album: 'Norman Fucking Rockwell!', price: 40.00, imgs: ['https://sonic.ge/dyn/pAHczOY2lxQrY8sd9h_R3hDaWoCSF85iNeodW-68bjk/rs:fit:720:0/plain/images/products/original/eb813b1e-fbac-4842-9d70-302cc7164360.jpg'], description: 'Norman Fucking Rockwell! (2019) is Lana Del Rey\'s critically acclaimed sixth album, blending Laurel Canyon folk-rock, piano ballads, and psych-pop. Produced with Jack Antonoff, it critiques toxic masculinity and the American Dream.' },
    { id: 155, artist: 'Juice WRLD', album: 'Legends Never Die', price: 40.00, imgs: ['https://sonic.ge/dyn/E36Bpm022ZnlcY1OuyiO5UvFEYemPN_yrxfC8EpmMO4/rs:fit:720:0/plain/images/products/original/981d93ff-fd9d-4e27-96cf-694f06737448.jpg'], description: 'Legends Never Die is the first posthumous album by Juice WRLD (2020), 22 tracks rawly exploring themes of addiction, anxiety, and heartbreak. Debuted at No. 1 on the Billboard 200.' },
    { id: 156, artist: 'Juice WRLD', album: 'Fighting Demons', price: 40.00, imgs: ['https://sonic.ge/dyn/xzur3ND0gbmqvElvWJvDDie5cHG6wrZsxNxCG8hD8wc/rs:fit:720:0/plain/images/products/original/0c86575d-257c-45a7-a355-02f6ac7aec07.jpg'], description: 'Fighting Demons (2021) is Juice WRLD\'s second posthumous album, 18 tracks exploring his inner turmoil, addiction, and mental health struggles. Features Justin Bieber, Polo G, and SUGA of BTS.' },
    { id: 157, artist: 'XXXTENTACION', album: '?', price: 40.00, imgs: ['https://i.discogs.com/6aIawMx0cRApYKsnkwHvc7uiWKW3ZgYCsBkscL6RFJA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDc3/MDY2LTE1Mjg2NTAy/OTktODQwNi5qcGVn.jpeg'], description: 'Released in 2018, ? is XXXTENTACION\'s second studio album, debuting at number one on the Billboard 200. A versatile, genre-bending project featuring "Sad!," "Changes," and "Moonlight".' },
    { id: 158, artist: 'XXXTENTACION', album: '17', price: 40.00, imgs: ['https://xxxtentacion.com/cdn/shop/files/XXXtentacion_10.25.24_052.jpg?v=1750723439&width=990', 'https://xxxtentacion.com/cdn/shop/files/XXXtentacion_10.25.24_053.jpg?v=1750723439&width=990'], description: 'Released in 2017, XXXTENTACION\'s debut studio album 17 is a raw, 21-minute exploration of mental health, suicide, and heartbreak, defined by its lo-fi, emo-rock, and alternative R&B sound.' },
    { id: 159, artist: 'Red Hot Chili Peppers', album: 'I\'m with You', price: 40.00, imgs: ['https://i.discogs.com/8TDtid1uQrRaxLrIOOZTXmAs9Ukvlt0_VXDXxqK5CIY/rs:fit/g:sm/q:90/h:545/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzM3/MTEtMTMxNTI1MjA4/Ny5qcGVn.jpeg'], description: 'I\'m with You (2011) is RHCP\'s tenth studio album, their first with guitarist Josh Klinghoffer. Produced by Rick Rubin, it features a sober, mature blend of funk, punk, and pop. Features "The Adventures of Rain Dance Maggie."' },
    { id: 160, artist: 'The Notorious B.I.G.', album: 'Greatest Hits', price: 40.00, imgs: ['https://i.discogs.com/28dpYUSPmOJMgXN90ayqLjtjWkYOZaH0Ssm5LRaYO7I/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDA3/ODkxLTE1NDcyMjEx/NjAtOTY3OS5wbmc.jpeg'], description: 'Released in 2007, The Notorious B.I.G. Greatest Hits is a 16-track compilation of Biggie Smalls\' best work, featuring iconic hits like "Juicy" and "Hypnotize" alongside rarities and posthumous tracks.' },
    { id: 161, artist: 'Coldplay', album: 'A Rush of Blood to the Head', price: 40.00, imgs: ['https://i.discogs.com/ourI3ScU0PVLM-1hJ_3IBvZoCfytFR95zfesJyM4OmI/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMjI1/NTUtMTM4MjM3OTUx/Ni02NDU5LmpwZWc.jpeg'], description: 'A Rush of Blood to the Head (2002) is Coldplay\'s acclaimed second studio album featuring "The Scientist" and "Clocks." Known for its darker, piano-driven sound exploring themes of love, loss, and urgency.' },
    { id: 162, artist: 'Coldplay', album: 'Viva la Vida', price: 40.00, imgs: ['https://sonic.ge/dyn/z7Kabfa9Lu5epfExs4a6jRZA_vbwa26Fi0aEXecMSgc/rs:fit:720:0/plain/images/products/original/47d20fd1-2d01-4866-ae47-179d578c7d2c.jpg'], description: '"Viva la Vida" by Coldplay (2008) is an art-pop album detailing the downfall of a king who lost his kingdom. Known for its orchestral, string-driven sound exploring power, regret, and mortality.' },
    { id: 163, artist: 'Red Hot Chili Peppers', album: 'Greatest Hits', price: 40.00, imgs: ['https://i.discogs.com/1LKSXb8NOxqHcRYoNGM8zKpQmBj1x3caOQDlVhTjYg0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODUy/MjktMTQ2MTI5MDI2/My00NzAxLmpwZWc.jpeg', 'https://i.discogs.com/tLZlWu5CnDCC0bY7LHxZ3oziTcwjbhNw55E7_d89yPc/rs:fit/g:sm/q:90/h:464/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODUy/MjktMTU2MjcyODQ4/Ny04NDQ2LmpwZWc.jpeg', 'https://i.discogs.com/n3GE5v4OL2u0QDy7wKipwkjimPXEI4kaLfty940zoQA/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODUy/MjktMTU2MjcyODQ4/Ny04OTk4LmpwZWc.jpeg'], description: 'The Red Hot Chili Peppers Greatest Hits (2003) spans 1989–2003, featuring "Under the Bridge," "Give It Away," "Californication," and "Scar Tissue." Includes two new tracks "Fortune Faded" and "Save the Population."' },
    { id: 164, artist: 'Mike Shinoda', album: 'Post Traumatic', price: 40.00, imgs: ['https://sonic.ge/dyn/eq5sjJK5Ul0XZr35efl1EsLEYWX7Zh20FYfuXeb6KVQ/rs:fit:720:0/plain/images/products/original/49457699-9d89-4a20-9e2c-7150d9527666.jpg'], description: 'Post Traumatic is a deeply personal 2018 solo album by Mike Shinoda, created in the wake of Chester Bennington\'s death. The 16-track project chronicles his journey through grief, shock, and eventual healing.' },
    { id: 165, artist: 'Oasis', album: 'Be Here Now', price: 75.00, imgs: ['https://sonic.ge/dyn/z36h791xVCowNAFciWsKY3RMz-wj6u2eERieMqVCjNg/rs:fit:720:0/plain/images/products/original/5affadc2-21be-4e4b-b07b-babd4b34ee8a.jpg'], description: 'The Oasis Be Here Now Deluxe Edition (3CD) features the remastered 1997 third studio album, rare B-sides, and the previously unreleased "Mustique Demos." 40 total tracks from their peak 90s era.' },
    { id: 166, artist: 'Alt-J', album: 'Relaxer', price: 30.00, imgs: ['https://sonic.ge/dyn/diAazon4K_nW3JMEl6kDpusPZ6SZnkfDrpWPz0NHuGU/rs:fit:720:0/plain/images/products/original/48bccbb4-b0f4-41bc-82c1-287b8d9be5c7.jpg'], description: 'Relaxer (2017) is the third studio album by Alt-J, an 8-track experimental soundscape merging folk-inspired storytelling, orchestral arrangements, and electronic elements.' },
    { id: 167, artist: 'Billie Eilish', album: 'Hit Me Hard and Soft', price: 40.00, imgs: ['https://i.discogs.com/e_mAGirynBqDWJSUVlFco-SlnRrMjGpKOy2OSW2zNaw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNzcx/ODM0LTE3MTY1ODE5/NjYtMjg5Mi5qcGVn.jpeg', 'https://i.discogs.com/7j5FC_zA5TcWiWX4cbLBiNYjhjpZPVBRRVZKl9HeNwg/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwNjk2/MDY3LTE3MTYyMDU2/NTAtMzg0Ny5qcGVn.jpeg'], description: 'HIT ME HARD AND SOFT is Billie Eilish\'s third studio album (2024), produced with FINNEAS. A 10-track, genre-bending alternative pop project described as her most daring and cohesive work.' },
    { id: 168, artist: 'Olivia Rodrigo', album: 'GUTS', price: 40.00, imgs: ['https://i.discogs.com/f_5S8L5WsTkJYWuYBq0j331UMqY6z3uTAEdrS39CAMA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MTk5/NDE5LTE3MDA5NDQz/MTYtMTk5My5qcGVn.jpeg', 'https://i.discogs.com/SSwurOxFqtp7u83FJa-dcR2uuD_rrzEf2amhdd2e8To/rs:fit/g:sm/q:90/h:472/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3OTQw/MzAyLTE2OTQ1Nzg2/NTktODYwNi5qcGVn.jpeg', 'https://i.discogs.com/IqnY1wqdkrYay9Dwz_W7hGt6gBT-Txu-aIU8LlGUe3I/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI3OTQw/MzAyLTE2OTczMTQy/OTItMzM2Ny5qcGVn.jpeg'], description: 'GUTS is Olivia Rodrigo\'s critically acclaimed second studio album (2023), a pop-rock, punk, and ballad record exploring the "growing pains" of transitioning from teen to adulthood.' },
    { id: 169, artist: 'Olivia Rodrigo', album: 'SOUR', price: 40.00, imgs: ['https://i.discogs.com/ZsL3D18iyCbpILm0JeqfBLx0kQ0fnX34gZHfhpCJkUE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODI4/MzIyLTE3MDA4NjY0/MDQtMTU3OC5qcGVn.jpeg', 'https://i.discogs.com/wWqWLMERRNaodElAXBhdfAnLy9N_8t-Y12h32tt59f8/rs:fit/g:sm/q:90/h:473/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4Nzk3/ODE4LTE2MjM1ODk2/MDEtMjQ3Ny5qcGVn.jpeg', 'https://i.discogs.com/nPB1ilEAzynBOgLw_ynNeSvnzOF5KtoroeTYGZkXN_0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4Nzk3/ODE4LTE2MjM1ODk2/MTAtNzE1OC5qcGVn.jpeg'], description: 'SOUR (2021) is Olivia Rodrigo\'s debut album, a genre-bending pop record driven by themes of heartbreak, jealousy, and teenage angst. Features "drivers license" and "good 4 u."' },
    { id: 170, artist: 'Eminem', album: 'The Death of Slim Shady', price: 40.00, imgs: ['https://i.discogs.com/BCz6ACMD6GCUN0d9e3H5FUQ-bgbE58XeUv5Ad4U01Lk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMTk4/ODU4LTE3MjA5MTYw/MTItNDQ2MS5qcGVn.jpeg', 'https://i.discogs.com/kn2NuER6sf931atbUnGASu6BvvrLuw19TCTxOPpJ1iw/rs:fit/g:sm/q:90/h:471/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzI0/Nzk1LTE3MjY1MDM5/NDUtNjkyNy5qcGVn.jpeg', 'https://i.discogs.com/2c2lhvrQMUtyvd-E-INyQT6uVlTRtG75NVrFPmYbw_8/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxNzI0/Nzk1LTE3MjY1MDM5/MjQtNjUxNi5qcGVn.jpeg'], description: 'The Death of Slim Shady (Coup de Grâce) is Eminem\'s 12th studio album (2024), a concept-driven record where he kills off his controversial alter ego, exploring themes of cancellation and generational conflict.' },
    { id: 171, artist: 'Eminem', album: 'Curtain Call 2', price: 40.00, imgs: ['https://i.discogs.com/hZmHtGvmJWSz9zjNF-_5oI6u1BWFPiNzuMPVKTtzY-o/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTE1/MzkxLTE2NjA3MTIz/ODYtOTQ4Mi5qcGVn.jpeg', 'https://i.discogs.com/nygRY0odyhn5AesCoEajJm7WOkpZiFhW0I6ovrpP7-0/rs:fit/g:sm/q:90/h:470/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTE1/MzkxLTE2NjA3MTIz/ODctNDE3Mi5qcGVn.jpeg', 'https://i.discogs.com/5HH7SjCzaLzGc2LG6oKGvZwiaqcsLY8x55O3YnJ15nI/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTE1/MzkxLTE2NjA3MTIz/ODQtNjYzOS5qcGVn.jpeg'], description: 'Curtain Call 2 is Eminem\'s 2022 greatest hits compilation, covering his career from Relapse through the 2020s. 35 tracks including "Love the Way You Lie," "Not Afraid," and "Godzilla."' },
];

let cart = [];

// Helper: get first image for cards/carousel
window.getImg = function(product) {
    return (product.imgs && product.imgs.length > 0) ? product.imgs[0] : '';
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
                    <img src="${window.getImg(item)}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
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

    const imgs = (product.imgs && product.imgs.length > 0) ? product.imgs : [fallbackImg];
    const thumbs = imgs.length > 1 ? `
        <div class="flex gap-2 mt-3 flex-wrap">
            ${imgs.map((src, i) => `
                <div onclick="document.getElementById('main-img-${id}').src='${src}'"
                     class="w-16 h-16 border border-white/10 hover:border-[#ffcc00] cursor-pointer overflow-hidden transition-colors">
                    <img src="${src}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
                </div>
            `).join('')}
        </div>` : '';

    mount.innerHTML = `
        <div class="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
            <div>
                <button onclick="showPage('catalog')" class="text-xs font-bold uppercase tracking-widest text-[#ffcc00] mb-8 hover:underline">
                    <i class="fas fa-arrow-left mr-2"></i> Back to Catalog
                </button>
                <div class="aspect-square glass p-4 border-2 border-white/5">
                    <img id="main-img-${id}" src="${imgs[0]}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover border border-white/10">
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
    const imgSrc = window.getImg(p);
    return `
    <div class="cd-card glass p-3 md:p-4 rounded-sm group cursor-pointer ${isC ? 'min-w-[240px] md:min-w-[320px]' : ''}" onclick="showProductDetail(${p.id})">
        <div class="relative mb-3 md:mb-4 aspect-square overflow-hidden bg-white/5">
            <img src="${imgSrc}" onerror="this.src='${fallbackImg}'" class="w-full h-full object-cover">
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
                    <img src="${window.getImg(p)}" onerror="this.src='https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=600&q=80'" class="w-full h-full object-cover">
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

window.chatMessages = [];

async function fetchGeminiWithRetry(payload, retries = 5) {
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
        const payload = {
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: window.chatMessages
        };
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
        div.innerHTML = `<span class="text-red-500 font-bold">Analysis failed. Network error.</span>`;
    }
}

window.onload = () => {
    window.populateFilters();
    window.renderAll();
    window.renderSocials();
    window.updateCartUI();
};
