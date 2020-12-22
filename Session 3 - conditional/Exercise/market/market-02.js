/////////////////
// MARKET V.1.2
////////////////

// 1. Stock untuk setiap produk
// 2. Ketika user akan input qty melebihi stock. Nilai stock ini yang akan disimpan sebagai qty
// 3. Saat menampilkan informasi total yang harus dibayar. Kita akan meminta user untuk input sejumlah uang
//      3.1 Jika uang yang di input kurang dari seharusnya : Transaksi dibatalkan, Uang yang Anda masukan kurang ...
//      3.2 Jika uang yang di input sama jumlahnya dengan yang seharusnya : Terimakasih !
//      3.3 Jika uang yang di input melebihi dari jumlah yang seharusnya : Terimakasih, Uang kembali untuk Anda ...


// Tentukan harga satuan untuk setiap buah
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// Stock
var stockApple = 5
var stockGrape = 7
var stockOrange = 8

// Meminta user input qty untuk setiap buahnya
var qtyApple = parseInt(prompt(`Masukkan jumlah qty Apel, Stock : ${stockApple}`))
// Jika qty apel yang diminta melebih stock apel yang ada
if(qtyApple > stockApple){
    // Menampilkan informasi bahwa qty melebihi stock.
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockApple}`)
    // Menyimpan stock apel sebagai qty yang dipesan.
    qtyApple = stockApple
}


var qtyGrape = parseInt(prompt(`Masukkan jumlah qty Anggur, Stock : ${stockGrape}`))
// Jika qty anggur yang diminta melebih stock anggur yang ada
if(qtyGrape > stockGrape){
    // Menampilkan informasi bahwa qty melebihi stock.
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockGrape}`)
    // Menyimpan stock apel sebagai qty yang dipesan.
    qtyGrape = stockGrape
}

var qtyOrange = parseInt(prompt(`Masukkan jumlah qty Jeruk, Stock : ${stockOrange}`))
// Jika qty jeruk yang diminta melebih stock jeruk yang ada
if(qtyOrange > stockOrange){
    // Menampilkan informasi bahwa qty melebihi stock.
    alert(`Permintaan qty melebihi stock, qty akan terisi sesuai jumlah stock yaitu : ${stockOrange}`)
    // Menyimpan stock apel sebagai qty yang dipesan.
    qtyOrange = stockOrange
}

// Hitung harga total masing - masing buah
var totalApple = qtyApple * priceApple
var totalGrape = qtyGrape * priceGrape
var totalOrange = qtyOrange * priceOrange

// Total keseluruhan
var finalPrice = totalApple + totalGrape + totalOrange

// Memunculkan informasi menggunakan prompt sekaligus meminta user menginput sejumlah nominal
var money = parseInt(
    prompt(`
        Detail Belanja

        Apel : ${qtyApple} x ${priceApple} = ${totalApple}
        Anggur : ${qtyGrape} x ${priceGrape} = ${totalGrape}
        Jeruk : ${qtyOrange} x ${priceOrange} = ${totalOrange}

        Total : ${finalPrice}
    `)
)

// Mencari margin antara total yang harus dibayar dengan input dari user
// Jika uangnya kurang, maka margin akan bernilai negatif
// Jika uangnya pas, margin akan bernilai nol
var margin = Math.abs(money - finalPrice)

if(money < finalPrice){
    // Jika uangnya kurang, maka margin akan bernilai negatif
    alert(`Transaksi dibatalkan, Uang yang anda masukkan kurang ${margin}`)

} else if(money > finalPrice){
    // Jika uangnya lebih, margin akan bernilai lebih dari nol
    alert(`Terimakasih, Uang kembali untuk Anda ${margin}`)

} else {
    // Jika uangnya pas, margin akan bernilai nol
    alert(`Terimakasih !`)

}
