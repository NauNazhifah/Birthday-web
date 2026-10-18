# Niza's Pink Strawberry Scrapbook Birthday 🍓🎀

A handmade-feeling kawaii scrapbook birthday website, built with React + Vite.

## Run it

```bash
npm install
npm run dev       # opens locally during development
npm run build     # creates dist/index.html — ONE file containing everything
npm run preview   # serves the built version
```

The finished site is a **single `dist/index.html`** — you can double-click it,
e-mail it, or open it from a USB stick. It works without internet (fonts will
fall back to system ones when offline).

## ✂️ Customize everything (the fun part)

Almost every word lives in one file: **`src/data/config.js`**

| What | Where |
| --- | --- |
| Birthday girl's name | `config.NAME` |
| Hero texts & button | `config.HERO` |
| Sticker cards + their wishes | `config.STICKERS` |
| The big birthday letter | `config.LETTER` |
| Cake wish message | `config.CAKE` |
| Photo gallery captions | `config.GALLERY` |
| The secret gift note | `config.SURPRISE` |
| Music file (optional) | `config.MUSIC.file` |
| Colors & fonts | `src/styles/base.css` (`:root` tokens) |

## 📷 Add your own photos (optional)

1. Drop `.jpg` files into **`public/photos/`**.
2. In `src/data/config.js`, set `image: '/photos/photo-1.jpg'` on any gallery
   entry. Entries with `image: null` keep their cute sticker illustration.

## 🎵 Add your own song (optional)

1. Drop an `.mp3` into **`public/music/`**.
2. Set `config.MUSIC.file = '/music/birthday-song.mp3'`.

No music file? The player automatically plays a soft, built-in music-box
version of Happy Birthday (synthesized with WebAudio). Nothing autoplays —
music only starts when the sticker button is clicked.

## 🗂 Project layout

```
src/
  data/config.js         ← all words, captions, settings
  lib/confetti.js        ← hearts/sparkle/strawberry confetti engine
  lib/musicBox.js        ← music-box melody + celebration chime
  hooks/useReveal.js     ← fade-in on scroll
  components/
    art/Art.jsx          ← every SVG illustration (bunny, berries, cake…)
    Decorations.jsx      ← washi tape, scallop lace, corner stickers
    Hero.jsx             ← opening scrapbook page + envelope surprise
    StickerScrapbook.jsx ← interactive sticker wall
    Letter.jsx           ← the birthday letter
    CakeSection.jsx      ← blow-out-the-candles game
    Gallery.jsx          ← polaroid memory frames
    Gift.jsx             ← the final secret gift
    MusicPlayer.jsx      ← the little music sticker
  styles/
    base.css decorations.css sections.css
```

Made with lots of love, just for Niza. ♡
