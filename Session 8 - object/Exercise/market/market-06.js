// ###################### //
// MARKET V1.6
// ###################### //

class Products{
    constructor(_name, _price, _stock) {
        this.name = _name
        this.price = _price
        this.stock = _stock
        this.qty = 0
        this.total = 0
    }
}

class FastFood extends Products{
    constructor(_name, _price, _stock, _expired){
        super(_name, _price, _stock)
        this.category = 1
        this.expired = _expired
    }
}

class Cloth extends Products{
    constructor(_name, _price, _stock, _size){
        super(_name, _price, _stock)
        this.category = 2
        this.size = _size
    }
}

class Electronic extends Products{
    constructor(_name, _price, _stock, _warranty){
        super(_name, _price, _stock)
        this.category = 3
        this.warranty = _warranty
    }
}

class Fruits extends Products{
    constructor(_name, _price, _stock, _sugar){
        super(_name, _price, _stock)
        this.category = 4
        this.sugarLvl = _sugar
    }
}

var products = [
    {category: 1, name : 'Noodle', price: 20000, stock: 8, expired : 2020},
    {category: 2, name : 'Hoodie', price: 15000, stock: 7, size: 'L'},
    {category: 3, name : 'Headphone', price: 20000, stock: 8, warranty : 'Yes'},
    {category: 4, name : 'Apel', price: 10000, stock: 5, sugar: 'High'},

]

var carts = []

function createList(data, title) {
    // Membuat daftar buah
    var list = `${title}\n\n`

    data.forEach((item, i) => {
        var newList = `${i}. NAME : ${item.name} || STOCK : ${item.stock} || PRICE : ${item.price}`

        switch (item.category) {
            // Fast Food
            case 1:
                newList += ` || EXP : ${item.expired}\n`
                break;

            // Cloth
            case 2:
                newList += ` || SIZE : ${item.size}\n`
                break;

            // Electronic
            case 3:
                newList += ` || WARRANTY : ${item.warranty}\n`
                break;
        
            default:
                newList += ` || SUGAR : ${item.sugar}\n`
                break;
        }

        list += newList
    
    })

    return list
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
        alert(createList(products, 'Daftar Produk'))

    // Jika memilih menu 2, Menambah buah
    } else if (menu == 2){

        var catOpt = parseInt(
            prompt(
                'Kategori produk yang ingin ditambahkan\n\n' +
                '1 . Cepat Saji \n' +
                '2 . Pakaian \n' +
                '3 . Elektronik \n' +
                '4 . Buah \n\n'
            )
        )

        // Input nama, harga, stock untuk buah yang baru
        var name = prompt('Masukkan nama produk :')
        var stock = parseInt(prompt('Masukkan jumlah stock :'))
        var price = parseInt(prompt('Masukkan jumlah harga satuan :'))

        var newProduct
        switch (catOpt) {
            // Fast Food
            case 1:

                var expired = prompt('Masukkan waktu expired :')
                newProduct = new FastFood(name, price, stock, expired)
                break;

            // Cloth
            case 2:

                var size = prompt('Masukkan size produk :')
                newProduct = new Cloth(name, price, stock, size)
                break;

            // Electronic
            case 3:

                var warranty = prompt('Masukkan status garansi :')
                newProduct = new Electronic(name, price, stock, warranty)
                break;
        
            // Fruits
            default:
                
                var sugar = prompt('Masukkan tingkat kadar gula :')
                newProduct = new Fruits(name, price, stock, sugar)
                break;
        }
        

        // Array yang sudah jadi di push ke array fruits
        products.push(newProduct)
        
        // Memanggil function untuk menampilkan list produk
        alert(createList(products, 'Daftar Produk'))
    
    // Jika memilih menu 3, Menghapus buah
    } else if (menu == 3){

        var prdList = createList(products, 'Pilih produk untuk dihapus')

        var selIndex = parseInt(prompt(`${prdList}`))

        // Menghapus satu data pada array
        products.splice(selIndex, 1)

       // Memanggil function untuk menampilkan list buah
       alert(createList(products, 'Daftar Produk'))

    // Jika memilih menu 4, Membeli buah
    } else if (menu == 4){

        // While 'memilih buah' , akan berulang untuk memilih buah yang ingin dibelanjakan
        while (true) {

            var prdList = createList(products, 'Pilih produk untuk dimasukkan ke keranjang')
        
            var selIndex = parseInt(prompt(`${prdList}`))
            
            // While 'Quantity', yang akan berulang untuk meminta qty jika masih melebihi stock
            while (true) {
                // Untuk nama, price, dan stock dari produk terpilih dimasukkan ke dalam variable untuk mempersingkat
                var name = products[selIndex].name
                var price = products[selIndex].price
                var stock = products[selIndex].stock

                // Jumlah qty buah yang dibeli dengan menampilkan nama buah dan stock yang ada pada index nol
                var qty = parseInt(prompt(`Masukkan quantity untuk ${name}, Stock : ${stock}`))

                // Jika qty dari buah yang dipilih melebihi stock
                if(qty > stock){
                    alert(`Quantity yang diminta ${qty}, melebihi jumlah stock ${stock} `)
                } else {
                    // Masukkan ke keranjang
                    carts.push({name, price, qty})

                    // Kurangi stock buah yang sudah masuk ke keranjang
                    products[selIndex].stock -= qty

                    break
                }
            }

            // Siapkan variable untuk list buah yang ada pada keranjang
            var cartList = 'Keranjang:\n\n'

            carts.forEach((cart, i) => {
                // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable cartlist
                cartList += `${i}. ${cart.name} || Rp.${cart.price} || qty : ${cart.qty}\n`
            })

            var again = prompt(`${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`)

            // Jika menjawab tidak, keluar dari while 'memilih buah'
            if(again.toLowerCase() == 'tidak' ) {break}

        }

        // Keluar dari while 'memilih buah' , lanjutkan menghitung harga yang harus dibayar

        // Menghitung total harga
        var finalPrice = 0

        carts.forEach((cart, i) => {
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