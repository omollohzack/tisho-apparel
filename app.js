(() => {
  'use strict';

  const WHATSAPP = 'https://wa.me/254746099135';
  const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const CYLINDER_RADIUS = 1020;
  const ANGLE_PER_PIECE = 28;
  const homeHeartColours = [{ name: 'Maroon', product: 'home-heart-maroon', hex: '#633638' }, { name: 'Black', product: 'home-heart-black', hex: '#171917' }];
  const products = [
    {
      id: 'home-heart-maroon',
      title: 'Home Heart Tee — Maroon',
      short: 'Maroon tee · Home script / striped heart',
      category: 'HOME HEART · MAROON COLOURWAY',
      description: 'The Home Heart design in maroon: white Home script across a striped heart, shown in Tisho Apparel’s photo of a man and child laughing on a sofa. An alternate view shows the maroon tee worn by a child. Choose from S, M, L, XL or XXL and request the price directly in WhatsApp.',
      colour: 'Maroon',
      colours: homeHeartColours,
      art: 'home-heart',
      photos: [
        { src: '14-home-heart-maroon.webp', alt: 'Maroon Home Heart tee with white Home script over a striped heart, worn by a man beside a laughing child on a sofa', width: 1080, fit: 'cover', post: 'https://www.instagram.com/p/DVvti3OjcrU/' },
        { src: '15-home-heart-maroon-alt.jpg', alt: 'Child in a maroon Home Heart tee with white Home script over a striped heart', width: 640, fit: 'contain', post: 'https://www.instagram.com/reel/DVvXiYUjSJj/' }
      ],
      post: 'https://www.instagram.com/p/DVvti3OjcrU/'
    },
    {
      id: 'home-heart-black',
      title: 'Home Heart Tee — Black',
      short: 'Black tee · Home script / green striped heart',
      category: 'HOME HEART · BLACK COLOURWAY',
      description: 'The black colourway of the Home Heart Tee: script Home lettering over a green striped heart. The original photo shows the folded tee on a tufted ottoman beside a tote bag. Select a size from S through XXL, then send the piece name and size to Tisho for a direct quote.',
      colour: 'Black',
      colours: homeHeartColours,
      art: 'home-heart',
      photos: [{ src: '17-home-heart-tee-black.jpg', alt: 'Black Home Heart tee with Home script over a green striped heart, folded on a tufted ottoman beside a tote bag', width: 640, fit: 'contain' }],
      post: 'https://www.instagram.com/reel/DVqhRtXDY9A/'
    },
    {
      id: 'home-hoodie',
      title: 'HOME Hoodie',
      short: 'Black hoodie · HOME / tribal pattern',
      category: 'FLAGSHIP · PREMIUM · KENYAN MADE',
      description: 'The flagship black HOME Hoodie brings together HOME lettering on one side and a vibrant tribal pattern on the other. See it in the original reel, worn by a man beside the white HOME colourway, and in a styled flat lay with sunglasses, jeans, sneakers and a handbag. Premium Kenyan-made streetwear, available in S–XXL with the price quoted in conversation.',
      colour: 'Black',
      art: 'hoodie',
      photos: [
        { src: '10-home-hoodies-couple.webp', alt: 'Man in a black HOME hoodie and woman in a white HOME hoodie in front of a Kenya Airways plane', width: 1080, fit: 'cover', post: 'https://www.instagram.com/p/DVaz-icDXTP/' },
        { src: '05-home-hoodie-cover.jpg', alt: 'Black HOME hoodie with HOME lettering and a vibrant tribal pattern', width: 640, fit: 'contain' },
        { src: '16-home-hoodie-flatlay.jpg', alt: 'Black HOME hoodie flat lay styled with sunglasses, blue jeans, sneakers and a handbag', width: 640, fit: 'contain', post: 'https://www.instagram.com/reel/DVsvsr-DSMx/' }
      ],
      post: 'https://www.instagram.com/reel/DVQF6xODTq2/'
    },
    {
      id: 'home-tee-black',
      title: 'HOME Tee — Black',
      short: 'Black tee · Vertical HOME / Kenya silhouette',
      category: 'GRAPHIC TEE · HOME COLLECTION',
      description: 'A black tee from the HOME collection, with HOME written vertically on the chest. The O becomes a silhouette of Kenya, accompanied by an abstract geometric spear in gold, green and brown. The hanger photograph shows the print against Tisho Apparel’s peach script backdrop. Choose S–XXL, or switch to the white colourway, and request a price in WhatsApp.',
      colour: 'Black',
      colours: [{ name: 'Black', product: 'home-tee-black', hex: '#171917' }, { name: 'White', product: 'home-tee-white', hex: '#f5f3eb' }],
      art: 'home-tee-black',
      photos: [{ src: '01-home-tee-black.webp', alt: 'Black HOME tee on a wooden hanger against the peach Tisho Apparel backdrop', width: 1080, fit: 'cover' }],
      post: 'https://www.instagram.com/p/DC6UImhITYz/'
    },
    {
      id: 'home-tee-white',
      title: 'HOME Tee — White',
      short: 'White tee · Vertical HOME / Kenya silhouette',
      category: 'GRAPHIC TEE · HOME COLLECTION',
      description: 'The white HOME graphic tee features the same vertical HOME lettering, Kenya-silhouette O and gold, green and brown spear detail as the black colourway. Alongside the clean hanger photo, see it worn beside another HOME tee and styled at the beach with denim shorts. Sizes S–XXL are available; Tisho provides the price in the order conversation.',
      colour: 'White',
      colours: [{ name: 'Black', product: 'home-tee-black', hex: '#171917' }, { name: 'White', product: 'home-tee-white', hex: '#f5f3eb' }],
      art: 'home-tee-white',
      photos: [
        { src: '02-home-tee-white.webp', alt: 'White HOME tee on a wooden hanger against the peach Tisho Apparel backdrop', width: 1080, fit: 'cover' },
        { src: '07-home-tee-white-worn.jpg', alt: 'Man wearing the white HOME tee beside the same tee on a hanger', width: 640, fit: 'contain', post: 'https://www.instagram.com/reel/DWBVqGxjVwq/' },
        { src: '11-home-tee-beach.jpg', alt: 'Woman at the beach wearing the white HOME graphic tee with denim shorts', width: 640, fit: 'contain', post: 'https://www.instagram.com/reel/DWYjF2ejf-3/' }
      ],
      post: 'https://www.instagram.com/p/DC6UImhITYz/'
    },
    {
      id: 'proudly-kenyan',
      title: 'Proudly Kenyan Tee',
      short: 'Black tee · Colourful KENYAN graphic',
      category: 'IDENTITY · CULTURE · KENYAN PRIDE',
      description: 'Premium black. Bold design. Kenyan spirit. This black Proudly Kenyan Tee carries a colourful KENYAN graphic with PROUDLY set vertically alongside it. The original promotional image combines a model in a yellow beanie and shorts with a separate hanger view of the shirt. More than a T-shirt: an identity, culture and pride in where we come from. Sizes S–XXL; price by DM or WhatsApp.',
      colour: 'Black',
      art: 'proudly-kenyan',
      photos: [{ src: '04-proudly-kenyan-tee.jpg', alt: 'Proudly Kenyan promo image with a model in a yellow beanie and the black graphic tee also shown on a hanger', width: 640, fit: 'contain' }],
      post: 'https://www.instagram.com/reel/De1R5NkNto-/'
    },
    {
      id: 'nairobi-city',
      title: 'Nairobi City Tee',
      short: 'White tee · Bold NAIROBI CITY graphic',
      category: 'CITY SERIES · NAIROBI',
      description: 'A white tee with a bold NAIROBI CITY graphic. Tisho’s original feature presents the shirt on a wooden hanger and in the brand’s sleek black gift box lined with grey tissue paper. The gift-box photograph is shown at its native 480-pixel width to preserve its clarity, and also appears in the packaging section. Choose a size from S through XXL and ask for a quote in WhatsApp.',
      colour: 'White',
      art: 'nairobi-city',
      photos: [{ src: '06-nairobi-city-giftbox.jpg', alt: 'White NAIROBI CITY tee presented in the black Tisho gift box with grey tissue paper', width: 480, fit: 'contain' }],
      post: 'https://www.instagram.com/reel/DVdbD5VDYEY/'
    },
    {
      id: 'nairobi-kenya',
      title: 'Nairobi Kenya Tee',
      short: 'White crew-neck · Grey block letters',
      category: 'CITY SERIES · CREW NECK',
      description: 'A white crew-neck tee with NAIROBI KENYA set in grey block letters. The original styling pairs the hanger-held shirt with denim shorts and white sneakers for a clean, understated city look. Choose from S, M, L, XL and XXL, then contact Tisho directly for the price and order details.',
      colour: 'White',
      art: 'nairobi-kenya',
      photos: [{ src: '03-nairobi-kenya-tee.webp', alt: 'White NAIROBI KENYA crew-neck tee on a hanger, styled with denim shorts and white sneakers', width: 1080, height: 864, fit: 'cover' }],
      post: 'https://www.instagram.com/p/DFzn2WWoG03/'
    },
    {
      id: 'nairobi-tee-black',
      title: 'Nairobi Tee — Black',
      short: 'Black tee · NAIROBI in green, gold and red',
      category: 'CITY SERIES · NAIROBI',
      description: 'A black Nairobi tee on a wooden hanger, carrying NAIROBI lettering in green, gold and red. The dark garment makes the city name and its colour treatment the centre of the design. Available in S–XXL through a direct WhatsApp order; prices are quoted in the conversation.',
      colour: 'Black',
      art: 'nairobi-tee-black',
      photos: [{ src: '19-nairobi-tee-black.jpg', alt: 'Black Nairobi tee on a wooden hanger with NAIROBI in green, gold and red lettering', width: 640, fit: 'contain' }],
      post: 'https://www.instagram.com/reel/DVikGTODRgO/'
    },
    {
      id: 'get-rich-tee',
      title: 'GET RICH OR DIE TRYIN Tee',
      short: 'Black tee · GET RICH OR DIE TRYIN graphic',
      category: 'GRAPHIC TEE · STATEMENT DESIGN',
      description: 'The black GET RICH OR DIE TRYIN Tee turns a bold statement into the whole design. Tisho’s original reel shows the graphic tee both on a hanger and worn, making the print and its placement easy to compare. Pick a size from S through XXL and send the product name and size to Tisho for a quote.',
      colour: 'Black',
      art: 'get-rich-tee',
      photos: [{ src: '08-get-rich-tee.jpg', alt: 'Black GET RICH OR DIE TRYIN tee shown on a hanger and worn', width: 640, fit: 'contain' }],
      post: 'https://www.instagram.com/reel/DW8oAXfDRgc/'
    },
    {
      id: 'nipsey-graphic-tee',
      title: 'Nipsey Graphic Tee',
      short: 'Grey / tan tee · Nipsey Hussle graphic',
      category: 'GRAPHIC TEE · PREMIUM',
      description: 'A grey/tan crew-neck tee featuring a Nipsey Hussle graphic, photographed on a wooden hanger. The warm-toned portrait graphic sits at the centre of the shirt in this premium Tisho Apparel design. Available in sizes S–XXL; ask for a price by DM or WhatsApp.',
      colour: 'Grey / tan',
      art: 'nipsey-graphic-tee',
      photos: [{ src: '09-nipsey-graphic-tee.webp', alt: 'Grey and tan Nipsey Hussle graphic tee on a hanger', width: 1080, fit: 'cover' }],
      post: 'https://www.instagram.com/p/DWgG5dfDeNQ/'
    },
    {
      id: 'custom-print',
      title: 'Custom Print Tee',
      short: 'Your idea · Designed and printed by Tisho',
      category: 'CUSTOM WORK · YOUR IDEA',
      description: 'Think it, we design it and print it on your T-shirt. Bring your idea to Tisho Apparel in Nairobi CBD and start a custom design conversation. The team can work from your idea to create and print a unique piece, with sizes S–XXL and a price quoted directly in the conversation.',
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
      description: 'Custom printing and branding for clients who bring an idea or brand requirement. Tisho’s service covers design and print, using the same direct DM or WhatsApp conversation as its ready-made catalogue. Discuss the project, receive a quote, and choose garment sizes S–XXL.',
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

  function galleryPhoto(product) {
    return product.photos.find(photo => !photo.packagingOnly);
  }

  function printCard(product, asButton = true, photoIndex = 0, wallMode = false) {
    const tag = asButton ? 'button' : 'div';
    const photo = wallMode ? galleryPhoto(product) : product.photos[photoIndex];
    const nativeWidth = photo ? Math.max(1, Number(photo.width) || 1) : 0;
    const width = photo ? Math.min(264, nativeWidth) : 264;
    let artwork;
    if (photo) {
      artwork = `<img class="product-photo ${photo.fit === 'cover' ? 'cover' : 'contain'}" src="${esc(`assets/photos/${photo.src}`)}" alt="${esc(photo.alt)}" width="${nativeWidth}" height="${photo && photo.height ? photo.height : 1350}" draggable="false" decoding="async">`;
    } else if (product.art === 'custom-print') {
      artwork = '<span class="service-art service-print"><strong>THINK<br>IT.</strong><span>WE DESIGN IT.</span><span>WE PRINT IT.</span><small>YOUR IDEA · YOUR T-SHIRT</small></span>';
    } else if (product.art === 'nairobi-city') {
      artwork = '<span class="service-art nairobi-city-panel"><small>TISHO CITY SERIES</small><strong>NAIROBI<br>CITY</strong><span>WHITE TEE · BOLD GRAPHIC</span></span>';
    } else {
      artwork = '<span class="service-art service-branding"><small>CUSTOM PRINTING + BRANDING</small><strong>YOUR<br>BRAND</strong><span>DESIGNED + PRINTED BY TISHO</span></span>';
    }
    return `<${tag} class="print-card${photo ? ' has-photo' : ' is-service'}"${asButton ? ` type="button" aria-label="View ${esc(product.title)}"` : ''} style="max-width:${width}px">
      <span class="print-art">${artwork}</span>
      <span class="print-meta"><span>TISHO APPAREL</span><span>${photo ? 'REAL PRODUCT PHOTO' : 'CATALOGUE DESIGN'}</span></span>
    </${tag}>`;
  }

  const wall = $('#wall');
  const stage = $('#gallery-stage');
  const progress = $('#gallery-progress');
  const panels = products.map((product, index) => {
    const panel = document.createElement('div');
    panel.className = 'wall-panel';
    panel.dataset.index = String(index);
    panel.innerHTML = printCard(product, true, 0, true);
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
    dot.setAttribute('aria-label', `Show ${String(product.title).replace(/[<>]/g, '')}`);
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
    return Math.max(140, Math.min(300, stage.clientWidth * .23));
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
    const radius = Math.max(370, Math.min(CYLINDER_RADIUS, stage.clientWidth * .72));
    const step = ANGLE_PER_PIECE * Math.PI / 180;
    const front = Math.round(current);
    panels.forEach((panel, index) => {
      const offset = index - current;
      const angle = offset * step;
      const distance = Math.abs(offset);
      const x = Math.sin(angle) * radius;
      const z = (Math.cos(angle) - 1) * radius;
      const y = Math.min(42, distance * distance * 6);
      const opacity = distance > 3.15 ? 0 : Math.max(.08, 1 - Math.max(0, distance - 1.7) * .46);
      panel.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-offset * ANGLE_PER_PIECE}deg)`;
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
      thumbs.innerHTML = product.photos.map((photo, index) => {
        const active = index === activeProductPhoto;
        return `<button type="button" class="photo-thumb${active ? ' selected' : ''}" data-photo="${index}" aria-label="Show photo ${index + 1} for ${esc(product.title)}" aria-pressed="${active}"><img src="${esc(`assets/photos/${photo.src}`)}" alt="" width="${Math.max(1, Number(photo.width) || 1)}" height="1350" draggable="false"></button>`;
      }).join('');
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
      colourOptions.innerHTML = product.colours.map(colour => {
        const selected = colour.name === selectedColour;
        return `<button type="button" class="colour-option${selected ? ' selected' : ''}" style="--swatch:${esc(colour.hex)}" data-product="${esc(colour.product)}" aria-pressed="${selected}">${esc(colour.name)}</button>`;
      }).join('');
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
    $('#size-options').innerHTML = SIZES.map(size => {
      const selected = size === selectedSize;
      return `<button type="button" class="size-option${selected ? ' selected' : ''}" data-size="${esc(size)}" aria-pressed="${selected}">${esc(size)}</button>`;
    }).join('');
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
