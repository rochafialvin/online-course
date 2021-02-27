////////////////////////////
/* Exercise - Data Object 2 */
////////////////////////////


/* Date object */
const date = new Date();

console.log(date.__proto__)
console.log(date.getFullYear());
console.log(date.getMonth());


/* Time */
const time = () => {
  const x = new Date();

  const year = x.getFullYear();

  // 0 - 11
  // Jan - Dec
  const month = x.getMonth();

  // 1 - 31
  const date = x.getDate();

  // 0 - 6
  // Sun - Sat
  const day = x.getDay();

  // 0 - 23
  const hours = x.getHours();

  // 0 - 59
  const minutes = x.getMinutes();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return {
    hari : days[day],
    tanggal : date,
    bulan : months[month],
    tahun : year,
    jam : hours,
    menit : minutes
  }
};

const timeNow = time();
console.log(timeNow)