// ################ //
// MARKET V3.0
// ################ //

var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

var stockApple = 5
var stockGrape = 7
var stockOrange = 8

while(true){
    // Input jumlah apel yang akan dibeli
    var qtyApple = parseInt(prompt(`Masukkan jumlah Apel, Stock : ${stockApple}`))

    // Jika permintaan jumlah apel melebihi stok yang ada
    if(qtyApple > stockApple){
        // Menampilkan informasi mengenai stok apel yang tersedia
        alert(`Permintaan melebihi stock, stock : ${stockApple})`)
    } else {
        // Keluar dari loop apel
        break
    }
}

while(true){
    // Input jumlah anggur yang akan dibeli
    var qtyGrape = parseInt(prompt(`Masukkan jumlah Anggur, Stock : ${stockGrape}`))

    // Jika permintaan jumlah anggur melebihi stok yang ada
    if(qtyGrape > stockGrape){
        // Menampilkan informasi mengenai stok anggur yang tersedia
        alert(`Permintaan melebihi stock, stock : ${stockGrape})`)
    } else {
        // Keluar dari loop anggur
        break
    }
}

do {
    // Input jumlah orange yang akan dibeli
    var qtyOrange = parseInt(prompt(`Masukkan jumlah Orange, Stock : ${stockOrange}`))

    // Jika permintaan jumlah orange melebihi stok yang ada
    if(qtyOrange > stockOrange){
        // Menampilkan informasi mengenai stok orange yang tersedia
        alert(`Permintaan melebihi stock, stock : ${stockOrange})`)
    } else {
        // Keluar dari loop orange
        break
    }

} while (true);


var totalPriceApple = qtyApple * priceApple
var totalPriceGrape = qtyGrape * priceGrape
var totalPriceOrange = qtyOrange * priceOrange

var finalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange

while (true) {
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

        alert(`Uang yang Anda masukkan kurang ${margin}`)

    // Jika uang yang diberikan tidak kurang dari seharusnya
    } else if(money >= finalPrice){
        
        if(money > finalPrice){
            // Jika uang yang diberikan lebih dari seharusnya
            alert(`Terimakasih, Uang kembali untuk Anda : ${margin}`)
        } else {
            // Jika uang yang diberikan memiliki jumlah yang pas dari seharusnya
            alert('Terimakasih !')
        }

        break
    } 
}

