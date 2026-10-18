// One-off fixup: removes the accidental `p-label="..."` attributes from Art.jsx
import fs from 'node:fs'

const file = new URL('../src/components/art/Art.jsx', import.meta.url)
let source = fs.readFileSync(file, 'utf8')
const before = (source.match(/ p-label=/g) || []).length
source = source.replace(/ p-label="[^"]*"/g, '')
fs.writeFileSync(file, source)
console.log(`removed ${before} stray p-label attributes`)
