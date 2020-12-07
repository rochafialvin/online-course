// Theory
// Dua kendaraan yang akan bertemu, dapat hitung waktunnya dengan menjumlahkan kecepatan dari kedua kendaraan
// Lalu kemudian cari tahu dengan total kecepatan yang dimiliki, berapa waktu yang dibutuhkan untuk menempuh jarak tertentu

// 60 + 40 = 100 km/h
// Dengan kecepatan 100 km/h. Berapa waktu yang dibutuhkan untuk menempuh jarak 120km ?
// 120 / 100 = 1.2 jam
// 1.2 * 60 = 72 menit :  60 menit + 12 menit
// 9:00 ==> 10:12

// waktu bertemu (jam) : 9 + Math.floor(72 / 60) : 10
// waktu bertemu (menit) : 0 + (72 % 60) : 12

// Jarak
var distance = 120
// Kecepatan A
var velocityA = 60
// Kecepatan B
var velocityB = 40
// Waktu mulai kendaraan berjalan
var startTimeHour = 9
var startTimeMinute = 0

// Total Kecepatan
// 60 + 40 = 100 km/h
var totalVelocity = velocityA + velocityB
// Waktu yang dibutuhkan untuk bertemu (jam)
// 120 / 100 = 1.2 jam
var needTimeHour = distance / totalVelocity
// Waktu yang dibutuhkan untuk bertemu (menit)
// 1.2 * 60 = 72 menit :  60 menit + 12 menit
var needTimeMinute = needTimeHour * 60

// Waktu bertemu (jam)
// waktu bertemu (jam) : 9 + Math.floor(72 / 60) : 10
var meetTimeHour = startTimeHour + Math.floor(needTimeMinute / 60)
// Waktu bertemu (menit)
// waktu bertemu (menit) : 0 + (72 % 60) : 12
var meetTimeMinute = startTimeMinute + (needTimeMinute % 60)

console.log(`Akan bertemu pada pukul ${meetTimeHour} : ${meetTimeMinute}`)
