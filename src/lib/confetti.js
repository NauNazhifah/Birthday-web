/* Tiny DOM confetti engine — hearts, sparkles, strawberries, bows.
 * Lightweight: text-based particles, CSS keyframes, auto-cleanup.
 * Respects prefers-reduced-motion (few particles, gentle fades).
 */

const LAYER_ID = 'niza-confetti-layer'

const KINDS = {
  heart: '♡',
  strawberry: '🍓',
  sparkle: '✧',
  bow: '🎀',
  flower: '❀',
  cherry: '🍒',
  star: '✦',
}

/* Celebrations can optionally play a soft chime if the music player
 * has been unlocked by the user (see MusicPlayer). */
export const confettiAudio = { chime: null }
export function setConfettiChime(fn) {
  confettiAudio.chime = typeof fn === 'function' ? fn : null
}

function reducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function ensureLayer() {
  let layer = document.getElementById(LAYER_ID)
  if (!layer) {
    layer = document.createElement('div')
    layer.id = LAYER_ID
    layer.setAttribute('aria-hidden', 'true')
    document.body.appendChild(layer)
  }
  return layer
}

function spawn(layer, { x, y, dx, dy, kind, size, dur, rot }) {
  const piece = document.createElement('span')
  piece.className = 'confetti-piece'
  piece.textContent = KINDS[kind] || '♡'
  piece.style.left = `${x}%`
  piece.style.top = y == null ? '-6%' : `${y}%`
  piece.style.fontSize = `${size}px`
  piece.style.setProperty('--dx', `${dx}px`)
  piece.style.setProperty('--dy', `${dy}px`)
  piece.style.setProperty('--rot', `${rot}deg`)
  piece.style.setProperty('--dur', `${dur}ms`)
  piece.addEventListener('animationend', () => piece.remove(), { once: true })
  layer.appendChild(piece)
}

function r(min, max) {
  return min + Math.random() * (max - min)
}

function pick(pool) {
  return pool[Math.floor(Math.random() * pool.length)]
}

/** One burst from a point on the page (defaults to center). */
export function burstConfetti({
  count = 22,
  kinds = ['heart', 'sparkle', 'bow'],
  x = 50,
  y = 60,
  spread = 300,
} = {}) {
  if (typeof document === 'undefined') return
  const layer = ensureLayer()
  if (confettiAudio.chime) {
    try { confettiAudio.chime() } catch { /* audio is a bonus, never a requirement */ }
  }
  const n = reducedMotion() ? Math.min(6, count) : count
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i) / n + r(-0.4, 0.4)
    const dist = reducedMotion() ? r(20, 60) : r(spread * 0.4, spread)
    spawn(layer, {
      x: x + r(-2, 2),
      y: y + r(-2, 2),
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * dist * 0.75 + r(60, 170),
      kind: pick(kinds),
      size: r(15, 28),
      dur: r(900, 1500),
      rot: r(-360, 360),
    })
  }
}

/** Gentle rain from the top of the screen for `durationMs`. */
export function rainConfetti(durationMs = 2400, kinds = ['heart', 'strawberry', 'sparkle', 'bow']) {
  if (typeof document === 'undefined') return
  const layer = ensureLayer()
  if (confettiAudio.chime) {
    try { confettiAudio.chime() } catch { /* ignore */ }
  }
  const n = reducedMotion() ? 8 : 46
  const step = durationMs / n
  let i = 0
  const timer = setInterval(() => {
    if (i++ > n) {
      clearInterval(timer)
      return
    }
    spawn(layer, {
      x: r(2, 98),
      y: -4,
      dx: r(-60, 60),
      dy: r(360, 620),
      kind: pick(kinds),
      size: r(14, 26),
      dur: r(1300, 2200),
      rot: r(-240, 240),
    })
  }, step)
}

/* Small sparkle pop used when a sticker is tapped. */
export function sparklePop(originEl, kind = 'sparkle') {
  if (!originEl || typeof document === 'undefined') return
  const rect = originEl.getBoundingClientRect()
  burstConfetti({
    count: 10,
    kinds: [kind, 'sparkle'],
    x: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
    y: ((rect.top + rect.height / 2) / window.innerHeight) * 100,
    spread: 150,
  })
}

/* Floating little hearts that rise out of a container (cake wish, gift).
 * Pure DOM + one shared keyframe, auto-removed. */
export function floatHearts(container, count = 10) {
  if (!container || typeof document === 'undefined') return
  const n = reducedMotion() ? 3 : count
  for (let i = 0; i < n; i += 1) {
    const span = document.createElement('span')
    span.className = 'float-bit'
    span.textContent = Math.random() > 0.6 ? '🍓' : Math.random() > 0.4 ? '♡' : '✧'
    span.style.left = `${r(5, 95)}%`
    span.style.bottom = `${r(0, 12)}%`
    span.style.fontSize = `${r(14, 24)}px`
    span.style.setProperty('--rot', `${r(-50, 50)}deg`)
    span.style.setProperty('--rise', `${r(90, 190)}px`)
    span.style.animationDelay = `${r(0, 500)}ms`
    span.addEventListener('animationend', () => span.remove(), { once: true })
    container.appendChild(span)
  }
}
