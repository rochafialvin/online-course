////////////////////////////
/* Exercise - Date Object */
////////////////////////////

const time = new Date()

const year = time.getFullYear()

// 0 - 11 (Jan - Dec)
const month = time.getMonth()

// 1 - 31
const date = time.getDate()

// 0 - 6 (Sun - Sat)
const day = time.getDay()

// 0 - 23
const hours = time.getHours()

// 0 - 59
const minutes = time.getMinutes()

const months = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember'
]

console.log(`Saat ini bulan ${month + 1} : ${months[month]} Tahun ${year}`)
