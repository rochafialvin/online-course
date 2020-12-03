// Odd Even

// Meminta input user dan merubahnya menjadi integer
var number = parseInt(prompt("Masukkan Angka"))
// Variabel status untuk menyimpan keterangan ganjil / genap
var status

// Jika dimodulus 2 menghasilkan nol
if(number % 2 == 0){
    status = "GENAP"

// Jika dimodulus 2 menghasilkan satu
} else {
    status = "GANJIL"

}

var info = `Angka ${number} tergolong bilangan ${status}`

// Tampilkan informasi menggunakan alert
alert(info)

// Tampilkan informasi menggunakan console.log
console.log(info)