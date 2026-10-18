/* ♡ Every illustration in the scrapbook, drawn with SVG primitives.
 * All art is generated here — no external image assets needed, so nothing
 * can ever break. Pass size / className / style; set decorative when the
 * art is purely ornamental (screen-readers skip it).
 */

const svgProps = (p, aspect = 1) => ({
  width: p.size ?? 120,
  height: p.size ?? 120,
  className: p.className,
  style: p.style,
  viewBox: `0 0 ${200 * aspect} ${200}`,
  focusable: false,
  ...(p.decorative
    ? { 'aria-hidden': true }
    : { role: 'img', 'aria-label': p.label ?? 'ilustrasi scrapbook yang imut' }),
})

const STROKE = '#eec3d0'
const COCOA = '#68464A'

/* ————— Strawberry ————— */
export function Strawberry(p) {
  const seeds = [
    [78, 96], [100, 90], [122, 96], [68, 112], [88, 108], [112, 108], [132, 116],
    [80, 126], [100, 122], [120, 126], [90, 144], [110, 144], [100, 158],
  ]
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <g transform="translate(100 40)">
        <ellipse rx="27" ry="10" fill="#8fae8b" transform="rotate(-30)" />
        <ellipse rx="27" ry="10" fill="#a7c294" transform="rotate(30)" />
        <ellipse rx="24" ry="9" fill="#8fae8b" />
      </g>
      <ellipse cx="100" cy="30" rx="4" ry="10" fill="#7fa176" />
      <path
        d="M100 50 C130 50 152 70 152 100 C152 142 120 168 100 176 C80 168 48 142 48 100 C48 70 70 50 100 50 Z"
        fill="#E95B7B"
        stroke="#d94f6e"
        strokeWidth="2.5"
      />
      <ellipse cx="79" cy="76" rx="17" ry="11" fill="#F9A8C0" opacity="0.75" transform="rotate(-24 79 76)" />
      {seeds.map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="1.9" ry="3.1" fill="#FCE7EC" transform={`rotate(${x - 100 > 0 ? 14 : -14} ${x} ${y})`} />
      ))}
      {p.face && (
        <g>
          <path d="M82 110 q6 -8 13 0" stroke={COCOA} strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <path d="M105 110 q6 -8 13 0" stroke={COCOA} strokeWidth="3.4" fill="none" strokeLinecap="round" />
          <path d="M95 124 q5 6 10 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="74" cy="120" r="6.5" fill="#F9C4D4" opacity="0.85" />
          <circle cx="126" cy="120" r="6.5" fill="#F9C4D4" opacity="0.85" />
        </g>
      )}
    </svg>
  )
}

/* ————— White bunny with a pink bow ————— */
export function Bunny(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <g transform="rotate(-9 82 52)">
        <rect x="70" y="10" width="24" height="80" rx="12" fill="#fff" stroke={STROKE} strokeWidth="3" />
      </g>
      <ellipse cx="82" cy="42" rx="6" ry="18" fill="#FBD9E2" transform="rotate(-9 82 42)" />
      <g transform="rotate(9 118 52)">
        <rect x="106" y="10" width="24" height="80" rx="12" fill="#fff" stroke={STROKE} strokeWidth="3" />
      </g>
      <ellipse cx="118" cy="42" rx="6" ry="18" fill="#FBD9E2" transform="rotate(9 118 42)" />
      <ellipse cx="100" cy="158" rx="44" ry="33" fill="#fff" stroke={STROKE} strokeWidth="3" />
      <circle cx="100" cy="102" r="46" fill="#fff" stroke={STROKE} strokeWidth="3" />
      {/* bow on the left ear */}
      <g>
        <ellipse cx="62" cy="72" rx="15" ry="8.5" fill="#F3A9C0" stroke="#e78fae" strokeWidth="2" transform="rotate(-32 62 72)" />
        <ellipse cx="88" cy="72" rx="15" ry="8.5" fill="#F3A9C0" stroke="#e78fae" strokeWidth="2" transform="rotate(32 88 72)" />
        <circle cx="75" cy="76" r="7" fill="#E0698A" />
      </g>
      <ellipse cx="86" cy="102" rx="4.2" ry="6.2" fill={COCOA} />
      <ellipse cx="114" cy="102" rx="4.2" ry="6.2" fill={COCOA} />
      <path d="M96 116 q4 5 8 0" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="114" r="7" fill="#F9C4D4" opacity="0.85" />
      <circle cx="128" cy="114" r="7" fill="#F9C4D4" opacity="0.85" />
      <ellipse cx="87" cy="184" rx="10" ry="6" fill="#fff" stroke={STROKE} strokeWidth="2.5" />
      <ellipse cx="113" cy="184" rx="10" ry="6" fill="#fff" stroke={STROKE} strokeWidth="2.5" />
    </svg>
  )
}

/* ————— Cherries ————— */
export function Cherry(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <path d="M64 108 C62 74 76 50 106 36" stroke="#7fa176" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M132 92 C132 68 124 50 106 36" stroke="#7fa176" strokeWidth="6" fill="none" strokeLinecap="round" />
      <ellipse cx="110" cy="34" rx="17" ry="8" fill="#8fae8b" transform="rotate(-18 110 34)" />
      <circle cx="62" cy="140" r="33" fill="#C92336" stroke="#b01f30" strokeWidth="2" />
      <circle cx="132" cy="122" r="28" fill="#E95B7B" stroke="#d94f6e" strokeWidth="2" />
      <circle cx="52" cy="130" r="9" fill="#f2a9b8" opacity="0.5" />
      <circle cx="124" cy="113" r="7" fill="#f8c7d2" opacity="0.55" />
      {/* cheeky smiley on the big cherry */}
      <path d="M52 138 q5 -6 10 0" stroke="#7e1b26" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 140 q5 -6 10 0" stroke="#7e1b26" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M61 150 q5 5 10 0" stroke="#7e1b26" strokeWidth="2.6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/* ————— Grosgrain bow / ribbon ————— */
export function Bow(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      {/* tails */}
      <path d="M92 118 L60 178 L88 170 L96 128 Z" fill="#E95B7B" stroke="#d94f6e" strokeWidth="2" />
      <path d="M108 118 L140 178 L112 170 L104 128 Z" fill="#E95B7B" stroke="#d94f6e" strokeWidth="2" />
      {/* loops */}
      <path d="M100 100 C58 58 18 74 22 102 C26 132 66 136 100 116 Z" fill="#D98CA6" stroke="#c37b93" strokeWidth="3" />
      <path d="M100 100 C142 58 182 74 178 102 C174 132 134 136 100 116 Z" fill="#D98CA6" stroke="#c37b93" strokeWidth="3" />
      {/* knot */}
      <rect x="84" y="84" width="32" height="34" rx="10" fill="#D98CA6" stroke="#c37b93" strokeWidth="2.5" />
      <rect x="90" y="82" width="20" height="38" rx="8" fill="#E95B7B" stroke="#d94f6e" strokeWidth="2" />
      <path d="M34 92 C40 84 52 80 62 84" stroke="#fff" strokeWidth="3" fill="none" opacity="0.35" strokeLinecap="round" />
      <path d="M166 92 C160 84 148 80 138 84" stroke="#fff" strokeWidth="3" fill="none" opacity="0.35" strokeLinecap="round" />
    </svg>
  )
}

/* ————— Tulip flower ————— */
export function Flower(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <rect x="96" y="128" width="8" height="52" rx="4" fill="#7fa176" />
      <ellipse cx="78" cy="160" rx="18" ry="7.5" fill="#8fae8b" transform="rotate(-24 78 160)" />
      <ellipse cx="122" cy="164" rx="18" ry="7.5" fill="#a7c294" transform="rotate(24 122 164)" />
      <ellipse cx="76" cy="98" rx="21" ry="36" fill="#EF8FAE" transform="rotate(-16 76 98)" />
      <ellipse cx="124" cy="98" rx="21" ry="36" fill="#EF8FAE" transform="rotate(16 124 98)" />
      <ellipse cx="100" cy="94" rx="27" ry="42" fill="#F7A8C0" />
      <ellipse cx="100" cy="88" rx="16" ry="26" fill="#F9C4D4" opacity="0.9" />
      <path d="M88 96 q5 -7 11 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M102 96 q5 -7 11 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M96 108 q5 5 10 0" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="108" r="5.5" fill="#f786a9" opacity="0.6" />
      <circle cx="120" cy="108" r="5.5" fill="#f786a9" opacity="0.6" />
    </svg>
  )
}

/* ————— Strawberry cake slice ————— */
export function CakeSlice(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <ellipse cx="100" cy="160" rx="64" ry="12" fill="#fff" stroke={STROKE} strokeWidth="2.5" />
      <path d="M100 64 L152 142 L48 142 Z" fill="#E95B7B" stroke="#d94f6e" strokeWidth="2" />
      <path d="M48 142 L152 142 L147 156 L53 156 Z" fill="#FFF7ED" stroke="#f0d9c2" strokeWidth="1.5" />
      <path d="M53 156 L147 156 L140 170 L60 170 Z" fill="#F7C9D5" stroke="#eec3d0" strokeWidth="1.5" />
      {/* strawberry on top */}
      <ellipse cx="100" cy="56" rx="17" ry="15" fill="#E53B61" stroke="#c92336" strokeWidth="2" />
      <ellipse cx="100" cy="42" rx="10" ry="4" fill="#8fae8b" transform="rotate(-4 100 42)" />
      <circle cx="95" cy="56" r="1.6" fill="#fce7ec" />
      <circle cx="104" cy="52" r="1.6" fill="#fce7ec" />
      <circle cx="100" cy="62" r="1.6" fill="#fce7ec" />
      {/* seeds on the berry layer */}
      <circle cx="90" cy="110" r="1.8" fill="#fce7ec" />
      <circle cx="110" cy="110" r="1.8" fill="#fce7ec" />
      <circle cx="100" cy="130" r="1.8" fill="#fce7ec" />
      <path d="M74 148 l4 -6 4 6 z" fill="#C92336" opacity="0.85" />
      <path d="M118 148 l4 -6 4 6 z" fill="#C92336" opacity="0.85" />
    </svg>
  )
}

/* ————— Big celebration cake (candles are separate DOM, so they can be blown out) ————— */
export function CakeArt(p) {
  return (
    <svg {...svgProps(p, 1.6)} viewBox="0 0 320 240">
      <ellipse cx="160" cy="226" rx="118" ry="14" fill="#fff" stroke={STROKE} strokeWidth="2" />
      {/* bottom tier */}
      <rect x="64" y="152" width="192" height="64" rx="18" fill="#F7C9D5" stroke="#eec3d0" strokeWidth="2" />
      <rect x="64" y="148" width="192" height="18" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <circle key={`drip${i}`} cx={76 + i * 28} cy="166" r="12" fill="#fff" />
      ))}
      {/* face on the bottom tier */}
      <path d="M128 194 q6 -8 13 0" stroke={COCOA} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M158 194 q6 -8 13 0" stroke={COCOA} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <path d="M144 206 q5 6 10 0" stroke={COCOA} strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <circle cx="114" cy="200" r="6" fill="#f7b6c2" opacity="0.8" />
      <circle cx="186" cy="200" r="6" fill="#f7b6c2" opacity="0.8" />
      <path d="M92 220 l4 -6 4 6 z" fill="#C92336" opacity="0.9" />
      <path d="M216 220 l4 -6 4 6 z" fill="#C92336" opacity="0.9" />
      {/* top tier */}
      <rect x="98" y="96" width="124" height="58" rx="16" fill="#FCE7EC" stroke="#f2cdd8" strokeWidth="2" />
      <rect x="98" y="92" width="124" height="16" fill="#fff" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={`dripT${i}`} cx={110 + i * 25} cy="108" r="10" fill="#fff" />
      ))}
      <circle cx="112" cy="88" r="7" fill="#E53B61" />
      <circle cx="206" cy="88" r="7" fill="#E53B61" />
      <path d="M112 79 q0 -8 -5 -11" stroke="#7fa176" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M206 79 q0 -8 5 -11" stroke="#7fa176" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* hearts sprinkled */}
      <path d="M140 172 l3 -5 3 5 -3 5 z" fill="#C92336" opacity="0.65" />
      <path d="M170 176 l3 -5 3 5 -3 5 z" fill="#C92336" opacity="0.5" />
      {/* piped cream along base */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <circle key={`pip${i}`} cx={76 + i * 21} cy="216" r="4" fill="#fff" stroke="#f0d9c2" strokeWidth="1" />
      ))}
    </svg>
  )
}

/* ————— White strawberry blossom (five petals + soft yellow heart) ————— */
export function Blossom(p) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <rect x="96" y="118" width="8" height="60" rx="4" fill="#7fa176" />
      <ellipse cx="78" cy="158" rx="17" ry="7" fill="#8fae8b" transform="rotate(-22 78 158)" />
      <ellipse cx="122" cy="162" rx="15" ry="6.5" fill="#a7c294" transform="rotate(24 122 162)" />
      {petals.map((a) => (
        <ellipse
          key={a}
          cx="100"
          cy="64"
          rx="17"
          ry="27"
          fill="#fff"
          stroke="#e9c4cf"
          strokeWidth="2.5"
          transform={`rotate(${a} 100 96)`}
        />
      ))}
      <circle cx="100" cy="96" r="13" fill="#F7D774" stroke="#eec98a" strokeWidth="2" />
      <circle cx="96" cy="92" r="2.2" fill="#fff" opacity="0.85" />
      <circle cx="105" cy="99" r="1.8" fill="#fff" opacity="0.7" />
    </svg>
  )
}

/* ————— Cupcake with a cherry and a little face ————— */
export function Cupcake(p) {
  const pleats = [70, 86, 102, 118, 134]
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      {/* paper cup */}
      <path d="M52 114 L70 180 L130 180 L148 114 Z" fill="#FBD9E2" stroke="#eec3d0" strokeWidth="3" strokeLinejoin="round" />
      {pleats.map((x) => (
        <path
          key={x}
          d={`M${x} 118 L${100 + (x - 100) * 0.82} 176`}
          stroke="#f3a9c0"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      ))}
      {/* frosting swirl */}
      <ellipse cx="100" cy="114" rx="52" ry="15" fill="#F9C4D4" stroke="#f3a9c0" strokeWidth="2.5" />
      <ellipse cx="100" cy="94" rx="40" ry="14" fill="#F9A8C0" stroke="#f3a9c0" strokeWidth="2.5" />
      <ellipse cx="100" cy="76" rx="28" ry="13" fill="#FBC3D4" stroke="#f3a9c0" strokeWidth="2.5" />
      <circle cx="100" cy="63" r="8" fill="#F9C4D4" stroke="#f3a9c0" strokeWidth="2.5" />
      {/* cherry on top */}
      <circle cx="100" cy="44" r="9.5" fill="#C92336" stroke="#b01f30" strokeWidth="2" />
      <path d="M101 35 q2 -9 9 -12" stroke="#7fa176" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="113" cy="27" rx="7" ry="3" fill="#8fae8b" transform="rotate(-24 113 27)" />
      {/* sprinkles */}
      <path d="M74 88 l4 -6 4 6 z" fill="#C92336" opacity="0.8" />
      <circle cx="128" cy="76" r="2.6" fill="#fff" opacity="0.8" />
      <circle cx="66" cy="110" r="2.6" fill="#fff" opacity="0.8" />
      {/* face on the cup */}
      <path d="M86 140 q5 -7 10 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M104 140 q5 -7 10 0" stroke={COCOA} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M95 152 q5 5 10 0" stroke={COCOA} strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="76" cy="148" r="6" fill="#F9C4D4" opacity="0.9" />
      <circle cx="124" cy="148" r="6" fill="#F9C4D4" opacity="0.9" />
    </svg>
  )
}

/* ————— Strawberry candy with twisted wrappers + tiny face ————— */
export function Candy(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      {/* wrappers */}
      <path d="M68 100 L28 70 C20 88 20 112 28 130 Z" fill="#F9C4D4" stroke="#ef8fae" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M132 100 L172 70 C180 88 180 112 172 130 Z" fill="#F9C4D4" stroke="#ef8fae" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M28 70 L20 58 M28 130 L20 142" stroke="#ef8fae" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M172 70 L180 58 M172 130 L180 142" stroke="#ef8fae" strokeWidth="2.5" strokeLinecap="round" />
      {/* body */}
      <ellipse cx="100" cy="100" rx="36" ry="40" fill="#F9A8C0" stroke="#ef8fae" strokeWidth="3" />
      <path d="M84 66 q-12 32 0 68" stroke="#FFF3F6" strokeWidth="7" fill="none" opacity="0.6" strokeLinecap="round" />
      <path d="M116 66 q12 32 0 68" stroke="#FFF3F6" strokeWidth="7" fill="none" opacity="0.6" strokeLinecap="round" />
      <ellipse cx="85" cy="80" rx="7" ry="4.5" fill="#fff" opacity="0.55" transform="rotate(-24 85 80)" />
      {/* face */}
      <path d="M88 100 q4 -6 9 0" stroke={COCOA} strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M104 100 q4 -6 9 0" stroke={COCOA} strokeWidth="2.8" fill="none" strokeLinecap="round" />
      <path d="M96 112 q4 5 8 0" stroke={COCOA} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="79" cy="110" r="5" fill="#FBD9E2" opacity="0.95" />
      <circle cx="121" cy="110" r="5" fill="#FBD9E2" opacity="0.95" />
    </svg>
  )
}

/* ————— Mini love letter — envelope with a heart seal + tiny blossom ————— */
export function Envelope(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      <rect x="36" y="64" width="128" height="86" rx="10" fill="#FFF9F1" stroke="#eec3d0" strokeWidth="3" />
      <path d="M40 70 L100 122 L160 70" fill="#FCE7EC" stroke="#eec3d0" strokeWidth="3" strokeLinejoin="round" />
      {/* heart wax seal */}
      <circle cx="100" cy="103" r="13" fill="#D98CA6" stroke="#c37b93" strokeWidth="2" />
      <path
        d="M100 111 C93 106 91 102 93 99 C95 97 98 98 100 101 C102 98 105 97 107 99 C109 102 107 106 100 111 Z"
        fill="#FFF9F1"
      />
      {/* stamp corner */}
      <rect x="46" y="76" width="20" height="24" rx="3" fill="none" stroke="#D98CA6" strokeWidth="1.6" strokeDasharray="3 3" />
      <path d="M56 93 C52 90 51 87 52.5 85 C54 83.5 56 85 56 87 C56 85 58 83.5 59.5 85 C61 87 60 90 56 93 Z" fill="#D98CA6" opacity="0.7" />
      {/* address lines */}
      <path d="M96 134 h40 M96 142 h28" stroke="#e9c4cf" strokeWidth="2.6" strokeLinecap="round" />
      {/* tiny blossom accent */}
      <g transform="translate(148 136)">
        {[0, 90, 180, 270].map((a) => (
          <ellipse key={a} cx="0" cy="-7" rx="4.5" ry="6" fill="#fff" stroke="#e9c4cf" strokeWidth="1.6" transform={`rotate(${a})`} />
        ))}
        <circle r="3.4" fill="#F7D774" />
      </g>
    </svg>
  )
}

/* ————— Heart locket charm on a chain, with a wee bow ————— */
export function Locket(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 200 200">
      {/* chain */}
      <path d="M28 18 C46 58 70 78 92 86" stroke="#e2a9b8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M172 18 C154 58 130 78 108 86" stroke="#e2a9b8" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="18" r="4" fill="#e2a9b8" />
      <circle cx="172" cy="18" r="4" fill="#e2a9b8" />
      <circle cx="100" cy="90" r="5.5" fill="#e2a9b8" />
      {/* wee bow */}
      <ellipse cx="87" cy="101" rx="11" ry="6" fill="#F3A9C0" stroke="#e78fae" strokeWidth="2" transform="rotate(-30 87 101)" />
      <ellipse cx="113" cy="101" rx="11" ry="6" fill="#F3A9C0" stroke="#e78fae" strokeWidth="2" transform="rotate(30 113 101)" />
      <circle cx="100" cy="102" r="5" fill="#E0698A" />
      {/* heart pendant (reuses the Heart path, scaled up) */}
      <path
        d="M20 35 C7 25 3 15 9 9 C14 4 20 8 20 14 C20 8 26 4 31 9 C37 15 33 25 20 35 Z"
        fill="#E95B7B"
        stroke="#d94f6e"
        strokeWidth="1.6"
        transform="translate(100 142) scale(2.2) translate(-20 -19)"
      />
      <path d="M86 132 q-7 6 -5 15" stroke="#fff" strokeWidth="3" opacity="0.5" fill="none" strokeLinecap="round" />
      <circle cx="115" cy="136" r="2.4" fill="#fff" opacity="0.6" />
    </svg>
  )
}

/* ————— Tiny helpers ————— */
export function Heart(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 40 40">
      <path
        d="M20 35 C7 25 3 15 9 9 C14 4 20 8 20 14 C20 8 26 4 31 9 C37 15 33 25 20 35 Z"
        fill={p.color ?? '#E95B7B'}
        stroke={p.strokeColor ?? '#d94f6e'}
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function Sparkle(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 40 40">
      <path
        d="M20 2 Q22.5 16 38 20 Q22.5 24 20 38 Q17.5 24 2 20 Q17.5 16 20 2 Z"
        fill={p.color ?? '#F7C9D5'}
        stroke={p.strokeColor ?? '#f3a9c0'}
        strokeWidth="1.4"
      />
    </svg>
  )
}

export function MusicNote(p) {
  return (
    <svg {...svgProps(p, 1)} viewBox="0 0 40 40">
      <circle cx="13" cy="29" r="6.5" fill={p.color ?? COCOA} />
      <rect x="17.5" y="6" width="4" height="24" rx="2" fill={p.color ?? COCOA} />
      <path d="M21 6 q11 2 12 11 q-7-5 -12-4 Z" fill={p.color ?? COCOA} />
    </svg>
  )
}

/* Jagged torn-paper edge strip for the letter card. */
const TEAR_JITTER = [11, 3, 14, 6, 1, 12, 4, 9, 2, 15, 5, 10, 1, 13, 3, 7, 11, 2, 8, 14, 4, 9, 1, 12, 6, 3, 10, 5, 13, 2]

export function TornEdge({ width = 740, flip = false, fill = '#FFF7ED', className, style }) {
  const step = width / (TEAR_JITTER.length - 1)
  const baseline = flip ? 0 : 22
  let d = `M0 ${baseline} L0 ${TEAR_JITTER[0]}`
  for (let i = 1; i < TEAR_JITTER.length; i += 1) {
    d += ` L${+(i * step).toFixed(1)} ${TEAR_JITTER[i]}`
  }
  d += ` L${width} ${baseline} Z`
  return (
    <svg
      width="100%"
      height="22"
      viewBox={`0 0 ${width} 22`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <path d={d} fill={fill} opacity="0.98" />
    </svg>
  )
}

/* Squiggly underline for the hero name. */
export function Squiggle({ className, style, color = '#E95B7B' }) {
  return (
    <svg viewBox="0 0 200 20" aria-hidden="true" focusable="false" className={className} style={style} preserveAspectRatio="none">
      <path d="M4 12 q12 -10 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.75" />
    </svg>
  )
}
