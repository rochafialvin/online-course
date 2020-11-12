// ############# //
// MARKET V1.0
// ############# //
var apple, grape, orange

var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

apple = prompt('Masukkan jumlah qty Apel')
grape = prompt('Masukkan jumlah qty Anggur')
orange = prompt('Masukkan jumlah qty jeruk')

var totalApple = apple * priceApple
var totalGrape = grape * priceGrape
var totalOrange = orange * priceOrange

var totalPrice = totalApple + totalGrape + totalOrange

alert(`
    Detail Belanja

    Apple  :   ${apple}   x   ${priceApple}   =   ${totalApple}   
    Grape  :   ${grape}   x   ${priceGrape}   =   ${totalGrape}   
    Orange :   ${orange}  x   ${priceOrange}  =   ${totalOrange}  
    Total  :   ${totalPrice}
    
    `
)


