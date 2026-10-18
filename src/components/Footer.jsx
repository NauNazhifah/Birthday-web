/* Sweet little end-of-book footer. */
import { FOOTER, NAME } from '../data/config.js'
import { Heart, Sparkle, Strawberry } from './art/Art.jsx'
import { CornerStickers } from './Decorations.jsx'

export default function Footer() {
  return (
    <footer className="footer-section">
      <CornerStickers variant="footer" />
      <div className="footer-card">
        <Strawberry size={54} decorative className="footer-berry" />
        <Sparkle size={20} decorative className="footer-sp s1" />
        <Sparkle size={16} decorative className="footer-sp s2" />
        <p className="footer-line">{FOOTER.line}</p>
        <p className="footer-small">{FOOTER.small}</p>
        <p className="footer-hearts" aria-hidden="true">
          <Heart size={14} decorative />
          <Heart size={18} color="#C92336" decorative />
          <Heart size={14} decorative />
        </p>
      </div>
    </footer>
  )
}
