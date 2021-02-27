////////////////////////////
/* Exercise - Data Object */
////////////////////////////

var x = new Date();

var year = x.getFullYear();
// 0 - 11
var month = x.getMonth();
// 1 - 31
var date = x.getDate();
// 0 - 6
var day = x.getDay();
// 0 - 23
var hours = x.getHours();
// 0 - 59
var minutes = x.getMinutes();

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

// Membuat object dari class Date
const time = new Date()

// Mendapatkan informasi bulan saat ini
const month = time.getMonth()

// Menampilkan informasi pada terminal
console.log(`Saat ini bulan ${month + 1} : ${months[month]}`)