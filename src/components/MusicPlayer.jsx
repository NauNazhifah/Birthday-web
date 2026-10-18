/* A little music sticker, bottom-right corner. Never autoplays.
 * Uses an external song if one is configured AND available,
 * otherwise its own built-in music-box melody. Sound is optional. */
import { useEffect, useRef, useState } from 'react'
import { MUSIC, NAME } from '../data/config.js'
import { MusicNote } from './art/Art.jsx'
import { MusicBox } from '../lib/musicBox.js'
import { setConfettiChime } from '../lib/confetti.js'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [mode, setMode] = useState(null) // 'file' | 'synth' | 'none'
  const [tip, setTip] = useState('ketuk untuk musik ♡')
  const audioRef = useRef(null)
  const boxRef = useRef(null)
  const modeRef = useRef(mode)
  const tipTimer = useRef(null)

  const audioAvailable = async (url) => {
    try {
      const res = await fetch(url, { method: 'HEAD' })
      const type = (res.headers.get('content-type') ?? '').toLowerCase()
      return res.ok && !type.includes('text/html')
    } catch {
      return false
    }
  }

  const flashTip = (text, persistMs = 2600) => {
    setTip(text)
    clearTimeout(tipTimer.current)
    if (persistMs !== null) {
      tipTimer.current = setTimeout(() => {
        setTip(modeRef.current === 'none' ? '' : 'ketuk untuk musik ♡')
        modeRef.current = modeRef.current
      }, persistMs)
    }
  }

  const stopMusic = () => {
    if (audioRef.current) audioRef.current.pause()
    boxRef.current?.stopSynth()
    setPlaying(false)
  }

  const playFile = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(MUSIC.file)
      audioRef.current.loop = true
      audioRef.current.volume = MUSIC.volume ?? 0.5
      audioRef.current.addEventListener('error', () => {
        stopMusic()
        setMode('synth')
        flashTip('lagumu tak bisa diputar — kupakai kotak musik kecilmu ♡')
      })
    }
    try {
      await audioRef.current.play()
      setPlaying(true)
    } catch {
      setMode('synth')
      playSynth()
    }
  }

  const playSynth = () => {
    if (!boxRef.current) boxRef.current = new MusicBox()
    boxRef.current.volume = MUSIC.volume ?? 0.5
    const ok = boxRef.current.startSynth()
    if (ok) {
      setMode('synth')
      setPlaying(true)
      return true
    }
    setMode('none')
    setPlaying(false)
    flashTip('suaranya malu-malu di browser ini — sayangku tetap utuh untukmu ♡', null)
    return false
  }

  const toggle = async () => {
    if (playing) {
      stopMusic()
      return
    }
    let nextMode = modeRef.current
    if (nextMode === null) {
      /* first press: probe for a supplied song file */
      if (MUSIC.file && (await audioAvailable(MUSIC.file))) {
        nextMode = 'file'
      } else if (MUSIC.file) {
        flashTip('file lagumu belum ada — kotak musikku yang bantu dulu ♡')
        nextMode = 'synth'
      } else {
        nextMode = 'synth'
      }
      modeRef.current = nextMode
      setMode(nextMode)
    }
    if (nextMode === 'file') {
      await playFile()
    } else if (nextMode === 'synth') {
      playSynth()
    }
    if (playing === false && modeRef.current !== 'none') {
      flashTip('sedang memainkan melodi kecil ♡')
    }
  }

  /* while music is on, unlock the soft celebration chime */
  useEffect(() => {
    if (playing) {
      setConfettiChime(() => boxRef.current?.chime())
      return () => setConfettiChime(null)
    }
    return undefined
  }, [playing])

  useEffect(
    () => () => {
      audioRef.current?.pause()
      boxRef.current?.stopSynth()
    },
    []
  )

  return (
    <div className="music-player">
      <span className={`music-tip ${tip ? 'show' : ''}`} aria-hidden="true">{tip}</span>
      <span className="visually-hidden" aria-live="polite">
        {mode === 'none'
          ? 'Musik tidak tersedia di browser ini'
          : playing
            ? 'Musik sedang diputar'
            : 'Musik dimatikan'}
      </span>
      <button
        type="button"
        className={`music-btn ${playing ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? 'Jeda musik ulang tahun' : 'Putar musik ulang tahun yang lembut'}
      >
        <MusicNote size={30} decorative className="music-btn-note" />
        <span className={`music-notes ${playing ? 'float' : ''}`} aria-hidden="true">
          <i style={{ '--i': 0, '--dx': '-26px', '--dy': '-44px' }}>♪</i>
          <i style={{ '--i': 1, '--dx': '22px', '--dy': '-58px' }}>♫</i>
          <i style={{ '--i': 2, '--dx': '-4px', '--dy': '-72px' }}>♪</i>
        </span>
      </button>
    </div>
  )
}
