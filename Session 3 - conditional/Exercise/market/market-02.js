// ################# //
// MARKET V2.0
// ################# //

var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

var stockApple = 5
var stockGrape = 7
var stockOrange = 8

// Meminta input jumlah quantity
var qtyApple = parseInt(prompt(`Masukkan jumlah Apel, Stock : ${stockApple}`))
// Memeriksa apakan inputan user melebihi stock yang ada
if(qtyApple > stockApple){
    // Infokan kepada user jika ada kesalahan
    alert(`Permintaan melebihi stock, qty akan terisi sesuai jumlah stock yaitu ${stockApple})`)
    // Jika terjadi kesalahan input, maka stock akan di set menjadi nol
    qtyApple = stockApple
}

// Meminta input jumlah quantity
var qtyGrape = parseInt(prompt(`Masukkan jumlah Anggur, Stock : ${stockGrape}`))
// Memeriksa apakan inputan user melebihi stock yang ada
if(qtyGrape > stockGrape){
    // Permintaan user melebihi stock, qty akan terisi sesuai jumlah stock
    alert(`Permintaan melebihi stock, qty akan terisi sesuai jumlah stock yaitu ${stockGrape})`)
    // Jika terjadi kesalahan input, maka stock akan di set menjadi nol
    qtyGrape = stockGrape
}

// Meminta input jumlah quantity
var qtyOrange = parseInt(prompt(`Masukkan jumlah Apel, Stock : ${stockOrange}`))
// Memeriksa apakan inputan user melebihi stock yang ada
if(qtyOrange > stockOrange){
    // Infokan kepada user jika ada kesalahan
    alert(`Permintaan melebihi stock, qty akan terisi dari jumlah stock yaitu ${stockOrange})`)
    // Jika terjadi kesalahan input, maka stock akan di set menjadi nol
    qtyOrange = stockOrange
}



// Hitung total biaya dari setiap buah yang dibeli
var totalPriceApple = qtyApple * priceApple
var totalPriceGrape = qtyGrape * priceGrape
var totalPriceGrape = qtyOrange * priceOrange

// Hitung total biaya dari keseluruhan belanjaan buah
var finalPrice = totalPriceApple + totalPriceGrape + totalPriceGrape

// Meminta input user untuk uang yang harus dibayar
var money = parseInt(prompt(`
    Detail Belanja

    Apple : ${qtyApple} x ${priceApple} = ${totalPriceApple} 
    Grape : ${qtyGrape} x ${priceGrape} = ${totalPriceGrape} 
    Orange : ${qtyOrange} x ${priceOrange} = ${totalPriceOrange} 
    Total : ${finalPrice}

    Masukkan uang Anda
`))

// Hitung kemungkinan selisih antara uang dari user dengan total yang harus dibayar
var margin = Math.abs(money - finalPrice)

// Jika uang yang diberikan kurang dari seharusnya
if(money < finalPrice){

    alert(`Transaksi dibatalkan, Uang yang Anda masukkan kurang ${margin}`)

// Jika uang yang diberikan lebih dari seharusnya
} else if(money > finalPrice){        

    alert(`Terimakasih, Uang kembali untuk Anda : ${margin}`)

// Jika uang yang diberikan memiliki jumlah yang pas dari seharusnya
} else {

    alert('Terimakasih !')

}




