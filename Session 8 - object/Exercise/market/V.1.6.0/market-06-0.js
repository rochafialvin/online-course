// ###################### //
// MARKET V5.0
// ###################### //

// [name, price, stock]
var fruits = [
    {name : 'Apple', price: 10000, stock: 5},
    {name : 'Grape', price: 15000, stock: 7},
    {name : 'Orange', price: 20000, stock: 8}
]

// Keranjang awal masih kosong
// Nantinya isi dari carts ini sebuah array dengan format [name, price, qty]
var carts = []

// Function untuk menampilkan list buah
var showList = () => {
    // Variable awal yang akan menyimpan list dari buah
    var fruitList = 'Daftar buah\n\n'

    fruits.forEach((fruit, i) => {
        // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
        fruitList += `${i}. ${fruit.name} || Rp.${fruit.price} || stock : ${fruit.stock}\n`
    })

    // Menampilkan daftar buah
    alert(fruitList)
}

// While 'menu utama', akan menampilkan menu selama user belum memilih untuk keluar (pilihan 5)
while (true) {
    var menu = parseInt(prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
    `))

    // Jika memilih menu 1, Menampilkan daftar buah
    if(menu == 1){

        // Memanggil function untuk menampilkan list buah
        showList()

    // Jika memilih menu 2, Menambah buah
    } else if (menu == 2){

        // Input nama, harga, stock untuk buah yang baru
        let name = prompt('Masukkan nama buah :')
        let price = parseInt(prompt('Masukkan jumlah harga satuan :'))
        let stock = parseInt(prompt('Masukkan jumlah stock :'))

        // Dibuat menjadi satu object dengan urutan layaknya data pada fruits
        let newFruit = {name, price, stock}

        // Object yang sudah jadi di push ke array fruits
        fruits.push(newFruit)
        
        // Memanggil function untuk menampilkan list buah
        showList()
    
    // Jika memilih menu 3, Menghapus buah
    } else if (menu == 3){

        // Variable awal yang akan menyimpan list dari buah
        var fruitList = 'Menghapus buah:\n\n'

        fruits.forEach((fruit, i) => {
            // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
            fruitList += `${i}. ${fruit.name} || Rp.${fruit.price} || stock : ${fruit.stock}\n`
        })

        // Menampilkan daftar buah dan memilih buah untuk dihapus
        // index dari buah terpilih akan disimpan ke variable selIndex
        var selIndex = parseInt(prompt(`${fruitList}`))

        // Menghapus satu data pada array
        fruits.splice(selIndex, 1)

        // Memanggil function untuk menampilkan list buah
        showList()

    // Jika memilih menu 4, Membeli buah
    } else if (menu == 4){

        // While 'memilih buah' , akan berulang untuk memilih buah yang ingin dibelanjakan
        while (true) {

            // Variable awal yang akan menyimpan list dari buah
            var fruitList = 'Membeli buah:\n\n'

            fruits.forEach((fruit, i) => {
                // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
                fruitList += `${i}. ${fruit.name} || Rp.${fruit.price} || stock : ${fruit.stock}\n`
            })

            // Menampilkan daftar buah dan memilih buah untuk dibeli
            var fruitIndex = parseInt(prompt(`${fruitList}`))
            
            // While 'Quantity', yang akan berulang untuk meminta qty jika masih melebihi stock
            while (true) {
                // Untuk nama, price, dan stock dari produk terpilih dimasukkan ke dalam variable untuk mempersingkat
                var name = fruits[fruitIndex].name
                var price = fruits[fruitIndex].price
                var stock = fruits[fruitIndex].stock

                // Jumlah qty buah yang dibeli dengan menampilkan nama buah dan stock yang ada pada index nol
                var qty = parseInt(prompt(`Masukkan quantity untuk ${name}, Stock : ${stock}`))

                // Jika qty dari buah yang dipilih melebihi stock
                if(qty > stock){
                    alert(`Quantity yang diminta ${qty}, melebihi jumlah stock ${stock} `)
                } else {
                    // Masukkan ke keranjang
                    carts.push({name, price, qty})

                    // Kurangi stock buah yang sudah masuk ke keranjang
                    fruits[fruitIndex].stock -= qty

                    // Keluar dari while 'Quantity'
                    break
                }
            }

            // Siapkan variable untuk list buah yang ada pada keranjang
            var cartList = 'Keranjang:\n\n'

            // Membuat list cart
            carts.forEach((cart, i) => {
                // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable cartlist
                cartList += `${i}. ${cart.name} || Rp.${cart.price} || stock : ${cart.stock}\n`
            })

            // Menentukan apakah ingin belanja produk lainnya atau tidak
            var again = prompt(`${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`)

            // Jika menjawab tidak, keluar dari while 'memilih buah'
            if(again.toLowerCase() == 'tidak' ) {break}

        }

        // Keluar dari while 'memilih buah' , lanjutkan menghitung harga yang harus dibayar

        /*
            {nama, price, qty, total}
            carts = [
                {name : 'Apple', price : 10000, qty : 3, total : 30000}
            ]
        */

        // Menghitung total harga
        var finalPrice = 0

        carts.forEach((cart,i) => {
            // total price per buah
            // Price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut
            carts[i].total = cart.price * cart.qty

            // final price kesuluhan
            finalPrice += carts[i].total
        })

        // Menampilkan detail belanja
        var finalReport = ''

        carts.forEach((cart) => {
             // cart = [name, price, qty, totalPrice]
             finalReport +=  `${cart.name} : ${cart.price} x ${cart.qty} = ${cart.total}\n`
        })

        // While 'input uang', dijalankan untuk meminta inputan jumlah uang dari user
        // akan terus berulang selama uang yang dimasukkan oleh user masih kurang dari yang seharusnya
        while (true) {
            // Menampilkan informasi belanja termasuk total uang yang harus dibayar
            var money = parseInt(prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`))
            var margin = Math.abs(money - finalPrice)

            // Jika uang yang dimasukkan kurang dari seharusnya
            if(money < finalPrice){
                alert(`Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`)
            } else {

                // Jika uang yang diberikan pas
                if(margin == 0) {
                    alert('Terimakasih')

                // Jika uang yang diberikan lebih
                } else {
                    alert(`Terimakasih, uang kembalian Anda ${margin}`)
                }

                // Kosongkan keranjang, karena sudah dibayar
                carts = []

                // Keluar dari while 'input uang'
                break
            }
        }

    // Jika memilih menu 5, exit
    } else {
        // Keluar dari while 'menu utama'
        break
    }
}