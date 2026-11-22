# Tisho Apparel — build notes

## What was built

A dependency-free static website for the Kenyan Tisho Apparel brand, with:

- A full-screen white gallery room and a **shallow, curved 3D print wall** holding all ten catalogue pieces: the original eight plus GET RICH OR DIE TRYIN Tee and Nipsey Graphic Tee.
- Real Tisho Apparel product photographs stored locally under `assets/photos/`. HOME Tee White and HOME Hoodie include selectable alternate photos in their product views; changing photos also updates the original-post link when the alternate image came from a different post.
- Product views with real photography, catalogue descriptions, colour selection for the HOME Tee black/white variants, S–XXL size selection, verified original-post links where supplied, and WhatsApp ordering. The two custom services use clearly labelled typographic panels because no dedicated custom-service photos were supplied.
- Ordering steps, custom printing/branding, black gift-box packaging, About, and verified social/contact sections.
- No prices, checkout, invented reviews, TikTok claim, guessed email address, or unrelated “Tisho Fashion” content.

## How the gallery works

- **Mouse wheel / trackpad:** glides along the wall with inertia and snaps to the nearest piece. Scrolling beyond the final piece allows normal page scrolling to the content below.
- **Drag / touch-drag:** moves the wall directly, then projects and snaps to a piece. Pointer capture starts only after actual drag movement so a normal garment click still opens the product view.
- **Direct controls:** bottom progress bars, keyboard Left/Right/Home/End, and “View this piece.”
- **Product transition:** the selected print flies into a clean product layout, with a reduced-motion fallback.
- **Ordering:** selecting a size builds a WhatsApp message containing the piece, colour where applicable, and size. Clicking without a size shows a reminder and does not open WhatsApp.

## Run it

Open **`index.html`** directly in a browser. There is no build step, package installation, remote font, framework, module import, API, or fetched asset. `styles.css`, `app.js`, and the `assets/` folder must remain beside `index.html`.

For local HTTP preview instead:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory /home/lordgrim/Downloads/tisho-site
```

Then open `http://127.0.0.1:8765/`.

## Verification performed

- `node --check app.js` passed.
- Browser-tested at **1440×1000** and **390×844**: gallery dots, pointer dragging, wheel inertia/snapping, product opening/closing, colour and size selection, size reminder, original-post URLs, generated WhatsApp URLs, and alternate-photo switching.
- Verified all ten panels and ten progress controls render, all eight primary wall photos load successfully, and both newly added products open with the correct photo and source link.
- Fixed a pointer-capture bug that initially prevented garment clicks from opening products.
- Fixed mobile horizontal overflow caused by 3D panel bounds; the final mobile layout has no horizontal page overflow.
- Checked all ten catalogue entries and all nine supplied original-post URLs are represented; scanned for prices, TikTok, the unrelated brand, and guessed contact details.

## Could not verify / interpretation limits

- The test browser did not support `file://` navigation, so direct file opening was not exercised there. It was tested over local HTTP; the implementation uses only relative local resources and does not require a server runtime.
- Exact frame-for-frame motion parity with the reference video cannot be claimed; the curved wall is an original implementation of the supplied reference and description. Reference-video frame extraction tools (`ffmpeg`/OpenCV) were unavailable in the environment.
- External Instagram, Facebook, WhatsApp, and original-post destinations were not opened during testing, to avoid unintended external actions. Their URLs were checked against the supplied values.
