/* The opening scrapbook page: layered cards, the bunny, and a real
 * interactive envelope that unfolds a hidden message. */
import { useState } from 'react'
import { HERO } from '../data/config.js'
import { Bunny, Strawberry, Heart, Sparkle, Squiggle, Bow } from './art/Art.jsx'
import { rainConfetti } from '../lib/confetti.js'
import { CornerStickers, Washi, LaceEdge } from './Decorations.jsx'

export default function Hero() {
  const [opened, setOpened] = useState(false)

  const openSurprise = () => {
    if (!opened) {
      setOpened(true)
      rainConfetti(2600)
      window.setTimeout(() => {
        document.getElementById('stickers')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 1100)
    } else {
      document.getElementById('stickers')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <CornerStickers variant="stickers" />
      <Washi kind="gingham" className="page-tape tl" />
      <Washi kind="straw" className="page-tape tr" />
      <Washi kind="rose" className="page-tape bc" />

      <div className="scrap-page">
        <LaceEdge position="top" />
        <Strawberry size={92} decorative className="hero-strawbery" />
        <Sparkle size={30} decorative className="hero-sp s1" />
        <Sparkle size={22} decorative className="hero-sp s2" />
        <Sparkle size={24} decorative className="hero-sp s3" />

        <div className="hero-bunny-wrap">
          <Bunny size={158} decorative className="hero-bunny float-slow" />
          <Heart size={30} decorative className="hero-bunny-heart" />
          <Sparkle size={20} decorative className="hero-bunny-sparkle" />
        </div>

        <p className="hero-eyebrow">
          <Sparkle size={16} decorative />
          <span> {HERO.eyebrow} </span>
          <Sparkle size={16} decorative />
        </p>

        <h1 id="hero-title" className="hero-title">
          {HERO.titleTop}
          <span className="hero-name">
            {HERO.titleName}
            <Squiggle className="hero-name-squiggle" />
          </span>
          <Heart size={36} decorative className="name-heart" />
        </h1>

        <p className="hero-sub">{HERO.subtitle}</p>
        <p className="hero-note">“{HERO.note}”</p>

        <div className={`envelope-wrap ${opened ? 'open' : ''}`}>
          <span className="env-hint" aria-hidden="true">{opened ? '' : HERO.envelopeHint}</span>
          <button
            type="button"
            className="envelope"
            onClick={openSurprise}
            aria-expanded={opened}
            aria-label={
              opened
                ? 'Pesan rahasia sudah terbuka'
                : 'Buka amplop pink yang berisi pesan rahasia'
            }
          >
            <span className="env-letter">
              <span className="env-letter-small">{HERO.secretPrefix}</span>
              <span className="env-letter-text">{HERO.secretMessage}</span>
            </span>
            <span className="env-pocket">
              <span className="env-stripe" />
            </span>
            <span className="env-flap">
              <Bow size={44} decorative className="env-flap-bow" />
            </span>
          </button>
        </div>

        <button type="button" className="btn btn--red hero-btn" onClick={openSurprise} aria-pressed={opened}>
          {opened ? HERO.buttonDone : HERO.button}
        </button>

        <LaceEdge position="bottom" />
      </div>
    </section>
  )
}
