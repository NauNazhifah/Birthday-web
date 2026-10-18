/* The hidden surprise — a pink gift box with a big cherry-red ribbon
 * that opens with a burst of love. */
import { useRef, useState } from 'react'
import { SURPRISE, NAME } from '../data/config.js'
import { Bow, Heart, Sparkle } from './art/Art.jsx'
import useReveal from '../hooks/useReveal.js'
import { burstConfetti, rainConfetti, floatHearts } from '../lib/confetti.js'
import { CornerStickers, SectionHead } from './Decorations.jsx'

export default function Gift() {
  const [ref, visible] = useReveal(0.15)
  const [open, setOpen] = useState(false)
  const stageRef = useRef(null)

  const openGift = (ev) => {
    ev.currentTarget?.blur?.()
    if (open) {
      burstConfetti({ count: 18, kinds: ['heart', 'sparkle', 'strawberry'] })
      return
    }
    setOpen(true)
    rainConfetti(1600)
    window.setTimeout(() => floatHearts(stageRef.current, 10), 350)
  }

  return (
    <section className="gift-section" aria-labelledby="gift-title">
      <CornerStickers variant="gift" />
      <div ref={ref} className={`reveal ${visible ? 'in' : ''}`}>
        <SectionHead id="gift-title" title={SURPRISE.title} subtitle={SURPRISE.hint} />
        <div className={`gift-scene ${open ? 'open' : ''}`} ref={stageRef}>
          <span className="gift-tag" aria-hidden="true">untuk {NAME.toLowerCase()} ♡</span>

          <button
            type="button"
            className="gift"
            onClick={openGift}
            aria-expanded={open}
            aria-label={open ? 'Hadiah rahasia sudah terbuka' : 'Buka hadiah rahasiamu'}
          >
            <span className="gift-glow" aria-hidden="true" />
            <Sparkle size={22} decorative className="gift-sp s1" />
            <Sparkle size={16} decorative className="gift-sp s2" />
            <span className="gift-lid" aria-hidden="true">
              <Bow size={58} decorative className="gift-bow" />
            </span>
            <span className="gift-box" aria-hidden="true">
              <span className="gift-ribbon-v" />
              <span className="gift-shine" />
            </span>
          </button>

          <div className="secret-note" aria-live="polite">
            <span className="secret-note-tape" aria-hidden="true" />
            <Heart size={22} decorative className="secret-note-heart" />
            {SURPRISE.note.split('\n').map((line, i) => (
              <span key={i} className="secret-note-line">
                {line}
              </span>
            ))}
          </div>
        </div>

        <div className="gift-cta">
          <button
            type="button"
            className={`btn ${open ? 'btn--ghost' : 'btn--red'}`}
            onClick={openGift}
            aria-pressed={open}
          >
            {open ? SURPRISE.openedButton : SURPRISE.button}
          </button>
        </div>
      </div>
    </section>
  )
}
