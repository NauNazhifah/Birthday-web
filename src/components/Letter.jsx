/* The birthday letter — cream torn-paper card revealed as it scrolls
 * into view, like a letter sliding out of an envelope. */
import { LETTER } from '../data/config.js'
import { Bow, Heart, TornEdge, Sparkle } from './art/Art.jsx'
import useReveal from '../hooks/useReveal.js'
import { CornerStickers, Washi } from './Decorations.jsx'

export default function Letter() {
  const [ref, visible] = useReveal(0.18)
  const lines = LETTER.signature.split('\n')

  return (
    <section className="letter-section" aria-labelledby="letter-title">
      <CornerStickers variant="letter" />
      <div
        ref={ref}
        className={`letter-shell reveal ${visible ? 'in' : ''}`}
      >
        <TornEdge decorative width={740} className="letter-torn letter-torn--top" />
        <div className="letter-card">
          <Washi kind="straw" className="letter-tape lt-l" />
          <Washi kind="gingham" className="letter-tape lt-r" />
          <Bow size={54} decorative className="letter-bow" />
          <Sparkle size={22} decorative className="letter-sp s1" />
          <Sparkle size={16} decorative className="letter-sp s2" />
          <span className="letter-seal"><Heart size={26} color="#C92336" decorative /></span>

          <h2 id="letter-title" className="letter-title">{LETTER.title}</h2>
          <div className="letter-body">
            {LETTER.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <p className="letter-signature">
            {lines.map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
          <p className="letter-postscript">{LETTER.postscript}</p>
        </div>
        <TornEdge decorative width={740} flip className="letter-torn letter-torn--bottom" />
      </div>
    </section>
  )
}
