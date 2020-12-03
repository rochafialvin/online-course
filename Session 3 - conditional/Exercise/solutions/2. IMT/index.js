// Indeks Massa Tubuh

// Meminta input user
var weight = parseInt(prompt('Masukkan Massa(kg) : '))
var heightCm = parseInt(prompt('Masukkan Tinggi(cm) : '))

// Mendapatkan tinggi dalam meter
var heightM = heightCm / 100
var status

// Mencari nilai IMT
var imt = weight / Math.pow(heightM, 2)

// Jika imt kurang dari 18.5
if (imt < 18.5){
    status = 'kurang'
// imt 18.5 - 24.9
} else if (18.5 <= imt && imt <= 24.9){
    status = 'ideal'
// imt 25.0 - 29.9
} else if (25.0 <= imt && imt <= 29.9){
    status = 'berlebih'
// imt 30.0 - 39.9
} else if (30.0 <= imt && imt <= 39.9){
    status = 'sangat berlebih'
// imt 40 ke atas
} else {
    status = 'obesitas'

}

// Menampilkan informasi menggunakan console
console.log(
    `Massa ${weight} kg & tinggi ${heightM} m\nIMG = ${imt}, berat badan ${status}`
)