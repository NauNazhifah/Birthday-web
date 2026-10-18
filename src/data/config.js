/* ♡✿ NIZA'S SCRAPBOOK SETTINGS — edit everything here ✿♡
 *
 * Every name, message, caption and wish in the whole website lives in this
 * one little file, so you can re-wrap this gift for anyone (or next year!).
 */

export const MUSIC = {
  // Opsional: '/music/birthday-song.mp3' — jika file ada, itu yang diputar;
  // jika tidak, otomatis memakai melodi music-box bawaan. Tidak autoplay;
  // musik hanya mulai saat tombol stikernya diketuk.
  file: null,
  volume: 0.5,
}

export const NAME = 'Niza'

export const HERO = {
  eyebrow: 'sebuah dunia kecil nan pink, hanya untukmu',
  titleTop: 'Selamat Ulang Tahun,',
  titleName: 'Niza',
  subtitle: 'hari ini khusus untukmu, gadis stroberiku 🍓',
  note: 'buku kecil berisi cinta, yang kubuat khusus untukmu...',
  button: 'BUKA KEJUTAN KECILMU 🎀',
  buttonDone: 'lanjut telusuri ya, si ulang tahun ♡',
  envelopeHint: 'klik aku!',
  secretPrefix: 'psst...',
  secretMessage: 'ada satu buku kenangan kecil menunggumu di bawah, khusus untukmu ♡',
}

export const STICKERS_SECTION = {
  title: 'potongan-potongan kecil bahagia ♡',
  subtitle: 'ketuk stikernya, dan satu permohonan mungil akan muncul',
}

/* Setiap stiker: art = gambar yang dipakai, message = permohonan yang muncul. */
export const STICKERS = [
  { art: 'strawberry', label: 'stiker stroberi', message: 'Berkatmu, hari-hari biasa jadi terasa lebih manis 🍓' },
  { art: 'bunny', label: 'stiker kelinci', message: 'Pengingat kecil: kamu sangat dicintai ♡' },
  { art: 'cake', label: 'stiker kue ulang tahun', message: 'Semoga semua permohonanmu terkabul, sepotong demi sepotong 🎂' },
  { art: 'cherry', label: 'stiker ceri', message: 'Kebahagiaan dijadikan dua untuk gadis favoritku 🍒' },
  { art: 'bow', label: 'stiker pita pink', message: 'Kamulah pita yang mengikat hari-hari terbaikku 🎀' },
  { art: 'flower', label: 'stiker bunga kecil', message: 'Terus mekar dengan cara yang indah versimu 🌷' },
  { art: 'manga', label: 'stiker panel manga', message: 'Tokoh paling manis di setiap cerita itu kamu ♡' },
]

export const LETTER = {
  title: 'dear Niza, ♡',
  paragraphs: [
    'Selamat ulang tahun, Niza! 🎀',
    'Hari ini, izinkan aku jadi pengingat kecil: kamu layak mendapatkan begitu banyak hal indah di dunia ini. Semoga bab baru ini membawamu lebih banyak kebahagiaan, lebih banyak alasan untuk tersenyum, keberkahan kecil yang tak terduga, dan orang-orang yang membuat hatimu merasa aman.',
    'Semoga kamu terus tumbuh menjadi orang yang kamu impikan, tanpa lupa menikmati hal-hal kecil di sepanjang jalannya.',
    'Semoga harimu penuh momen-manis, mimpimu perlahan menjadi nyata, dan hatimu selalu menemukan alasan untuk merasa dicintai.',
    'Terima kasih sudah menjadi bagian dari ceritaku. Hari ini, sudut internet kecil nan pink ini adalah milikmu.',
    'Selamat ulang tahun, gadisku. Tetap memesona, tetap penasaran, dan jangan pernah lupa betapa spesialnya kamu. ♡🍓',
  ],
  signature: 'dengan sangat sayang,\nmanusia favoritmu ♡',
  postscript: 'surat ini hanya satu dari kejutan-kejutanmu hari ini ♡',
}

export const CAKE = {
  title: 'buat satu permohonan kecil 🎂',
  hint: 'ketuk lilinnya satu per satu untuk meniupnya... atau tiup semuanya sekaligus',
  button: 'buat permohonan ♡',
  buttonAgain: 'nyalakan lagi ya ♡',
  wish: 'semoga tahun ini lebih lembut, lebih manis, dan lebih baik untukmu. ♡',
}

/* ————— Galeri: album stiker interaktif (tanpa foto sama sekali) —————
 * 4 kartu × 3 stiker = 12 stiker. Setiap stiker punya pesan kecilnya sendiri.
 * art = komponen SVG di art/Art.jsx (semua digambar lokal, tidak ada aset internet). */
export const STICKER_ALBUM = {
  title: 'kenangan kecil, harta kecil ♡',
  subtitle: 'empat album kecil berisi stiker manis — ketuk semuanya ya ♡',
  counter: 'stiker ditemukan {found}/{total}',
  complete: 'yeay! semua stiker manis sudah kamu temukan ♡',
  reset: 'ulang koleksinya ♡',
  hint: 'setiap stiker menyimpan pesan mungil untukmu — kumpulkan keduabelasnya ♡',
  collections: [
    {
      name: 'Bunny Collection',
      caption: 'dipeluk erat, disayang manja ♡',
      stickers: [
        { id: 'bunny', art: 'bunny', label: 'kelinci pita pink', message: 'peluk virtual buat kamu ♡' },
        { id: 'bunny-blossom', art: 'blossom', label: 'bunga putih mini', message: 'bunga kecil bilang: kamu manis sekali ✿' },
        { id: 'bunny-heart', art: 'heart', label: 'hati kecil', message: 'hati mini ini milikmu, selalu ♡' },
      ],
    },
    {
      name: 'Strawberry Collection',
      caption: 'semanis senyumnya, pasti ♡',
      stickers: [
        { id: 'berry', art: 'strawberry', label: 'stroberi senyum', message: 'semoga harimu semanis stroberi 🍓' },
        { id: 'berry-flower', art: 'flower', label: 'tulip pink', message: 'mekar terus ya, bahagiamu 🌷' },
        { id: 'berry-bow', art: 'bow', label: 'pita stroberi', message: 'diikat pita, jadi paket manis 🎀' },
      ],
    },
    {
      name: 'Sweet Treats',
      caption: 'porsi manis untuk hari istimewa ♡',
      stickers: [
        { id: 'cake', art: 'cake', label: 'kue stroberi', message: 'kamu pantas dapat banyak kebahagiaan 🎂' },
        { id: 'cupcake', art: 'cupcake', label: 'cupcake cherry', message: 'secupcake manis untuk senyummu hari ini ♡' },
        { id: 'candy', art: 'candy', label: 'permen karet', message: 'harimu penuh warna seperti permen ini 🍬' },
      ],
    },
    {
      name: 'Coquette Essentials',
      caption: 'aksesori rahasia si gadis pita ♡',
      stickers: [
        { id: 'coquette-bow', art: 'bow', label: 'pita coquette', message: 'dibungkus dengan banyak cinta 🎀' },
        { id: 'coquette-envelope', art: 'envelope', label: 'amplop mini', message: 'surat mini berisi doa baik untukmu ✉' },
        { id: 'coquette-locket', art: 'locket', label: 'gantungan hati', message: 'rahasia kecil: kamu spesial ✦' },
      ],
    },
  ],
}

export const SURPRISE = {
  title: 'psst... satu kejutan terakhir 🎀',
  hint: 'kotak kecil yang bertuliskan namamu',
  button: 'BUKA HADIAH RAHASIAMU ♡',
  openedButton: 'disegel dengan cinta ♡',
  note: `Surprise! Kamu baru saja membuka porsi ekstra kejutan cinta ulang tahun. ♡

Semoga hari ini kamu tersenyum lebih lebar, tertawa lebih keras, dan ingat bahwa ada seseorang yang selalu mendoakan hal-hal indah untukmu.

Selamat ulang tahun, Niza! 🍓🎂🎀`,
}

export const FOOTER = {
  line: 'dibuat dengan hati, dengan sayang, khusus untukmu ♡',
  small: 'selamat ulang tahun, Niza — nikmati dunia kecilmu 🍓🎀',
}
