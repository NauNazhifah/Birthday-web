/* The digital strawberry cake — each candle is a real button the user
 * can tap out, or one button blows them all. Reduced-motion friendly,
 * works with audio blocked. */
import { useEffect, useRef, useState } from 'react'
import { CAKE } from '../data/config.js'
import { CakeArt, Heart, Sparkle } from './art/Art.jsx'
import useReveal from '../hooks/useReveal.js'
import { burstConfetti, floatHearts, sparklePop } from '../lib/confetti.js'
import { CornerStickers, SectionHead } from './Decorations.jsx'

/* Percent of the CAKE width (the .candles box tracks .cake-art exactly),
 * not the stage — keeps all three planted on the top tier's surface:
 * svg x 120 / 160 / 200, symmetric ±40 units around the tier center. */
const CANDLE_X = [37.5, 50, 62.5]

export default function CakeSection() {
  const [ref, visible] = useReveal()
  const [lit, setLit] = useState([true, true, true])
  const [wished, setWished] = useState(false)
  const litRef = useRef(lit)
  const wishedRef = useRef(false)
  const stageRef = useRef(null)

  useEffect(() => {
    litRef.current = lit
  }, [lit])

  const candleClick = (i) => (ev) => {
    if (litRef.current[i] !== false) {
      setLit((prev) => prev.map((isLit, idx) => (idx === i ? false : isLit)))
      sparklePop(ev.currentTarget, 'sparkle')
    }
  }

  const blowAll = () => {
    litRef.current.forEach((isLit, i) => {
      if (!isLit) return
      window.setTimeout(() => {
        setLit((cur) => cur.map((v, idx) => (idx === i ? false : v)))
      }, i * 260)
    })
  }

  const relight = () => {
    setLit([true, true, true])
    wishedRef.current = false
    setWished(false)
  }

  useEffect(() => {
    if (lit.every((v) => !v) && !wishedRef.current) {
      wishedRef.current = true
      setWished(true)
      burstConfetti({ count: 24, kinds: ['heart', 'sparkle', 'bow'], x: 50, y: 48 })
      floatHearts(stageRef.current, 12)
    }
  }, [lit])

  const allOut = lit.every((v) => !v)

  return (
    <section className="cake-section" aria-labelledby="cake-title">
      <CornerStickers variant="cake" />
      <SectionHead id="cake-title" title={CAKE.title} subtitle={CAKE.hint} />
      <div ref={ref} className={`cake-frame reveal ${visible ? 'in' : ''}`}>
        <div className="cake-stage" ref={stageRef}>
          <Sparkle size={26} decorative className="cake-sp s1" />
          <Sparkle size={18} decorative className="cake-sp s2" />
          <Sparkle size={22} decorative className="cake-sp s3" />
          <span className="cake-hearts" aria-hidden="true">
            <Heart size={20} decorative className="ch c1" />
            <Heart size={16} decorative className="ch c2" />
            <Heart size={18} decorative className="ch c3" />
          </span>

          <CakeArt decorative className="cake-art" />

          <div className="candles" role="group" aria-label="Lilin ulang tahun — ketuk untuk meniupnya">
            {CANDLE_X.map((x, i) => (
              <button
                key={i}
                type="button"
                className={`candle ${lit[i] ? 'is-lit' : 'is-out'}`}
                style={{ left: `${x}%` }}
                onClick={candleClick(i)}
                aria-pressed={!lit[i]}
                aria-label={lit[i] ? `Tiup lilin nomor ${i + 1}` : `Lilin nomor ${i + 1} sudah padam`}
              >
                <span className="candle-flame" aria-hidden="true" />
                <span className="candle-glow" aria-hidden="true" />
                <span className="candle-stick" aria-hidden="true" />
                <span className="candle-smoke" aria-hidden="true" />
              </button>
            ))}
          </div>

          <p className={`cake-wish ${wished ? 'show' : ''}`} aria-live="polite">
            {CAKE.wish}
          </p>
        </div>

        <div className="cake-controls">
          <button
            type="button"
            className={`btn ${allOut ? 'btn--ghost' : 'btn--red'}`}
            onClick={allOut ? relight : blowAll}
          >
            {allOut ? CAKE.buttonAgain : CAKE.button}
          </button>
        </div>
      </div>
    </section>
  )
}
