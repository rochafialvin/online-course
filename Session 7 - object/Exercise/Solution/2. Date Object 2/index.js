//////////////////////////////
/* Exercise - Data Object 2 */
//////////////////////////////

const timeFunction = () => {
  const time = new Date();

  const year = time.getFullYear();

  // 0 - 11
  // Jan - Dec
  const month = time.getMonth();

  // 1 - 31
  const date = time.getDate();

  // 0 - 6
  // Sun - Sat
  const day = time.getDay();

  // 0 - 23
  const hours = time.getHours();

  // 0 - 59
  const minutes = time.getMinutes();

  // 0 - 59
  const seconds = time.getSeconds()

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
    menit : minutes,
    detik : seconds
  }

}


let {hari, tanggal, bulan, tahun, jam, menit, detik} = timeFunction()

// minutes = 2
if(menit < 10){menit = `0${menit}`}

// minutes = 2
if(detik < 10){detik = `0${detik}`}

console.log(`Hari ini ${hari}, ${tanggal} ${bulan} ${tahun}`)
console.log(`Pukul ${jam}:${menit}:${detik}`)
