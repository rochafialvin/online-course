// ###################### //
// MARKET V5.0
// ###################### //

// [name, price, stock]
var fruits = [
    ['Apple', 10000, 5],
    ['Grape', 15000, 7],
    ['Orange', 20000, 8]
]

// Keranjang awal masih kosong
// Nantinya isi dari carts ini sebuah array dengan format [name, price, qty]
var carts = []

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

        // Variable awal yang akan menyimpan list dari buah
        var fruitList = 'Daftar buah\n\n'

        // Looping sebanyak buah yang ada, fruits.length = jumlah data yang ada pada array fruits
        for (var i = 0; i < fruits.length; i++) {
            // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
            fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock : ${fruits[i][2]}\n`
        }

        // Menampilkan daftar buah
        alert(fruitList)

    // Jika memilih menu 2, Menambah buah
    } else if (menu == 2){

        // Input nama, harga, stock untuk buah yang baru
        var newName = prompt('Masukkan nama buah :')
        var newPrice = parseInt(prompt('Masukkan jumlah harga satuan :'))
        var newStock = parseInt(prompt('Masukkan jumlah stock :'))

        // Dibuat menjadi satu array dengan urutan layaknya data pada fruits
        var newFruit = [newName, newPrice, newStock]

        // Array yang sudah jadi di push ke array fruits
        fruits.push(newFruit)
        
        // Variable awal yang akan menyimpan list dari buah
        var fruitList = 'Daftar buah\n\n'

        for (var i = 0; i < fruits.length; i++) {
            // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
            fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock : ${fruits[i][2]}\n`
        }

        // Menampilkan daftar buah
        alert(fruitList)
    
    // Jika memilih menu 3, Menghapus buah
    } else if (menu == 3){

        // Variable awal yang akan menyimpan list dari buah
        var fruitList = 'Menghapus buah:\n\n'

        for (var i = 0; i < fruits.length; i++) {
            // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
            fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock : ${fruits[i][2]}\n`
        }

        // Menampilkan daftar buah dan memilih buah untuk dihapus
        // index dari buah terpilih akan disimpan ke variable selIndex
        var selIndex = parseInt(prompt(`${fruitList}`))

        // Menghapus satu data pada array
        fruits.splice(selIndex, 1)

        // Variable awal yang akan menyimpan list dari buah
        var fruitList = 'Daftar buah\n\n'

        for (var i = 0; i < fruits.length; i++) {
            // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
            fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock : ${fruits[i][2]}\n`
        }

        // Menampilkan daftar buah
        alert(fruitList)

    // Jika memilih menu 4, Membeli buah
    } else if (menu == 4){

        // While 'memilih buah' , akan berulang untuk memilih buah yang ingin dibelanjakan
        while (true) {

            // Variable awal yang akan menyimpan list dari buah
            var fruitList = 'Membeli buah:\n\n'

            for (var i = 0; i < fruits.length; i++) {
                // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
                fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock : ${fruits[i][2]}\n`
            }

            // Menampilkan daftar buah dan memilih buah untuk dibeli
            var fruitIndex = parseInt(prompt(`${fruitList}`))
            
            // While 'Quantity', yang akan berulang untuk meminta qty jika masih melebihi stock
            while (true) {
                // Untuk nama, price, dan stock dari produk terpilih dimasukkan ke dalam variable untuk mempersingkat
                var selName = fruits[fruitIndex][0]
                var selPrice = fruits[fruitIndex][1]
                var selStock = fruits[fruitIndex][2]

                // Jumlah qty buah yang dibeli dengan menampilkan nama buah dan stock yang ada pada index nol
                var selQty = parseInt(prompt(`Masukkan quantity untuk ${selName}, Stock : ${selStock}`))

                // Jika qty dari buah yang dipilih melebihi stock
                if(selQty > selStock){
                    alert(`Quantity yang diminta ${selQty}, melebihi jumlah stock ${selStock} `)
                } else {
                    // Masukkan ke keranjang
                    carts.push([selName, selPrice, selQty])

                    // Kurangi stock buah yang sudah masuk ke keranjang
                    fruits[fruitIndex][2] -= selQty

                    break
                }
            }

            // Siapkan variable untuk list buah yang ada pada keranjang
            var cartList = 'Keranjang:\n\n'

            for (var i = 0; i < carts.length; i++) {
                // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable cartlist
                cartList += `${i}. ${carts[i][0]} || Rp.${carts[i][1]} || stock : ${carts[i][2]}\n`
            }

            var again = prompt(`${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`)

            // Jika menjawab tidak, keluar dari while 'memilih buah'
            if(again.toLowerCase() == 'tidak' ) {break}

        }

        // Keluar dari while 'memilih buah' , lanjutkan menghitung harga yang harus dibayar

        /*
            [nama, price, qty, totalPrice]
            carts = [
                ['Apel', 10000, 3, 30000],
                ['Grape', 15000, 3, 45000]
            ]
        */

        // Menghitung total harga
        var finalPrice = 0
        for(i = 0 ; i < carts.length ; i++){

            // total price per buah
            // Price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut
            carts[i][3] = carts[i][1] * carts[i][2]

            // final price kesuluhan
            finalPrice += carts[i][3]

        }

        // Menampilkan detail belanja
        var finalReport = ''
        for(i = 0 ; i < carts.length ; i++){

            // item = [name, price, qty, totalPrice]
            var item = carts[i]
            finalReport +=  `${item[0]} : ${item[1]} x ${item[2]} = ${item[3]}\n`
            
        }

        while (true) {
            // Menampilkan informasi belanja termasuk total uang yang harus dibayar
            var money = parseInt(prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`))
            var margin = Math.abs(money - finalPrice)

            // Jika uang yang dimasukkan kurang dari seharusnya
            if(money < finalPrice){
                alert(`Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`)
            } else {

                if(margin == 0) {
                    alert('Terimakasih')
                } else {
                    alert(`Terimakasih, uang kembalian Anda ${margin}`)
                }

                // Kosongkan keranjang, karena sudah dibayar
                carts = []
                break
            }
        }

    } else {
        break
    }
}