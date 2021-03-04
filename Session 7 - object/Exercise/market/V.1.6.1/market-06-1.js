//////////////////
// MARKET V.1.6.1 //
/////////////////


class Products{
  constructor(name, price, stock){
    this.name = name
    this.price = price
    this.stock = stock
  }
}

class FastFood extends Products{
  constructor(name, price, stock, expired){
      super(name, price, stock)
      this.category = 1
      this.expired = expired
  }
}

class Cloth extends Products{
  constructor(name, price, stock, size){
      super(name, price, stock)
      this.category = 2
      this.size = size
  }
}

class Electronic extends Products{
  constructor(name, price, stock, warranty){
      super(name, price, stock)
      this.category = 3
      this.warranty = warranty
  }
}

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

  // arr = products ==> {name, price, stock}
  // arr = carts ==> {name, price, qty}

  // kind : 1 - memproses array products
  // kind : 0 - memproses array carts

  if(kind){
    arr.forEach((val, i) => {
      // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
      // val : {category: 2, name : 'Hoodie', price: 15000, stock: 7, size: 'L'}
      const {name, price, stock, category, expired, size, sugar, warranty} = val
      let newList = `${i}. NAME : ${name} || STOCK : ${stock} || PRICE : ${price}`;

      switch (category) {
        // Fast Food (expired)
        case 1:
          newList += ` || EXP : ${expired}\n`
          break;

        // Cloth (size)
        case 2:
          newList += ` || SIZE : ${size}\n`
          break;

        // Electronic (warranty)
        case 3:
          newList += ` || WARRANTY : ${warranty}\n`
          break;

        // Fruit (sugar)
        default:
          newList += ` || SUGAR : ${sugar}\n`
          break;

      }

      list += newList
    });
  } else {
    arr.forEach((val, i) => {
      // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
      const {name, price, qty} = val
      list += `${i}. ${name} || Rp.${price} || qty : ${qty}\n`;
    });
  }


  // Return list
  return list;
};

// While 'menu utama', akan menampilkan menu selama user belum memilih untuk keluar (pilihan 5)
while (true) {
  const menu = parseInt(
    prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar produk
        2. Menambah produk
        3. Menghapus produk
        4. Membeli produk
        5. Exit
    `)
  );

  // Menu 1 : Menampilkan daftar produk
  if (menu == 1) {
    // Menampilkan list produk
    alert(createList(products, "Daftar Produk"));

    // Menu 2 : Menambah produk
  } else if (menu == 2) {

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
    const name = prompt("Masukkan nama produk :");
    const price = parseInt(prompt("Masukkan jumlah harga satuan :"));
    const stock = parseInt(prompt("Masukkan jumlah stock :"));

    let newProduct
    switch (catOpt) {
      // Fast Food (expired)
      case 1:

        const expired = prompt('Masukkan waktu expired')
        newProduct = new FastFood(name, price, stock, expired)
        break;

      // Cloth (size)
      case 2:

        const size = prompt('Masukkan size produk :')
        newProduct = new Cloth(name, price, stock, size)
        break;

      // Electronic (warranty)
      case 3:

        const warranty = prompt('Masukkan status garansi :')
        newProduct = new Electronic(name, price, stock, warranty)
        break;

      // Fruits (sugar)
      default:

        const sugar = prompt('Masukkan tingkat kadar gula :')
        newProduct = new Fruits(name, price, stock, sugar)
        break;
    }

    // Array yang sudah jadi di push ke array produk
    products.push(newProduct);

    // Menampilkan list produk
    alert(createList(products, "Daftar Produk"));

    // Jika memilih menu 3, Menghapus produk
  } else if (menu == 3) {
    // Menampilkan daftar buah dan memilih buah untuk dihapus
    // index dari buah terpilih akan disimpan ke variable selIndex
    const selIndex = parseInt(prompt(createList(products, "Menghapus Produk")));

    // Menghapus satu data pada array
    products.splice(selIndex, 1);

    // Menampilkan list buah
    alert(createList(products, "Daftar Produk"));

    // Menu 4 : Membeli produk
  } else if (menu == 4) {
    const carts = [];

    // While 'memilih buah' , akan berulang untuk memilih buah yang ingin dibelanjakan
    while (true) {
      // Menampilkan daftar buah dan memilih buah untuk dibeli
      const selIndex = parseInt(prompt(createList(products, "Membeli Produk")));

      // menyimpan nama, harga, dan stock buah yang terpilih ke dalam variabel tersendiri

      const {name, price, stock} = products[selIndex]

      // loop untuk 'Input Quantity' dari buah yang dipilih
      while (true) {
        // jumlah stock yang ingin dibeli
        const qty = parseInt(
          prompt(`Masukkan quantity untuk ${name}, Stock : ${stock} `)
        );

        // jika qty yang diminta melebihi stock yang tersedia
        if (qty > stock) {
          alert(
            `Quantity yang diminta ${qty}, melebihi jumlah stock ${stock}`
          );
        } else {
          // masukkan ke keranjang (cart)
          carts.push({name, price, qty});
          // kurangi stock buah yang dipesan
          products[selIndex].stock -= qty;
          // keluar dari loop 'Input Quantity'
          break;
        }
      }

      // tampilkan isi keranjang
      // carts = [
      //   {name : "Apple", price: 10000, qty : 3}
      // ]
      const cartList = createList(carts, "Keranjang", 0);

      const again = prompt(
        `${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`
      );

      // keluar dari loop 'Choosing Fruit'
      // Tidak, TIDAK, tidaK ==> tidak
      if (again.toLowerCase() == "tidak") {
        break;
      }
    }

    // Keluar dari while 'memilih buah' , lanjutkan menghitung harga yang harus dibayar

    // Menghitung total harga
    let finalPrice = 0;

    // cart = {name, price, qty, total}
    carts.forEach((cart) => {
      // total price per buah
      // Price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut
      cart.total = cart.qty * cart.price

      // final price kesuluhan
      finalPrice += cart.total;
    });

    // Menampilkan detail belanja
    let finalReport = "";

    carts.forEach((cart) => {
      const {name , price, qty, total} = cart
      finalReport += `${name} : ${price} x ${qty} = ${total}\n`;
    });

    // While 'input uang', dijalankan untuk meminta inputan jumlah uang dari user
    // akan terus berulang selama uang yang dimasukkan oleh user masih kurang dari yang seharusnya
    while (true) {
      // Menampilkan informasi belanja termasuk total uang yang harus dibayar
      const money = parseInt(prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`));
      const margin = Math.abs(money - finalPrice);

      // Jika uang yang dimasukkan kurang dari seharusnya
      if (money < finalPrice) {
        alert(
          `Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`
        );
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
    break;
  }
}
