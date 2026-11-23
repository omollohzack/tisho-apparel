# Tisho Apparel — build notes

## What is built

A dependency-free static site for the Kenyan Tisho Apparel brand: a real-photo cylindrical gallery, product views with colour/size selection and WhatsApp quotes, custom-printing content, packaging, About, and verified social/contact information.

The round-two catalogue contains **13 wall pieces**:

1. Home Heart Tee — Maroon
2. Home Heart Tee — Black
3. HOME Hoodie
4. HOME Tee — Black
5. HOME Tee — White
6. Proudly Kenyan Tee
7. Nairobi City Tee
8. Nairobi Kenya Tee
9. Nairobi Tee — Black
10. GET RICH OR DIE TRYIN Tee
11. Nipsey Graphic Tee
12. Custom Print Tee
13. Custom Branding

There are 17 unique local photo files: 16 used across product/wall/product-view paths plus the KICC atmosphere image in About. The two custom services use clearly labelled typographic panels. Nairobi City uses a typographic catalogue panel because its only supplied photo is the small gift-box image; that photo is shown in Packaging instead.

No prices, checkout, invented reviews, TikTok claim, guessed email address, or unrelated “Tisho Fashion” content is included.

## Round 2 — changes and geometry

### More circular wall

Round 1 used a shallow approximation: `x = offset × spacing`, a quadratic downward/backward displacement, and a capped ±42° rotation.

Round 2 uses a **true cylindrical arc**:

- **Desktop radius:** **1,020 px**, responsively capped to `72%` of the stage width.
- **Minimum radius:** **370 px** on small screens.
- **Angle per piece:** **28°**.
- Position: `x = sin(angle) × radius`, `z = (cos(angle) − 1) × radius`.
- Rotation: `-offset × 28°`.
- Front piece: 0° rotation and z=0, so it is flat to the viewer and largest; adjacent pieces visibly wrap away at ±28°, ±56°, etc., with distant pieces fading out.

Wheel/trackpad inertia, drag/touch-drag, snap-to-nearest, click-to-product fly-in, keyboard Left/Right/Home/End, progress bars, and the caption all remain in place.

### Image clarity and native sizes

- The first/front wall piece is **Home Heart Tee — Maroon**, using the sharp **1080 px** `14-home-heart-maroon.webp`.
- The HOME Hoodie wall image is the **1080 px** couple photo rather than the 640 px reel cover.
- Every displayed image is checked against its natural width; no image is rendered wider than its native pixel width.
- `06-nairobi-city-giftbox.jpg` (**480×854**) is removed from the large wall and appears only in Packaging, at **480 px** wide.
- 640 px alternate photos are capped in their product-view slots and thumbnails; 1080 px primary images get the larger wall slots.

### New photos integrated

All seven confirmed round-two files were present and copied into `assets/photos/`:

- `11-home-tee-beach.jpg` — HOME Tee White alternate/worn view.
- `14-home-heart-maroon.webp` — primary Home Heart Maroon photo and new first wall piece.
- `15-home-heart-maroon-alt.jpg` — Home Heart Maroon alternate view.
- `16-home-hoodie-flatlay.jpg` — HOME Hoodie alternate flat-lay view.
- `17-home-heart-tee-black.jpg` — Home Heart Black wall/product colourway.
- `19-nairobi-tee-black.jpg` — new Nairobi Tee — Black wall/product piece.
- `20-kicc-drone.jpg` — About atmosphere image only, not a product panel.

Product-view photo selection updates the original-post link when the selected photo has its own source post. HOME Tee White has three photos; HOME Hoodie has three; Home Heart Maroon has two. HOME Tee Black/White and Home Heart Maroon/Black have colour selectors.

### Expanded content

Fuller product descriptions, the five ordering steps, custom-printing/client-branding bullets, real packaging copy and photo, and expanded About copy were added using only the supplied facts and photo descriptions. The KICC drone shot is labelled as an atmosphere post.

## How to run

Open `index.html` directly, or serve locally:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory /home/lordgrim/Downloads/tisho-site
```

Then open `http://127.0.0.1:8765/`.

Keep `index.html`, `styles.css`, `app.js`, and `assets/` together. No build step, package installation, external font/script/resource, framework, module import, API, or runtime backend is required.

## Debug and security audit

- **Dynamic HTML:** every dynamic product/photo/colour/size string interpolated into HTML is escaped with `esc()`; other dynamic text uses `textContent`. Removed the unused legacy SVG garment-drawing functions.
- **External links:** every `target="_blank"` link has `rel="noopener noreferrer"`. External destinations were format-checked, not opened.
- **CSP:** added a meta Content-Security-Policy with self-only scripts, images, and styles. Inline styles are allowed because the wall’s computed transforms and colour swatches require them. No `'unsafe-inline'` script permission is used. `connect-src` is `none`; object, form, base URI, and framing are restricted. `upgrade-insecure-requests` is included.
- **Referrer policy:** `no-referrer` via meta tag.
- **Resources:** no external scripts, fonts, styles, images, or mixed-content resources. Local references were checked; all 17 local photos load in the tested render paths.
- **WhatsApp:** order links use `https://wa.me/254746099135` with `encodeURIComponent` message text containing product, colour where applicable, and selected size. Empty-size orders show a reminder and do not navigate.
- **Bugs fixed during round two:** restored `updateCaption()` after an editing regression stopped the animation loop; tightened the caption hit area; removed debug instrumentation and the temporary source backup. Earlier pointer-capture and mobile-overflow fixes remain in place.

### What cannot be fixed on GitHub Pages

A meta CSP/referrer policy is useful but not equivalent to HTTP response headers. GitHub Pages does not provide custom per-site HTTP headers for HSTS, a response-header CSP, `X-Content-Type-Options`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, or `Cross-Origin-Resource-Policy`. `frame-ancestors` in a meta CSP is not a substitute for the same directive in a response header. No claim is made that these headers were configured.

## Verification performed

- `node --check app.js` passes.
- Desktop **1440×1000** and mobile **390×844** browser checks completed.
- All **13 panels** and **13 progress controls** render.
- Cylinder transform checked: front 0°, adjacent −28° and −56°, with the correct radius-based x/z positions on both sides as the wall turns.
- Dot navigation, pointer drag, wheel inertia/snap, product open/close, colour selection, alternate-photo source switching, size reminder, and WhatsApp URL formation checked.
- Home Heart Maroon/Black and Nairobi Tee — Black specifically opened and checked with their correct real photos/source links.
- Native-width audit found **zero** images wider than their source pixels.
- No horizontal page overflow at the tested desktop/mobile sizes.
- Static checks passed for local references, target-blank rel attributes, CSP/referrer metadata, and forbidden/unverified content.
- The browser did not support `file://` navigation, so direct file opening was not exercised there; local HTTP testing was used instead. The site uses relative local resources and requires no server runtime.

No commits or pushes were made during round two.
