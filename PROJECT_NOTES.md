# PROJECT_NOTES.md — Handoff Note
_Niza's Pink Strawberry Scrapbook Birthday Website 🍓🎀_

## What this is
A fully interactive birthday website for **Niza** styled after a pink strawberry kawaii
scrapbook / vintage shoujo collage (reference image from the original brief).
Stack: **React 18 + Vite 6 + CSS**, with `vite-plugin-singlefile` so the build produces
**one self-contained `dist/index.html`** (~216 KB). All user-facing text is in **Indonesian**.

## Project structure
```
birthday-web/                  ← D:\Nazhi zone\NEW FILE\birthday-web
├── index.html                 lang="id", Google Fonts (Playfair/Caveat/Gochi), title ID
├── vite.config.js             base './' + viteSingleFile plugin
├── package.json               react 18.3, vite ^6.3.5, plugin-react, vite-plugin-singlefile
├── README.md                  customization guide (English)
├── PROJECT_NOTES.md           ← this handoff note
├── scripts/cleanup.mjs        one-off dev fixup (removed stray p-label attrs in Art.jsx)
├── public/photos/ + public/music/   hint READMEs; user can drop real photos/song here
└── src/
    ├── main.jsx, App.jsx      entry + section composition + skip-link
    ├── data/config.js         ★ ALL user-facing text (Indonesian): name, hero, stickers,
    │                            letter, cake, gallery, surprise, footer, MUSIC.file/volume
    ├── lib/confetti.js        burstConfetti / rainConfetti / sparklePop / floatHearts
    ├── lib/musicBox.js        WebAudio music-box Happy Birthday loop + celebration chime
    ├── hooks/useReveal.js     IntersectionObserver fade-in
    ├── components/
    │   ├── art/Art.jsx        every SVG illustration (Bunny, Strawberry, Cherry, Bow,
    │   │                      Flower, CakeSlice, CakeArt, Heart, Sparkle, TornEdge, …)
    │   ├── Decorations.jsx    PaperBackground, CornerStickers, SectionHead, Washi, LaceEdge
    │   ├── Hero.jsx           scrapbook page + interactive envelope (flap opens, card slides
    │   │                      out from under the pocket, heart rain, scrolls to #stickers)
    │   ├── StickerScrapbook.jsx  7 sticker buttons (incl. CSS manga card) → pop-up wishes
    │   ├── Letter.jsx         torn-paper letter, reveals on scroll
    │   ├── CakeSection.jsx    3 clickable candles + "make a wish" blow-all + wish reveal
    │   ├── Gallery.jsx        interactive sticker album (no photos!): 4 polaroid
+    │   │                      collection cards × 3 SVG stickers = 12 click targets,
+    │   │                      bubble notes, counter 0/12, confetti finale, reset
    │   ├── Gift.jsx           gift box opens → secret note + confetti
    │   ├── MusicPlayer.jsx    no autoplay; tries MUSIC.file (HEAD check), else synth loop
    │   └── Footer.jsx
    └── styles/                base.css (tokens/buttons/a11y), decorations.css
                               (bg/tape/lace/confetti), sections.css (all layouts)
```
Note: an older separate draft lives in `birthday-web/birthday-web/` (static Indonesian
site) — intentionally untouched; do not confuse the two.

## Completed work
- All 9 spec sections implemented + decorative system, animations, confetti, music player
- Build verified: `npm run build` succeeds → single-file `dist/index.html`
- Full English→Indonesian translation of every user-facing string (config.js, aria-labels,
  tooltips, skip-link, index.html title/description/lang). Decorative manga card keeps
  "Sweet, like you ♡" intentionally.
- Fixed along the way: TornEdge path, envelope letter z-layering, candle flame animation
  override (`animation:none` on `.is-out`), MusicPlayer stale-mode toggle logic,
  gift-box open-state CSS (`.gift.open` → `.gift-scene.open` — the `open` class lives on
  `.gift-scene`, so the lid/glow/secret-note selectors previously never matched).
- Session 2 changes: the old photo polaroid gallery became an **interactive sticker
  collection** (`STICKER_ALBUM` in config.js; `Gallery.jsx` rewritten; new `Blossom`
  and `Locket` art added to Art.jsx, `Cupcake`/`Candy`/`Envelope` now used). Photos are
  gone entirely — `public/photos` is no longer referenced. Fixed the duplicate-export
  build error (my Cupcake/Candy rewrites vs pre-existing versions; kept the originals).

## Known bugs / caveats
- No open build/runtime errors, but the site has **not been visually QA'd in a real
  browser** (env had no browser) — verified via build + static checks only.
- Requires internet for Google Fonts (falls back to system fonts offline; still fine).
- On `file://` (double-clicked dist) music always uses the built-in synth fallback — OK by design.
- Cosmetic leftovers: class typo `hero-strawbery` (consistent JSX+CSS), a few unused imports.

## How to run / build
```bash
cd "D:\Nazhi zone\NEW FILE\birthday-web"
npm install        # already done (node_modules present)
npm run dev        # dev server
npm run build      # → dist/index.html (single file, shareable as-is)
npm run preview    # serve dist (a preview was last running on http://localhost:4173)
```
On this machine use **`npm.cmd`** from PowerShell (`npm.ps1` is blocked by execution policy).

## Key customization points
- Texts/captions/messages → `src/data/config.js`
- Colors/fonts → `:root` in `src/styles/base.css`
- Sticker album texts/arts/messages → `STICKER_ALBUM` in config.js (cards, stickers,
  messages, counter template, complete/reset labels); sticker art map → `ART` in Gallery.jsx
- Song → `public/music/`, then `MUSIC.file` in config (optional; synth fallback exists)

## Next task
None assigned yet — user requested this handoff before starting the next session.
Likely candidates: visual QA in a real browser, adding real photos/music, or deployment
(Netlify/Vercel/GitHub Pages or zipping `dist`).
