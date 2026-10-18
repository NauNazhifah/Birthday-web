/* ♡ Niza's pink strawberry scrapbook — assembled page by page. */
import Hero from './components/Hero.jsx'
import StickerScrapbook from './components/StickerScrapbook.jsx'
import Letter from './components/Letter.jsx'
import CakeSection from './components/CakeSection.jsx'
import Gallery from './components/Gallery.jsx'
import Gift from './components/Gift.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import Footer from './components/Footer.jsx'
import { PaperBackground, DividerOrnament } from './components/Decorations.jsx'

export default function App() {
  return (
    <div className="pink-book">
      <PaperBackground />
      <a className="skip-link" href="#stickers">langsung ke bagian serunya ya, si ulang tahun ♡</a>

      <main className="book-content">
        <Hero />
        <DividerOrnament left="🍓" right="♡" />
        <StickerScrapbook />
        <DividerOrnament left="❀" right="🍓" />
        <Letter />
        <DividerOrnament left="♡" right="🍒" />
        <CakeSection />
        <DividerOrnament left="🎀" right="♡" />
        <Gallery />
        <DividerOrnament left="🍓" right="✦" />
        <Gift />
      </main>

      <Footer />
      <MusicPlayer />
    </div>
  )
}
