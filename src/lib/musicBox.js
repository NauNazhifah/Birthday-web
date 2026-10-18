/* ♪ A tiny music-box built with WebAudio.
 * Plays a soft Happy Birthday loop + a gentle celebration chime.
 * All audio is optional: every entry point is guarded so the site keeps
 * working even when audio is blocked or unavailable.
 */

const NOTE_STEP = 0.42 // seconds per beat — a dreamy, slow waltz-ish tempo

/* Happy Birthday in G, fully written out as [midi, startBeat, lengthBeats] */
const MELODY = [
  [62, 0, 0.66], [62, 1, 0.34], [64, 2, 1], [62, 3, 1], [67, 4, 1], [66, 5, 2],
  [62, 8, 0.66], [62, 9, 0.34], [64, 10, 1], [62, 11, 1], [69, 12, 1], [67, 13, 2],
  [62, 15, 0.66], [62, 16, 0.34], [74, 17, 1], [71, 18, 1], [67, 19, 1], [66, 20, 1], [64, 21, 2],
  [72, 23, 0.66], [72, 24, 0.34], [71, 25, 1], [67, 26, 1], [69, 27, 1], [67, 28, 2],
]
const LOOP_BEATS = 32
const LOOKAHEAD = 1.1

const midiToFreq = (m) => 440 * Math.pow(2, (m - 69) / 12)

export class MusicBox {
  constructor() {
    this.ctx = null
    this.playing = false
    this.timer = null
    this.volume = 0.5
    this.delay = null
    this.i = 0
    this.loopStart = 0
  }

  _ensureContext() {
    if (this.ctx) return true
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext
      if (!Ctx) return false
      this.ctx = new Ctx()
      // a whisper of delay for that dreamy scrapbook feel
      this.delay = this.ctx.createDelay(0.6)
      this.delay.delayTime.value = 0.27
      const feedback = this.ctx.createGain()
      feedback.gain.value = 0.22
      const wet = this.ctx.createGain()
      wet.gain.value = 0.16
      this.delay.connect(feedback)
      feedback.connect(this.delay)
      this.delay.connect(wet)
      wet.connect(this.ctx.destination)
      return true
    } catch {
      this.ctx = null
      return false
    }
  }

  _voice(freq, when, dur) {
    if (!this.ctx) return
    const out = this.ctx.createGain()
    out.gain.value = this.volume * 0.16
    out.connect(this.ctx.destination)
    out.connect(this.delay)

    const partials = [
      { type: 'sine', mult: 2, gain: 0.9 }, // music-box tine, up an octave
      { type: 'triangle', mult: 4, gain: 0.16 },
      { type: 'sine', mult: 6, gain: 0.08 },
    ]
    const stopAt = when + Math.max(dur * NOTE_STEP + 1.2, 1.4)
    for (const p of partials) {
      const osc = this.ctx.createOscillator()
      const g = this.ctx.createGain()
      osc.type = p.type
      osc.frequency.value = freq * p.mult
      g.gain.setValueAtTime(0.0001, when)
      g.gain.exponentialRampToValueAtTime(out.gain.value * p.gain, when + 0.012)
      g.gain.exponentialRampToValueAtTime(0.0001, stopAt)
      osc.connect(g)
      g.connect(out)
      osc.start(when)
      osc.stop(stopAt + 0.05)
    }
  }

  _scheduleAhead() {
    if (!this.playing || !this.ctx || this.ctx.state !== 'running') return
    const now = this.ctx.currentTime
    while (
      this.i < MELODY.length &&
      this.loopStart + MELODY[this.i][1] * NOTE_STEP < now + LOOKAHEAD
    ) {
      const [midi, start, len] = MELODY[this.i]
      this._voice(midiToFreq(midi), this.loopStart + start * NOTE_STEP, len)
      this.i += 1
      if (this.i >= MELODY.length) {
        this.i = 0
        this.loopStart += LOOP_BEATS * NOTE_STEP
      }
    }
  }

  _startTicker() {
    this.timer = setInterval(() => this._scheduleAhead(), 90)
  }

  _startSynth() {
    if (!this._ensureContext()) return false
    this.ctx.resume().catch(() => {})
    this.playing = true
    this.i = 0
    this.loopStart = this.ctx.currentTime + 0.15
    this._scheduleAhead()
    if (!this.timer) this._startTicker()
    return true
  }

  _stopSynth() {
    this.playing = false
    if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {})
  }

  /* The only public method — returns true if synth music started. */
  startSynth() {
    try {
      return this._startSynth()
    } catch {
      return false
    }
  }

  stopSynth() {
    try {
      this._stopSynth()
    } catch {
      /* silently fine */
    }
  }

  /** Soft ascending sparkle — safe to call only after a user gesture. */
  chime() {
    try {
      if (!this._ensureContext()) return
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {})
      const base = this.ctx.currentTime + 0.02
      ;[76, 81, 83, 88].forEach((midi, i) => {
        this._voice(midiToFreq(midi), base + i * 0.11, 0.5)
      })
    } catch {
      /* ignore */
    }
  }
}
