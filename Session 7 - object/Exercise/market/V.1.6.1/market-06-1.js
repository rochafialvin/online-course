///////////////////
/* MARKET V1.6.1 */
///////////////////

/* Class Products */
/* Properties : name, price , stock, qty, total */
class Products{
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
        this.qty = 0
        this.total = 0
    }
}

/* Class Fast Food */
/* Properties :  expired */
class FastFood extends Products{
    constructor(name, price, stock, expired){
        super(name, price, stock)
        this.category = 1
        this.expired = expired
    }
}

/* Class Cloth */
/* Properties :  size */
class Cloth extends Products{
    constructor(name, price, stock, size){
        super(name, price, stock)
        this.category = 2
        this.size = size
    }
}

/* Class Electronic */
/* Properties :  warranty */
class Electronic extends Products{
    constructor(name, price, stock, warranty){
        super(name, price, stock)
        this.category = 3
        this.warranty = warranty
    }
}

/* Class Fruits */
/* Properties :  sugar */
class Fruits extends Products{
    constructor(name, price, stock, sugar){
        super(name, price, stock)
        this.category = 4
        this.sugar = sugar
    }
}

const products = [
    {category: 1, name : 'Noodle', price: 20000, stock: 8, expired : 2020},
    {category: 2, name : 'Hoodie', price: 15000, stock: 7, size: 'L'},
    {category: 3, name : 'Headphone', price: 20000, stock: 8, warranty : 'Yes'},
    {category: 4, name : 'Apel', price: 10000, stock: 5, sugar: 'High'},

]


// Function untuk menampilkan list buah
const createList = (arr, header, kind=1) => {
    // Variable awal yang akan menyimpan list buah
    let list = `${header}\n\n`;

    // kind : 1 - memproses array fruits
    // kind : 0 - memproses array carts
    if (kind){
        arr.forEach((val, i) => {
            const {name, price, stock, category, expired, size, warranty, sugar} = val
            let newList = `${i}. NAME : ${name} || STOCK : ${stock} || PRICE : ${price}`

            switch (category) {
                // Fast Food
                case 1:
                    newList += ` || EXP : ${expired}\n`
                    break;

                // Cloth
                case 2:
                    newList += ` || SIZE : ${size}\n`
                    break;

                // Electronic
                case 3:
                    newList += ` || WARRANTY : ${warranty}\n`
                    break;
            
                // Fruits
                default:
                    newList += ` || SUGAR : ${sugar}\n`
                    break;
            }

            // Menambahkan satu baris list
            list += newList                                                                                         
        });
    } else {
        arr.forEach((val, i) => {
        const {name, price, qty} = val
        list += `${i}. ${name} || Rp.${price} || qty : ${qty}\n`;
        });
    }
  

  
    // Return list
    return list;
};

// While 'menu utama', akan menampilkan menu selama user belum memilih untuk keluar (pilihan 5)
while (true) {
    var menu = parseInt(prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar produk
        2. Menambah produk
        3. Menghapus produk
        4. Membeli produk
        5. Exit
    `))

    // Jika memilih menu 1, Menampilkan daftar buah
    if(menu == 1){

        // Memanggil function untuk menampilkan list buah
        alert(createList(products, 'Daftar Produk'))

    // Jika memilih menu 2, Menambah produk
    } else if (menu == 2){

        // Memilih kategori untuk produk yang ingin ditambah
        const catOpt = parseInt(
            prompt(
                'Kategori produk yang ingin ditambahkan\n\n' +
                '1 . Cepat Saji \n' +
                '2 . Pakaian \n' +
                '3 . Elektronik \n' +
                '4 . Buah \n\n'
            )
        )

        // Input nama, harga, stock untuk buah yang baru
        const name = prompt('Masukkan nama produk :')
        const stock = parseInt(prompt('Masukkan jumlah stock :'))
        const price = parseInt(prompt('Masukkan jumlah harga satuan :'))

        let newProduct
        switch (catOpt) {
            // Fast Food
            case 1:

                const expired = prompt('Masukkan waktu expired :')
                newProduct = new FastFood(name, price, stock, expired)
                break;

            // Cloth
            case 2:

                const size = prompt('Masukkan size produk :')
                newProduct = new Cloth(name, price, stock, size)
                break;

            // Electronic
            case 3:

                const warranty = prompt('Masukkan status garansi :')
                newProduct = new Electronic(name, price, stock, warranty)
                break;
        
            // Fruits
            default:
                
                const sugar = prompt('Masukkan tingkat kadar gula :')
                newProduct = new Fruits(name, price, stock, sugar)
                break;
        }
        

        // Array yang sudah jadi di push ke array fruits
        console.log(newProduct)
        products.push(newProduct)
        
        // Memanggil function untuk menampilkan list produk
        alert(createList(products, 'Daftar Produk'))
    
    // Jika memilih menu 3, Menghapus buah
    } else if (menu == 3){

        // Index produk terpilih
        const selIndex = parseInt(prompt(createList(products, 'Pilih produk untuk dihapus')))

        // Menghapus satu data pada array
        products.splice(selIndex, 1)

       // Memanggil function untuk menampilkan list buah
       alert(createList(products, 'Daftar Produk'))

    // Jika memilih menu 4, Membeli buah
    } else if (menu == 4){
        const carts = []

        // While 'memilih buah' , akan berulang untuk memilih buah yang ingin dibelanjakan
        while (true) {
            // Index produk terpilih
            const selIndex = parseInt(prompt(createList(products, 'Pilih produk untuk dimasukkan ke keranjang')))
            
            // While 'Quantity', yang akan berulang untuk meminta qty jika masih melebihi stock
            while (true) {
                // Untuk nama, price, dan stock dari produk terpilih dimasukkan ke dalam variable untuk mempersingkat
                const {name, price, stock} = products[selIndex]

                // Jumlah qty buah yang dibeli dengan menampilkan nama buah dan stock yang ada pada index nol
                const qty = parseInt(prompt(`Masukkan quantity untuk ${name}, Stock : ${stock}`))

                // Jika qty dari buah yang dipilih melebihi stock
                if(qty > stock){
                    alert(`Quantity yang diminta ${qty}, melebihi jumlah stock ${stock} `)
                } else {
                    // Masukkan ke keranjang
                    carts.push({name, price, qty})

                    // Kurangi stock buah yang sudah masuk ke keranjang
                    products[selIndex].stock -= qty
                
                    // Keluar dari while 'Quantity'
                    break
                }
            }

            const cartList = createList(carts, "Keranjang", 0);

            // Menentukan untuk belanja lainnya atau tidak
            const again = prompt(`${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`)

            // Jika menjawab tidak, keluar dari while 'memilih buah'
            if(again.toLowerCase() == 'tidak' ) {break}

        }

        // Keluar dari while 'memilih buah' , lanjutkan menghitung harga yang harus dibayar

        // Menghitung total harga
        let finalPrice = 0

        carts.forEach((cart, i) => {
            // total price per buah
            // Price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut
            carts[i].total = cart.price * cart.qty

            // final price kesuluhan
            finalPrice += carts[i].total
        })

        // Menampilkan detail belanja
        let finalReport = ''

        carts.forEach((cart) => {
             const {name, price, qty, total} = cart
             finalReport +=  `${name} : ${price} x ${qty} = ${total}\n`
        })

        // While 'input uang', dijalankan untuk meminta inputan jumlah uang dari user
        // akan terus berulang selama uang yang dimasukkan oleh user masih kurang dari yang seharusnya
        while (true) {
            // Menampilkan informasi belanja termasuk total uang yang harus dibayar
            const money = parseInt(prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`))
            const margin = Math.abs(money - finalPrice)

            // Jika uang yang dimasukkan kurang dari seharusnya
            if(money < finalPrice){
                alert(`Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`)
            } else {

                // jika uang yang diberikan melebihi dari yang seharusnya
                if (money > finalPrice) {
                    alert(`Terimakasih, uang kembalian Anda ${margin}`);
                    // jika uang yang diberikan pas
                } else {
                    alert(`Terimakasih`);
                }
        
                // keluar dari loop 'Bill'
                break;
            }
        }

    // Jika memilih menu 5, exit
    } else {
        // Keluar dari while 'menu utama'
        break
    }
}