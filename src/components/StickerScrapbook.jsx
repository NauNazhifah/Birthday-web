/* Interactive sticker wall — every sticker is a real, operable button
 * that pops a tiny wish (keyboard + screen-reader friendly). */
import { useState } from 'react'
import { STICKERS, STICKERS_SECTION } from '../data/config.js'
import { Strawberry, Bunny, CakeSlice, Cherry, Bow, Flower, Sparkle } from './art/Art.jsx'
import useReveal from '../hooks/useReveal.js'
import { sparklePop } from '../lib/confetti.js'
import { CornerStickers, SectionHead, Washi } from './Decorations.jsx'

const ART = {
  strawberry: (props) => <Strawberry face {...props} />,
  bunny: (props) => <Bunny {...props} />,
  cake: (props) => <CakeSlice {...props} />,
  cherry: (props) => <Cherry {...props} />,
  bow: (props) => <Bow {...props} />,
  flower: (props) => <Flower {...props} />,
}

const TILTS = [-7, 5, -4, 8, -6, 4, -9]

/* The vintage manga panel card — CSS collage art, not an image. */
function MangaCard({ tilt }) {
  return (
    <div
      className="manga-card"
      style={{ '--tilt': `${tilt}deg` }}
      role="img"
      aria-label="Stiker panel manga bergaya lama, bertulisan: sweet, like you"
    >
      <span className="manga-panel-a" aria-hidden="true" />
      <span className="manga-panel-b" aria-hidden="true" />
      <span className="manga-burst" aria-hidden="true">✦</span>
      <span className="manga-script" aria-hidden="true">Sweet,</span>
      <span className="manga-side" aria-hidden="true">like you ♡</span>
      <span className="manga-strip" aria-hidden="true">✧ ✧ ✧</span>
    </div>
  )
}

function StickerCard({ sticker, index, active, onToggle }) {
  const tilt = TILTS[index % TILTS.length]
  const isOn = active === sticker.art

  return (
    <div className={`sticker-wrap sticker-wrap--${sticker.art} ${isOn ? 'is-active' : ''}`}>
      <button
        type="button"
        className={`sticker is${isOn ? '' : '-not'}-pressed`}
        style={{ '--tilt': `${tilt}deg` }}
        aria-expanded={isOn}
        aria-label={`${sticker.label} — baca permohonan kecilnya`}
        onClick={(e) => onToggle(sticker, e.currentTarget)}
      >
        <Washi kind="rose" className="sticker-tape" />
        {sticker.art === 'manga' ? (
          <MangaCard tilt={tilt} />
        ) : (
          <span className="sticker-art">{ART[sticker.art]({ size: 92, decorative: true })}</span>
        )}
        <span className="sticker-label">{sticker.label.replace(/ (sticker|card)$/, '')}</span>
      </button>

      {isOn && (
        <span className="sticker-note">
          <span className="sticker-note-tape" aria-hidden="true" />
          {sticker.message}
        </span>
      )}
    </div>
  )
}

export default function StickerScrapbook() {
  const [active, setActive] = useState(null)
  const [ref, visible] = useReveal()

  const onToggle = (sticker, el) => {
    if (active !== sticker.art) sparklePop(el, sticker.art === 'strawberry' ? 'strawberry' : 'sparkle')
    setActive(active === sticker.art ? null : sticker.art)
  }

  const activeMessage = STICKERS.find((s) => s.art === active)?.message ?? ''

  return (
    <section
      id="stickers"
      ref={ref}
      className={`sticker-section reveal ${visible ? 'in' : ''}`}
      aria-labelledby="stickers-title"
    >
      <CornerStickers variant="stickers" />
      <SectionHead id="stickers-title" title={STICKERS_SECTION.title} subtitle={STICKERS_SECTION.subtitle} />
      <div className="sticker-grid">
        {STICKERS.map((sticker, i) => (
          <StickerCard
            key={sticker.art}
            sticker={sticker}
            index={i}
            active={active}
            onToggle={onToggle}
          />
        ))}
      </div>
      {/* A friendly summary for screen readers */}
      <p className="visually-hidden" aria-live="polite">{activeMessage}</p>
    </section>
  )
}
