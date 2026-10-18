/* Reusable scrapbook decorations: washi tape, lace, section headings,
 * corner sticker clusters, background paper layers.
 */
import { Strawberry, Bunny, Cherry, Bow, Flower, Heart, Sparkle, CakeSlice, MusicNote } from './art/Art.jsx'

export function Washi({ kind = 'rose', className = '', style }) {
  return <div className={`washi washi--${kind} ${className}`} style={style} aria-hidden="true" />
}

export function LaceEdge({ position = 'top' }) {
  return <div className={`lace-edge lace-edge--${position}`} aria-hidden="true" />
}

/* Fancy reusable section heading with little sparkles. */
export function SectionHead({ id, title, subtitle, className = '' }) {
  return (
    <div className={`section-head ${className}`}>
      <Sparkle size={26} decorative className="section-head-star is-left" />
      <h2 id={id} className="section-title">{title}</h2>
      <Sparkle size={26} decorative className="section-head-star is-right" />
      {subtitle ? <p className="section-sub">{subtitle}</p> : null}
    </div>
  )
}

/* The blush scrapbook sky behind everything. */
export function PaperBackground() {
  return (
    <div className="paper-bg" aria-hidden="true">
      <div className="paper-bg__wash" />
      <div className="paper-bg__dots" />
      <div className="paper-bg__straw paper-bg__straw--a" />
      <div className="paper-bg__straw paper-bg__straw--b" />
      <div className="paper-bg__gingham paper-bg__gingham--a" />
      <div className="paper-bg__gingham paper-bg__gingham--b" />
      <div className="paper-bg__grain" />
    </div>
  )
}

/* Corner sticker clusters per section. Keys choose a decorative scatter preset. */
const SETS = {
  stickers: [
    { Art: Strawberry, size: 92, style: { top: '2%', left: '-3%' }, rotate: -16, hide: 'never' },
    { Art: Bow, size: 74, style: { top: '4%', right: '2%' }, rotate: 12, hide: 'tablet' },
    { Art: Cherry, size: 78, style: { bottom: '2%', left: '0%' }, rotate: -10, hide: 'mobile' },
    { Art: Heart, size: 34, style: { top: '24%', right: '-1.5%' }, rotate: 18, hide: 'never', colorKey: 'heart' },
    { Art: MusicNote, size: 30, style: { bottom: '26%', right: '3%' }, rotate: -12, hide: 'tablet' },
  ],
  letter: [
    { Art: Cherry, size: 66, style: { top: '6%', right: '-2%' }, rotate: 14, hide: 'tablet' },
    { Art: Flower, size: 60, style: { bottom: '4%', left: '-1.5%' }, rotate: -14, hide: 'tablet' },
    { Art: Sparkle, size: 26, style: { top: '30%', left: '-2%' }, rotate: 10, hide: 'never' },
    { Art: Strawberry, size: 82, style: { bottom: '10%', right: '1%' }, rotate: 12, hide: 'mobile' },
  ],
  cake: [
    { Art: Strawberry, size: 76, style: { top: '6%', left: '-2.5%' }, rotate: -14, hide: 'tablet' },
    { Art: Cherry, size: 62, style: { top: '10%', right: '-1.5%' }, rotate: 16, hide: 'tablet' },
    { Art: Heart, size: 30, style: { bottom: '8%', left: '2%' }, rotate: -14, hide: 'never' },
    { Art: Sparkle, size: 24, style: { bottom: '30%', right: '0%' }, rotate: 0, hide: 'never' },
  ],
  gallery: [
    { Art: Flower, size: 72, style: { top: '2%', left: '1%' }, rotate: -12, hide: 'tablet' },
    { Art: Bunny, size: 86, style: { bottom: '3%', right: '-1%' }, rotate: 10, hide: 'mobile', noFace: true },
    { Art: Sparkle, size: 24, style: { top: '44%', left: '-1%' }, rotate: 8, hide: 'never' },
    { Art: Heart, size: 30, style: { bottom: '34%', right: '0.5%' }, rotate: 14, hide: 'never' },
  ],
  gift: [
    { Art: Bow, size: 84, style: { top: '4%', left: '-2%' }, rotate: -16, hide: 'tablet' },
    { Art: Strawberry, size: 70, style: { top: '12%', right: '-1%' }, rotate: 14, hide: 'tablet' },
    { Art: Sparkle, size: 28, style: { bottom: '26%', left: '1.5%' }, rotate: 0, hide: 'never' },
    { Art: Heart, size: 30, style: { bottom: '10%', right: '2%' }, rotate: 16, hide: 'never' },
  ],
  footer: [
    { Art: Heart, size: 26, style: { top: '-10%', left: '8%' }, rotate: -10, hide: 'mobile' },
    { Art: Sparkle, size: 22, style: { top: '-14%', right: '14%' }, rotate: 0, hide: 'mobile' },
  ],
}

export function CornerStickers({ variant = 'stickers' }) {
  const items = SETS[variant] ?? []
  return (
    <div className={`corner-stickers corner-stickers--${variant}`} aria-hidden="true">
      {items.map(({ Art, size, style, rotate, hide, noFace }, i) => (
        <div
          key={i}
          className={`scatter-item ${hide !== 'never' ? (hide === 'mobile' ? 'hide-mobile' : 'hide-tablet') : ''}`}
          style={{ ...style, '--rot': `${rotate}deg` }}
        >
          {Art === Heart ? (
            <Heart size={size} color="#F3A9C0" decorative />
          ) : Art === Sparkle || Art === MusicNote ? (
            <Art size={size} decorative />
          ) : (
            <Art size={size} decorative face={!noFace} />
          )}
        </div>
      ))}
    </div>
  )
}

/* A tiny ornament row used between sections. */
export function DividerOrnament({ left = '🍓', right = '♡' }) {
  return (
    <div className="divider-ornament" aria-hidden="true">
      <span className="divider-ornament__lace" />
      <span className="divider-ornament__center">
        {left}
        <Heart size={20} decorative />
        {right}
      </span>
      <span className="divider-ornament__lace is-flipped" />
    </div>
  )
}
