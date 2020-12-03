// andi + budi = 49
// rasio andi dan budi = 0.4 = 4 / 10 = 4 : 10 = 2 : 5
// rasio andi = 2 , rasio budi = 5
// total rasio = 2 + 5 = 7
// andi = total umur * (rasio andi / total rasio)
// budi = total umur * (rasio budi / total rasio)

var totalAge = 49, ratioAndi = 2, ratioBudi = 5, ratioTotal = 7

// Umur andi dan budi saat ini
var andi = totalAge * (ratioAndi / ratioTotal)
var budi = totalAge * (ratioBudi / ratioTotal)
console.log(`Umur Andi saat ini ${andi}`)
console.log(`Umur Budi saat ini ${budi}`)

// Umur andi dan budi dua tahun berikutnya
andi += 2
budi += 2
console.log(`Umur Andi dua tahun berikutnya ${andi}`)
console.log(`Umur Budi dua tahun berikutnya ${budi}`)
