(() => {
  'use strict';

  const WHATSAPP = 'https://wa.me/254746099135';
  const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const products = [
    {
      id: 'home-hoodie',
      title: 'HOME Hoodie',
      short: 'Black hoodie · HOME / tribal pattern',
      category: 'FLAGSHIP · PREMIUM · KENYAN MADE',
      description: 'Our flagship black hoodie, with “HOME” on one side and a vibrant tribal pattern on the other. Premium, Kenyan made, and rooted in urban fashion.',
      colour: 'Black',
      art: 'hoodie',
      photos: [
        { src: '05-home-hoodie-cover.jpg', alt: 'Black HOME hoodie with HOME lettering and a vibrant tribal pattern', fit: 'contain' },
        { src: '10-home-hoodies-couple.webp', alt: 'Man in a black HOME hoodie and woman in a white HOME hoodie in front of a Kenya Airways plane', fit: 'cover', post: 'https://www.instagram.com/p/DVaz-icDXTP/' }
      ],
      post: 'https://www.instagram.com/reel/DVQF6xODTq2/'
    },
    {
      id: 'home-tee-black',
      title: 'HOME Tee — Black',
      short: 'Black tee · Vertical HOME / Kenya silhouette',
      category: 'GRAPHIC TEE · HOME COLLECTION',
      description: 'A black tee with “HOME” written vertically. The O is replaced by a silhouette of Kenya, beside an abstract geometric spear design in gold, green and brown.',
      colour: 'Black',
      colours: [{ name: 'Black', product: 'home-tee-black', hex: '#171917' }, { name: 'White', product: 'home-tee-white', hex: '#f5f3eb' }],
      art: 'home-tee-black',
      photos: [{ src: '01-home-tee-black.webp', alt: 'Black HOME tee on a wooden hanger against the peach Tisho Apparel backdrop', fit: 'cover' }],
      post: 'https://www.instagram.com/p/DC6UImhITYz/'
    },
    {
      id: 'home-tee-white',
      title: 'HOME Tee — White',
      short: 'White tee · Vertical HOME / Kenya silhouette',
      category: 'GRAPHIC TEE · HOME COLLECTION',
      description: 'The same vertical HOME design on white: a silhouette of Kenya forms the O, next to an abstract geometric spear in gold, green and brown.',
      colour: 'White',
      colours: [{ name: 'Black', product: 'home-tee-black', hex: '#171917' }, { name: 'White', product: 'home-tee-white', hex: '#f5f3eb' }],
      art: 'home-tee-white',
      photos: [
        { src: '02-home-tee-white.webp', alt: 'White HOME tee on a wooden hanger against the peach Tisho Apparel backdrop', fit: 'cover' },
        { src: '07-home-tee-white-worn.jpg', alt: 'Man wearing the white HOME tee beside the same tee on a hanger', fit: 'contain', post: 'https://www.instagram.com/reel/DWBVqGxjVwq/' }
      ],
      post: 'https://www.instagram.com/p/DC6UImhITYz/'
    },
    {
      id: 'proudly-kenyan',
      title: 'Proudly Kenyan Tee',
      short: 'Black tee · Colourful KENYAN graphic',
      category: 'IDENTITY · CULTURE · KENYAN PRIDE',
      description: 'Premium black. Bold design. Kenyan spirit. More than a T-shirt — it’s an identity, it’s culture, and it’s pride in where we come from. A black tee with a colourful KENYAN graphic.',
      colour: 'Black',
      art: 'proudly-kenyan',
      photos: [{ src: '04-proudly-kenyan-tee.jpg', alt: 'Proudly Kenyan promo image with a model in a yellow beanie and the black graphic tee also shown on a hanger', fit: 'contain' }],
      post: 'https://www.instagram.com/reel/De1R5NkNto-/'
    },
    {
      id: 'nairobi-city',
      title: 'Nairobi City Tee',
      short: 'White tee · Bold NAIROBI CITY graphic',
      category: 'CITY SERIES · NAIROBI',
      description: 'A white tee carrying a bold NAIROBI CITY graphic. The original feature shows it hanging on a wooden hanger and presented in Tisho’s sleek black gift box.',
      colour: 'White',
      art: 'nairobi-city',
      photos: [{ src: '06-nairobi-city-giftbox.jpg', alt: 'White NAIROBI CITY tee presented in the black Tisho gift box with grey tissue paper', fit: 'contain' }],
      post: 'https://www.instagram.com/reel/DVdbD5VDYEY/'
    },
    {
      id: 'nairobi-kenya',
      title: 'Nairobi Kenya Tee',
      short: 'White crew-neck · Grey block letters',
      category: 'CITY SERIES · CREW NECK',
      description: 'A clean white crew-neck tee with NAIROBI KENYA set in grey block letters. Direct, understated, and unmistakably rooted in the city.',
      colour: 'White',
      art: 'nairobi-kenya',
      photos: [{ src: '03-nairobi-kenya-tee.webp', alt: 'White NAIROBI KENYA crew-neck tee on a hanger, styled with denim shorts and white sneakers', fit: 'cover' }],
      post: 'https://www.instagram.com/p/DFzn2WWoG03/'
    },
    {
      id: 'get-rich-tee',
      title: 'GET RICH OR DIE TRYIN Tee',
      short: 'Black tee · GET RICH OR DIE TRYIN graphic',
      category: 'GRAPHIC TEE · STATEMENT DESIGN',
      description: 'A black tee carrying the GET RICH OR DIE TRYIN design, shown on a hanger and worn in the original Tisho Apparel reel.',
      colour: 'Black',
      art: 'get-rich-tee',
      photos: [{ src: '08-get-rich-tee.jpg', alt: 'Black GET RICH OR DIE TRYIN tee shown on a hanger and worn', fit: 'contain' }],
      post: 'https://www.instagram.com/reel/DW8oAXfDRgc/'
    },
    {
      id: 'nipsey-graphic-tee',
      title: 'Nipsey Graphic Tee',
      short: 'Grey / tan tee · Nipsey Hussle graphic',
      category: 'GRAPHIC TEE · PREMIUM',
      description: 'A grey/tan Nipsey Hussle graphic tee on a hanger, from Tisho Apparel’s premium quality T-shirt collection.',
      colour: 'Grey / tan',
      art: 'nipsey-graphic-tee',
      photos: [{ src: '09-nipsey-graphic-tee.webp', alt: 'Grey and tan Nipsey Hussle graphic tee on a hanger', fit: 'cover' }],
      post: 'https://www.instagram.com/p/DWgG5dfDeNQ/'
    },
    {
      id: 'custom-print',
      title: 'Custom Print Tee',
      short: 'Your idea · Designed and printed by Tisho',
      category: 'CUSTOM WORK · YOUR IDEA',
      description: 'Think it, we design it and print it on your T-shirt. Bring your idea and Tisho will turn it into a custom-designed, custom-printed piece.',
      colour: '',
      art: 'custom-print',
      photos: [],
      post: ''
    },
    {
      id: 'custom-branding',
      title: 'Custom Branding',
      short: 'Custom printing & branding for clients',
      category: 'CUSTOM WORK · CLIENT BRANDING',
      description: 'Custom printing and branding work for clients. Bring the idea or brand requirement and start a direct design conversation with Tisho.',
      colour: '',
      art: 'custom-branding',
      photos: [],
      post: ''
    }
  ];

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const productById = id => products.find(product => product.id === id);
  const esc = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

  function kenyaShape(x = 0, y = 0, scale = 1) {
    return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M19 0 29 6 34 18 29 28 35 39 28 51 20 67 10 57 7 43 0 32 4 19 1 8 12 4Z" fill="#b98a32"/><path d="M7 43 20 67 28 51 23 45Z" fill="#2e654a"/><path d="M19 0 29 6 24 13 12 4Z" fill="#4b3827"/></g>`;
  }

  function spearGraphic(x = 0, y = 0, scale = 1) {
    return `<g transform="translate(${x} ${y}) scale(${scale})">
      <path d="M25 0 43 27 29 23 29 116 23 116 23 23 9 27Z" fill="#b8943f"/>
      <path d="M26 36 47 51 27 66 6 51Z" fill="#32684c"/>
      <path d="M26 66 43 80 26 95 10 80Z" fill="#765237"/>
      <path d="M0 110H52" stroke="#b8943f" stroke-width="3"/>
    </g>`;
  }

  function shirtGraphic(type) {
    switch (type) {
      case 'home-tee-black':
      case 'home-tee-white':
        return `<g>
          <text x="112" y="126" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#b78a32">H</text>
          ${kenyaShape(99, 132, .78)}
          <text x="112" y="207" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#b78a32">M</text>
          <text x="112" y="239" text-anchor="middle" font-family="Arial, sans-serif" font-size="26" font-weight="900" fill="#b78a32">E</text>
          ${spearGraphic(151, 127, .8)}
        </g>`;
      case 'proudly-kenyan':
        return `<g text-anchor="middle" font-family="Arial, sans-serif" font-weight="900">
          <text x="150" y="135" font-size="12" letter-spacing="5" fill="#eee">PROUDLY</text>
          <text x="150" y="171" font-size="30" fill="#d7a53d">KEN</text><text x="202" y="171" font-size="30" fill="#3f8b61">YAN</text>
          <path d="M101 187H199" stroke="#b74632" stroke-width="5"/><path d="M116 196H184" stroke="#eee" stroke-width="2"/>
        </g>`;
      case 'nairobi-city':
        return `<g text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900">
          <text x="150" y="143" font-size="30" letter-spacing="-1" fill="#181b19">NAIROBI</text>
          <text x="150" y="181" font-size="43" letter-spacing="5" fill="#2c644c">CITY</text>
          <path d="M107 195H193" stroke="#c49b43" stroke-width="4"/>
        </g>`;
      case 'nairobi-kenya':
        return `<g text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" fill="#737873">
          <text x="150" y="151" font-size="27" letter-spacing="1">NAIROBI</text>
          <text x="150" y="181" font-size="27" letter-spacing="4">KENYA</text>
        </g>`;
      case 'custom-print':
        return `<g text-anchor="middle" font-family="Arial, sans-serif">
          <text x="150" y="131" font-size="23" font-weight="900" fill="#20231f">THINK IT.</text>
          <text x="150" y="157" font-size="17" font-weight="700" fill="#2c644c">WE DESIGN IT.</text>
          <text x="150" y="182" font-size="17" font-weight="700" fill="#a07932">WE PRINT IT.</text>
          <path d="M111 201 128 190 143 204 160 187 188 207" fill="none" stroke="#b74632" stroke-width="3"/>
        </g>`;
      case 'custom-branding':
        return `<g text-anchor="middle" font-family="Arial, sans-serif">
          <rect x="105" y="111" width="90" height="83" fill="none" stroke="#333832" stroke-width="2"/>
          <path d="M105 111 195 194M195 111 105 194" stroke="#b8943f" stroke-width="2"/>
          <rect x="119" y="125" width="62" height="55" fill="#f4f2e9"/>
          <text x="150" y="147" font-size="12" font-weight="900" fill="#252824">YOUR</text>
          <text x="150" y="165" font-size="12" font-weight="900" fill="#2c644c">BRAND</text>
          <text x="150" y="218" font-size="8" letter-spacing="2" fill="#737873">DESIGNED + PRINTED</text>
        </g>`;
      default:
        return '';
    }
  }

  function hoodieGraphic() {
    return `<g>
      <text x="110" y="137" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" font-weight="900" fill="#eee" transform="rotate(-90 110 137)">HOME</text>
      <g transform="translate(151 105)">
        <path d="M27 0 54 28 27 55 0 28Z" fill="#b74431"/><path d="M27 8 46 28 27 47 8 28Z" fill="#d6a337"/>
        <path d="M27 16 38 28 27 40 16 28Z" fill="#2d674c"/><path d="M27 55 52 82 27 108 2 82Z" fill="#2d674c"/>
        <path d="M27 63 44 82 27 100 10 82Z" fill="#d6a337"/><path d="M0 28 10 38 0 49-10 38Z" fill="#4b352a"/>
        <path d="M54 28 64 38 54 49 44 38Z" fill="#4b352a"/>
      </g>
    </g>`;
  }

  function garmentSVG(product) {
    const isHoodie = product.art === 'hoodie';
    const dark = product.colour === 'Black' || isHoodie;
    const fill = dark ? '#1b1d1c' : product.colour === 'White' ? '#f2f0e8' : '#e5e4dc';
    const edge = dark ? '#080908' : '#c8c7bf';
    const graphic = isHoodie ? hoodieGraphic() : shirtGraphic(product.art);
    const id = `art-${product.id}`;
    return `<svg viewBox="0 0 300 390" role="img" aria-labelledby="${id}-title" xmlns="http://www.w3.org/2000/svg">
      <title id="${id}-title">Drawn design panel for ${esc(product.title)}</title>
      <defs>
        <filter id="${id}-shadow" x="-40%" y="-40%" width="180%" height="200%"><feGaussianBlur stdDeviation="7"/></filter>
        <linearGradient id="${id}-cloth" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${fill}"/><stop offset=".5" stop-color="${fill}"/><stop offset="1" stop-color="${dark ? '#101211' : '#deddd5'}"/></linearGradient>
      </defs>
      <ellipse cx="150" cy="340" rx="92" ry="13" fill="#222820" opacity=".17" filter="url(#${id}-shadow)"/>
      ${isHoodie ? `<g>
        <path d="M104 71 76 80 42 125 24 263 58 272 81 168 77 305Q150 325 223 305L219 168 242 272 276 263 258 125 224 80 196 71 182 54H118Z" fill="url(#${id}-cloth)" stroke="${edge}" stroke-width="1.4"/>
        <path d="M118 54Q113 86 126 108Q150 122 174 108Q187 86 182 54Q170 30 150 30T118 54Z" fill="${dark ? '#242725' : fill}" stroke="${edge}" stroke-width="2"/>
        <path d="M126 108Q150 90 174 108M137 103 133 150M163 103 167 150" fill="none" stroke="${dark ? '#777b75' : edge}" stroke-width="1.5"/>
        <path d="M105 250Q150 232 195 250L188 289Q150 300 112 289Z" fill="none" stroke="${dark ? '#3f433f' : edge}"/>
        ${graphic}
      </g>` : `<g>
        <path d="M103 63 72 75 31 119 63 155 88 132 81 302Q150 320 219 302L212 132 237 155 269 119 228 75 197 63Q184 93 150 93T103 63Z" fill="url(#${id}-cloth)" stroke="${edge}" stroke-width="1.4"/>
        <path d="M103 63Q112 101 150 101T197 63M88 132 78 104M212 132 222 104M83 288Q150 304 217 288" fill="none" stroke="${edge}" stroke-width="1.5" opacity=".7"/>
        ${graphic}
      </g>`}
    </svg>`;
  }

  function printCard(product, asButton = true, photoIndex = 0) {
    const tag = asButton ? 'button' : 'div';
    const photo = product.photos[photoIndex] || product.photos[0];
    let artwork;
    if (photo) {
      artwork = `<img class="product-photo ${photo.fit}" src="assets/photos/${photo.src}" alt="${esc(photo.alt)}" draggable="false" decoding="async">`;
    } else if (product.art === 'custom-print') {
      artwork = `<span class="service-art service-print"><strong>THINK<br>IT.</strong><span>WE DESIGN IT.</span><span>WE PRINT IT.</span><small>YOUR IDEA · YOUR T-SHIRT</small></span>`;
    } else {
      artwork = `<span class="service-art service-branding"><small>CUSTOM PRINTING + BRANDING</small><strong>YOUR<br>BRAND</strong><span>DESIGNED + PRINTED BY TISHO</span></span>`;
    }
    return `<${tag} class="print-card${photo ? ' has-photo' : ' is-service'}"${asButton ? ` type="button" aria-label="View ${esc(product.title)}"` : ''}>
      <span class="print-art">${artwork}</span>
      <span class="print-meta"><span>TISHO APPAREL</span><span>${photo ? 'REAL PRODUCT PHOTO' : 'CUSTOM SERVICE'}</span></span>
    </${tag}>`;
  }

  const wall = $('#wall');
  const stage = $('#gallery-stage');
  const progress = $('#gallery-progress');
  const panels = products.map((product, index) => {
    const panel = document.createElement('div');
    panel.className = 'wall-panel';
    panel.dataset.index = String(index);
    panel.innerHTML = printCard(product);
    panel.querySelector('button').addEventListener('click', event => {
      if (suppressClick) {
        event.preventDefault();
        return;
      }
      if (Math.abs(current - index) < .25) openProduct(index, panel);
      else snapTo(index);
    });
    wall.appendChild(panel);
    return panel;
  });

  products.forEach((product, index) => {
    const dot = document.createElement('button');
    dot.className = 'progress-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Show ${product.title}`);
    dot.addEventListener('click', () => snapTo(index));
    progress.appendChild(dot);
  });
  const dots = $$('.progress-dot', progress);

  let current = 0;
  let velocity = 0;
  let target = null;
  let dragging = false;
  let suppressClick = false;
  let startX = 0;
  let startCurrent = 0;
  let lastX = 0;
  let dragVelocity = 0;
  let lastFront = -1;
  let activeProduct = 0;
  let activeProductPhoto = 0;
  let selectedSize = '';
  let selectedColour = '';
  let lastFocus = null;

  const clamp = value => Math.max(0, Math.min(products.length - 1, value));

  function spacing() {
    if (stage.clientWidth < 760) return Math.max(170, Math.min(225, stage.clientWidth * .52));
    return Math.max(250, Math.min(335, stage.clientWidth * .235));
  }

  function updateCaption(index) {
    if (index === lastFront) return;
    lastFront = index;
    const product = products[index];
    $('#caption-kicker').textContent = `${String(index + 1).padStart(2, '0')} / ${String(products.length).padStart(2, '0')} · ${product.category.split(' · ')[0]}`;
    $('#caption-title').textContent = product.title;
    $('#caption-tagline').textContent = product.short;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === index);
      dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
    });
  }

  function renderWall() {
    const gap = spacing();
    const front = Math.round(current);
    panels.forEach((panel, index) => {
      const offset = index - current;
      const distance = Math.abs(offset);
      const x = offset * gap;
      const y = Math.min(48, distance * distance * 9);
      const z = -Math.min(420, distance * distance * 75);
      const rotation = Math.max(-42, Math.min(42, offset * -13));
      const opacity = distance > 3.65 ? 0 : Math.max(.12, 1 - Math.max(0, distance - 2.55) * .5);
      panel.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotation}deg)`;
      panel.style.opacity = String(opacity);
      panel.style.zIndex = String(100 - Math.round(distance * 10));
      panel.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
      panel.classList.toggle('is-front', index === front);
      panel.setAttribute('aria-hidden', opacity === 0 ? 'true' : 'false');
      panel.querySelector('button').tabIndex = index === front ? 0 : -1;
    });
    updateCaption(front);
  }

  function snapTo(index) {
    velocity = 0;
    target = clamp(index);
    if (reducedMotion) {
      current = target;
      target = null;
    }
  }

  function animate() {
    if (!dragging) {
      if (target !== null) {
        const difference = target - current;
        current += difference * (reducedMotion ? 1 : .13);
        if (Math.abs(difference) < .002) {
          current = target;
          target = null;
        }
      } else if (Math.abs(velocity) > .0005) {
        current += velocity;
        velocity *= reducedMotion ? 0 : .91;
        if (current <= 0 || current >= products.length - 1) {
          current = clamp(current);
          velocity = 0;
          target = Math.round(current);
        }
      } else {
        velocity = 0;
        target = Math.round(current);
      }
    }
    renderWall();
    requestAnimationFrame(animate);
  }

  stage.addEventListener('wheel', event => {
    const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if ((current >= products.length - 1 - .03 && delta > 0) || (current <= .03 && delta < 0)) return;
    event.preventDefault();
    target = null;
    velocity = Math.max(-.23, Math.min(.23, velocity + delta * .00072));
  }, { passive: false });

  stage.addEventListener('pointerdown', event => {
    if (event.button !== 0 || event.target.closest('.view-piece, .progress-dot')) return;
    dragging = true;
    suppressClick = false;
    startX = lastX = event.clientX;
    startCurrent = current;
    dragVelocity = 0;
    target = null;
    velocity = 0;
    stage.classList.add('is-dragging');
  });

  stage.addEventListener('pointermove', event => {
    if (!dragging) return;
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 5) {
      suppressClick = true;
      if (!stage.hasPointerCapture(event.pointerId)) stage.setPointerCapture(event.pointerId);
    }
    current = clamp(startCurrent - distance / spacing());
    dragVelocity = -(event.clientX - lastX) / spacing();
    lastX = event.clientX;
  });

  function finishDrag(event) {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove('is-dragging');
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    snapTo(Math.round(current + dragVelocity * 5));
    setTimeout(() => { suppressClick = false; }, 60);
  }
  window.addEventListener('pointerup', finishDrag);
  window.addEventListener('pointercancel', finishDrag);

  stage.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); snapTo(Math.round(current) + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); snapTo(Math.round(current) - 1); }
    if (event.key === 'Home') { event.preventDefault(); snapTo(0); }
    if (event.key === 'End') { event.preventDefault(); snapTo(products.length - 1); }
    if (event.key === 'Enter' && event.target === stage) { event.preventDefault(); openProduct(Math.round(current), panels[Math.round(current)]); }
  });

  $('#view-piece').addEventListener('click', () => {
    const index = Math.round(current);
    openProduct(index, panels[index]);
  });

  const productView = $('#product-view');
  const productArt = $('#product-art');
  const orderLink = $('#product-order');

  function updateOrderLink() {
    const product = products[activeProduct];
    const colour = selectedColour ? ` in ${selectedColour}` : '';
    const size = selectedSize ? `, size ${selectedSize}` : '';
    const message = `Hello Tisho Apparel, I would like to order the ${product.title}${colour}${size}. Please send me a quote.`;
    orderLink.href = `${WHATSAPP}?text=${encodeURIComponent(message)}`;
  }

  function renderProduct() {
    const product = products[activeProduct];
    if (activeProductPhoto >= product.photos.length) activeProductPhoto = 0;
    selectedColour = product.colour;
    $('#product-number').textContent = `${String(activeProduct + 1).padStart(2, '0')} / ${String(products.length).padStart(2, '0')}`;
    $('#product-category').textContent = product.category;
    $('#product-title').textContent = product.title;
    $('#product-description').textContent = product.description;
    productArt.innerHTML = printCard(product, false, activeProductPhoto);
    $('#media-note').textContent = product.photos.length
      ? 'Real product photography from Tisho Apparel’s Instagram.'
      : 'Typographic service panel — no dedicated custom-service photo was supplied.';

    const thumbs = $('#product-photo-thumbs');
    if (product.photos.length > 1) {
      thumbs.hidden = false;
      thumbs.innerHTML = product.photos.map((photo, index) => `<button type="button" class="photo-thumb${index === activeProductPhoto ? ' selected' : ''}" data-photo="${index}" aria-label="Show photo ${index + 1} for ${esc(product.title)}" aria-pressed="${index === activeProductPhoto}"><img src="assets/photos/${photo.src}" alt="" draggable="false"></button>`).join('');
      $$('.photo-thumb', thumbs).forEach(button => {
        button.addEventListener('click', () => {
          activeProductPhoto = Number(button.dataset.photo);
          renderProduct();
        });
      });
    } else {
      thumbs.hidden = true;
      thumbs.innerHTML = '';
    }

    const colourGroup = $('#colour-group');
    const colourOptions = $('#colour-options');
    if (product.colours) {
      colourGroup.hidden = false;
      $('#colour-value').textContent = selectedColour;
      colourOptions.innerHTML = product.colours.map(colour => `<button type="button" class="colour-option${colour.name === selectedColour ? ' selected' : ''}" style="--swatch:${colour.hex}" data-product="${colour.product}" aria-pressed="${colour.name === selectedColour}">${colour.name}</button>`).join('');
      $$('.colour-option', colourOptions).forEach(button => {
        button.addEventListener('click', () => {
          activeProduct = products.findIndex(item => item.id === button.dataset.product);
          activeProductPhoto = 0;
          renderProduct();
        });
      });
    } else {
      colourGroup.hidden = true;
      colourOptions.innerHTML = '';
    }

    $('#size-value').textContent = selectedSize || 'Select a size';
    $('#size-options').innerHTML = SIZES.map(size => `<button type="button" class="size-option${size === selectedSize ? ' selected' : ''}" data-size="${size}" aria-pressed="${size === selectedSize}">${size}</button>`).join('');
    $$('.size-option', $('#size-options')).forEach(button => {
      button.addEventListener('click', () => {
        selectedSize = button.dataset.size;
        $('#size-value').textContent = selectedSize;
        $$('.size-option', $('#size-options')).forEach(option => {
          const selected = option === button;
          option.classList.toggle('selected', selected);
          option.setAttribute('aria-pressed', String(selected));
        });
        updateOrderLink();
      });
    });

    const post = $('#original-post');
    const postUrl = (product.photos[activeProductPhoto] && product.photos[activeProductPhoto].post) || product.post;
    if (postUrl) {
      post.hidden = false;
      post.href = postUrl;
    } else {
      post.hidden = true;
      post.removeAttribute('href');
    }
    updateOrderLink();
  }

  function flyArtwork(sourceCard) {
    if (!sourceCard || reducedMotion) return;
    const sourceRect = sourceCard.getBoundingClientRect();
    const destinationCard = $('.print-card', productArt);
    if (!destinationCard || !sourceRect.width) return;
    const clone = sourceCard.cloneNode(true);
    clone.classList.add('fly-print');
    Object.assign(clone.style, {
      left: `${sourceRect.left}px`,
      top: `${sourceRect.top}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`
    });
    destinationCard.style.opacity = '0';
    document.body.appendChild(clone);
    requestAnimationFrame(() => {
      const destinationRect = destinationCard.getBoundingClientRect();
      const dx = destinationRect.left + destinationRect.width / 2 - (sourceRect.left + sourceRect.width / 2);
      const dy = destinationRect.top + destinationRect.height / 2 - (sourceRect.top + sourceRect.height / 2);
      const animation = clone.animate([
        { transform: 'translate3d(0, 0, 0) scale(1)', opacity: 1 },
        { transform: `translate3d(${dx}px, ${dy}px, 0) scale(${destinationRect.width / sourceRect.width}, ${destinationRect.height / sourceRect.height})`, opacity: 1 }
      ], { duration: 650, easing: 'cubic-bezier(.2,.75,.2,1)', fill: 'forwards' });
      animation.onfinish = () => {
        destinationCard.style.opacity = '1';
        clone.remove();
      };
    });
  }

  function openProduct(index, sourcePanel) {
    activeProduct = index;
    activeProductPhoto = 0;
    selectedSize = '';
    selectedColour = products[index].colour;
    lastFocus = document.activeElement;
    const sourceCard = sourcePanel ? $('.print-card', sourcePanel) : null;
    const sourceRect = sourceCard ? sourceCard.getBoundingClientRect() : null;
    renderProduct();
    productView.classList.add('is-open');
    productView.setAttribute('aria-hidden', 'false');
    document.body.classList.add('product-open');
    productView.scrollTop = 0;
    $('#close-product').focus({ preventScroll: true });
    if (sourceCard && sourceRect) flyArtwork(sourceCard);
  }

  function closeProduct() {
    if (!productView.classList.contains('is-open')) return;
    productView.classList.remove('is-open');
    productView.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('product-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus({ preventScroll: true });
  }

  $('#close-product').addEventListener('click', closeProduct);
  $('#product-brand').addEventListener('click', event => { event.preventDefault(); closeProduct(); });
  orderLink.addEventListener('click', event => {
    if (selectedSize) return;
    event.preventDefault();
    const toast = $('#size-toast');
    toast.classList.add('show');
    $('#size-group').focus?.();
    setTimeout(() => toast.classList.remove('show'), 2400);
  });

  document.addEventListener('keydown', event => {
    if (!productView.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeProduct();
    if (event.key === 'Tab') {
      const focusable = $$('a[href], button:not([disabled]), [tabindex="0"]', productView).filter(element => !element.hidden && element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  window.addEventListener('resize', renderWall);
  renderWall();
  requestAnimationFrame(animate);
})();
