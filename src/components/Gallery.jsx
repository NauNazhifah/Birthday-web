/* Interactive sticker collection — the old photo polaroids are now four
 * scrapbook album cards. Every sticker is a real, operable button that pops
 * a tiny Indonesian love note (keyboard + screen-reader friendly), with a
 * found-counter, an all-found confetti surprise and a reset — no photos.
 * All art is local SVG (see components/art/Art.jsx). */
import { useCallback, useEffect, useRef, useState } from 'react'
import { STICKER_ALBUM } from '../data/config.js'
import {
  Blossom,
  Bow,
  Bunny,
  CakeSlice,
  Candy,
  Cupcake,
  Envelope,
  Flower,
  Heart,
  Locket,
  Strawberry,
} from './art/Art.jsx'
import useReveal from '../hooks/useReveal.js'
import { burstConfetti, rainConfetti, sparklePop } from '../lib/confetti.js'
import { CornerStickers, SectionHead, Washi } from './Decorations.jsx'

const ART = {
  bunny: (props) => <Bunny {...props} />,
  strawberry: (props) => <Strawberry face {...props} />,
  cake: (props) => <CakeSlice {...props} />,
  flower: (props) => <Flower {...props} />,
  bow: (props) => <Bow {...props} />,
  heart: (props) => <Heart {...props} />,
  blossom: (props) => <Blossom {...props} />,
  cupcake: (props) => <Cupcake {...props} />,
  candy: (props) => <Candy {...props} />,
  envelope: (props) => <Envelope {...props} />,
  locket: (props) => <Locket {...props} />,
}

const TILTS = [-3.5, 2.5, -2, 3.5]
const STICKER_TILTS = [-8, 6, -5]
const POP_MS = 520
const NOTE_MS = 2100

const allStickers = STICKER_ALBUM.collections.flatMap((c) => c.stickers)
const TOTAL = allStickers.length

/* Which confetti emoji best matches the sticker art. */
const burstKindOf = (art) =>
  ({ strawberry: 'strawberry', heart: 'heart', bow: 'bow' }[art] ?? 'sparkle')

function StickerButton({ sticker, index, found, popId, noteId, onActivate }) {
  const isFound = found.has(sticker.id)
  const isNote = noteId === sticker.id
  return (
    <div className={`sticker-slot ${isNote ? 'has-note' : ''}`}>
      <button
        type="button"
        className={`sheet-sticker ${isFound ? 'is-found' : ''} ${popId === sticker.id ? 'is-pop' : ''}`}
        style={{ '--stilt': `${STICKER_TILTS[index % STICKER_TILTS.length]}deg` }}
        aria-pressed={isFound}
        aria-label={`${sticker.label} — ketuk untuk menampilkan pesan kecilnya`}
        onClick={(e) => onActivate(sticker, e.currentTarget)}
      >
        <span className="sheet-sticker-art">{ART[sticker.art]({ size: 44, decorative: true })}</span>
        {isFound && <span className="found-dot" aria-hidden="true">♡</span>}
      </button>
      {isNote && (
        <span className="sheet-bubble" aria-hidden="true">
          {sticker.message}
        </span>
      )}
    </div>
  )
}

export default function Gallery() {
  const [ref, visible] = useReveal(0.1)
  const [found, setFound] = useState(() => new Set())
  const [popId, setPopId] = useState(null)
  const [noteId, setNoteId] = useState(null)
  const popTimer = useRef(null)
  const noteTimer = useRef(null)
  const cheerTimer = useRef(null)
  const celebrated = useRef(false)

  const done = found.size === TOTAL

  /* Tidy every timer when the section unmounts. */
  useEffect(
    () => () => {
      window.clearTimeout(popTimer.current)
      window.clearTimeout(noteTimer.current)
      window.clearTimeout(cheerTimer.current)
    },
    []
  )

  /* All twelve found → pink confetti surprise, exactly once per run. */
  useEffect(() => {
    if (done && !celebrated.current) {
      celebrated.current = true
      rainConfetti(1800, ['heart', 'bow', 'sparkle', 'strawberry'])
      cheerTimer.current = window.setTimeout(
        () => burstConfetti({ count: 26, kinds: ['heart', 'sparkle', 'bow'] }),
        600
      )
    }
    if (!done) celebrated.current = false
  }, [done])

  const activate = useCallback((sticker, el) => {
    setPopId(sticker.id)
    setNoteId(sticker.id)
    window.clearTimeout(popTimer.current)
    popTimer.current = window.setTimeout(() => setPopId(null), POP_MS)
    window.clearTimeout(noteTimer.current)
    noteTimer.current = window.setTimeout(() => setNoteId(null), NOTE_MS)
    sparklePop(el, burstKindOf(sticker.art))
    setFound((prev) => {
      if (prev.has(sticker.id)) return prev
      const next = new Set(prev)
      next.add(sticker.id)
      return next
    })
  }, [])

  const reset = () => {
    window.clearTimeout(popTimer.current)
    window.clearTimeout(noteTimer.current)
    setFound(new Set())
    setPopId(null)
    setNoteId(null)
  }

  const counterText = STICKER_ALBUM.counter
    .replace('{found}', String(found.size))
    .replace('{total}', String(TOTAL))
  const noteMessage = allStickers.find((s) => s.id === noteId)?.message ?? ''

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <CornerStickers variant="gallery" />
      <SectionHead id="gallery-title" title={STICKER_ALBUM.title} subtitle={STICKER_ALBUM.subtitle} />
      <div ref={ref} className={`polaroid-scene reveal ${visible ? 'in' : ''}`}>
        {STICKER_ALBUM.collections.map((collection, i) => (
          <figure
            key={collection.name}
            className="polaroid"
            style={{ '--tilt': `${TILTS[i % TILTS.length]}deg` }}
          >
            <Washi kind={i % 2 ? 'rose' : 'gingham'} className="po-tape" />
            <div className="po-img sticker-playground">
              {collection.stickers.map((sticker, j) => (
                <StickerButton
                  key={sticker.id}
                  sticker={sticker}
                  index={j}
                  found={found}
                  popId={popId}
                  noteId={noteId}
                  onActivate={activate}
                />
              ))}
            </div>
            <figcaption className="po-caption">
              <span className="po-caption-name">{collection.name}</span>
              <span className="po-caption-sub">{collection.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="album-bar">
        <span className="album-counter" aria-live="polite">{counterText}</span>
        <span className="album-progress" aria-hidden="true">
          {Array.from({ length: TOTAL }, (_, i) => (
            <i key={i} className={i < found.size ? 'on' : ''} />
          ))}
        </span>
        <button type="button" className="album-reset" onClick={reset} disabled={found.size === 0}>
          {STICKER_ALBUM.reset}
        </button>
      </div>

      {done && (
        <p className="album-complete" role="status">
          <span aria-hidden="true">✧ </span>
          {STICKER_ALBUM.complete}
          <span aria-hidden="true"> ✧</span>
        </p>
      )}

      {/* Same message, announced politely for screen readers */}
      <p className="visually-hidden" aria-live="polite">{noteMessage}</p>
      <p className="gallery-hint">{STICKER_ALBUM.hint}</p>
    </section>
  )
}
