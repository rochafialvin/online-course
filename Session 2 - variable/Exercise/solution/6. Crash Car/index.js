// Jarak
var distance = 120;
// Kecepatan A
var velocityA = 60; // km / h
// Kecepatan B
var velocityB = 40;
// Waktu mulai kendaraan berjalan
var startTimeHour = 9
var startTimeMinute = 0

// Theory
// Dua kendaraan yang akan bertemu, dapat dihitung waktunya dengan menjumlahkan kecepatan dari kedua kendaraan
// Lalu kemudian cari tahu dengan total kecepatan yang dimiliki, berapa waktu yang dibutuhkan untuk menempuh jarak tertentu

// 60 + 40 = 100 km / h
// Dengan kecepatan 100 km / h. Berapa waktu yang dibutuhkan untuk menempuh jarak 120km ?
// 120 / 100 = 1.2 jam
// 1.2 * 60 = 72 menit

// Mendapatkan waktunya
// Mulai jam 09 : 00
// waktu mulai (jam) : 9
// waktu mulai (menit) : 0

// waktu bertemu (jam) : 9 + floor (72 / 60)
// waktu bertemu (menit) : 0 + (72 % 60)

// Total Kecepatan
var totalVelocity = velocityA + velocityB;
// Waktu yang dibutuhkan untuk bertemu (dalam detik)
var needTimeSecond = (distance / totalVelocity)
// Waktu yang dibutuhkan untuk bertemu (dalam menit)
var needTimeMinute = needTimeSecond * 60
// Waktu bertemu (jam)
var meetTimeHour = startTimeHour + Math.floor(needTimeMinute / 60)
// Waktu bertemu (menit)
var meetTimeMinutes = startTimeMinute + needTimeMinute % 60

console.log(`Akan bertemu pada pukul ${meetTimeHour} : ${meetTimeMinutes}`);
