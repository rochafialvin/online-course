// Odd Even

// 1. Meminta input angka user dan mengubahnya menjadi integer
var numberInp = parseInt(prompt("Masukkan angka"))

// 2. Mengevaluasi nilai tersebut apakah merupakan bilangan ganjil atau genap

// Variabel status untuk menyimpan keterangan ganjil / genap
var status

if(numberInp % 2 == 0){
    // Jika numberInp menghasilkan nol setelah dimodulus dua
    status = "GENAP"

} else {
    // Jika numberInp menghasillkan satu setelah dimodulus dua
    status = "GANJIL"

}

// 3. Menampilkan informasi mengenai bilangan tersebut menggunakan alert dan console
// Membuat template string untuk digunakan pada alert maupun console
var info = `Angka ${numberInp} tergolong bilangan ${status}`
alert(info)
console.log(info)
