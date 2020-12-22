// IMT (Indeks Massa Tubuh)
// massa / (tinggi (m) pangkat 2)

// 1. Input massa tubuh disimpan dalam bentuk integer
var weight = parseInt(prompt("Masukkan Massa(kg):"))

// 2. Input tinggi badan disimpan dalam bentuk integer
var heightCm = parseInt(prompt("Masukkan Tinggi(cm):"))

// Merubah dari centi meter ke meter
var heightM = heightCm / 100

// 3. Dengan rumus yang sudah ada, melakukan evaluasi apakah massa yang dimiliki tergolong kurang, ideal, berlebih atau sangat berlebih
var status
// massa / (tinggi (m) pangkat 2)
var index = weight / Math.pow(heightM, 2)

if(index < 18.5){
    // Jika kurang dari 18.5    : kurang
    status = 'Kurang'
} else if (index >= 18.5 && index <= 24.9){
    // Jika 18.5 - 24.9         :Ideal
    status = 'Ideal'
} else if (index >= 25.0 && index <= 29.9){
    // Jika 25.0 - 29.9         :Berlebih
    status = 'Ideal'
} else if (index >= 30.0 && index <= 39.9){
    // Jika 30.0 - 39.9         :Sangat Berlebih
    status = 'Ideal'
} else {
    // Jika 40 ke atas          :Obesitas
    status = 'Obesitas'
}


// 4. Menampilkan informasi mengenai IMT menggunakan alert dan console
var info = `Massa ${weight}kg & tinggi ${heightM}m\nIMT = ${index}, berat badan ${status}`

alert(info)
console.log(info)
