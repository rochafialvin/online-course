// // // // // //
// MARKET V.1.1 //
// // // // // //

// Memiliki tiga buah : Apel, Anggur, Jeruk
var apple, grape, orange

// Tentukan harga satuan untuk setiap buah
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// Meminta user input qty untuk setiap buahnya
apple = prompt('Masukkan jumlah qty Apel')
grape = prompt('Masukkan jumlah qty Anggur')
orange = prompt('Masukkan jumlah qty Jeruk')

// Hitung harga total masing - masing buah
var totalApple = apple * priceApple
var totalGrape = grape * priceGrape
var totalOrange = orange * priceOrange

// Total keseluruhan
var totalPrice = totalApple + totalGrape + totalOrange

// Memunculkan informasi menggunakan alert
alert(`
    Detail Belanja

    Apel : ${apple} x ${priceApple} = ${totalApple}
    Anggur : ${grape} x ${priceGrape} = ${totalGrape}
    Jeruk : ${orange} x ${priceOrange} = ${totalOrange}

    Total : ${totalPrice}
`)
