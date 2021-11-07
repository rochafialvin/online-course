/////////////////
// MARKET V.1.5
/////////////////

/*

  - Ubah loop yang menggunakan for loop menjadi for each
    - Membuat list / daftar buah
    - Meminta jumlah qty untuk setiap produk
    - Menghitung total harga
    - Membuat detail belanja
  - Membuat sebuah function untuk membuat list produk

*/

class Products {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class FastFood extends Products {
  constructor(name, price, stock, expired) {
    super(name, price, stock);
    this.category = 1;
    this.expired = expired;
  }
}

class Cloth extends Products {
  constructor(name, price, stock, size) {
    super(name, price, stock);
    this.category = 2;
    this.size = size;
  }
}

class Electronic extends Products {
  constructor(name, price, stock, warranty) {
    super(name, price, stock);
    this.category = 3;
    this.warranty = warranty;
  }
}

class Fruits extends Products {
  constructor(name, price, stock, sugar) {
    super(name, price, stock);
    this.category = 4;
    this.sugar = sugar;
  }
}

// [name, price, stock]
const products = [
  { category: 1, name: "Noodle", price: 20000, stock: 8, expired: 2020 },
  { category: 2, name: "Hoodie", price: 15000, stock: 7, size: "L" },
  { category: 3, name: "Headphone", price: 20000, stock: 8, warranty: "Yes" },
  { category: 4, name: "Apel", price: 10000, stock: 5, sugar: "High" },
];

// Function untuk menampilkan list buah
const createList = (arr, header, type = 1) => {
  // Variable awal yang akan menyimpan list buah
  let list = `${header}\n\n`;

  // arr = products ==> {name, price, stock}
  // arr = carts ==> {name, price, qty}

  // type : 1 - memproses array products
  // type : 0 - memproses array carts

  if (type) {
    arr.forEach((val, i) => {
      // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
      // val : {category: 2, name : 'Hoodie', price: 15000, stock: 7, size: 'L'}
      const { name, price, stock, category, expired, size, sugar, warranty } =
        val;
      let newList = `${i}. NAME : ${name} || STOCK : ${stock} || PRICE : ${price}`;

      switch (category) {
        // Fast Food (expired)
        case 1:
          newList += ` || EXP : ${expired}\n`;
          break;

        // Cloth (size)
        case 2:
          newList += ` || SIZE : ${size}\n`;
          break;

        // Electronic (warranty)
        case 3:
          newList += ` || WARRANTY : ${warranty}\n`;
          break;

        // Fruit (sugar)
        default:
          newList += ` || SUGAR : ${sugar}\n`;
          break;
      }

      list += newList;
    });
  } else {
    arr.forEach((val, i) => {
      // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
      const { name, price, qty } = val;
      list += `${i}. ${name} || Rp.${price} || qty : ${qty}\n`;
    });
  }

  // Return list
  return list;
};

var showMenu = true;
while (showMenu) {
  var menu = parseInt(
    prompt(`
      Apa yang ingin anda lakukan :
      1. Menampilkan daftar produk
      2. Menambah produk
      3. Menghapus produk
      4. Membeli produk
      5. Exit
    `)
  );

  switch (menu) {
    case 1:
      alert(createList(products, "Daftar produk"));
      break;
    case 2:
      // Memilih category dari produk baru yang akan masuk
      const catOpt = parseInt(
        prompt(
          "Kategori produk yang ingin ditambahkan\n\n" +
            "1 . Cepat Saji \n" +
            "2 . Pakaian \n" +
            "3 . Elektronik \n" +
            "4 . Buah \n\n"
        )
      );

      // Minta input data buah baru (nama, harga satuan, stock)
      var newName = prompt("Masukan nama produk");
      var newPrice = parseInt(prompt("Masukan harga produk"));
      var newStock = parseInt(prompt("Masukan stock produk"));

      let newProduct;
      switch (catOpt) {
        // Fast Food (expired)
        case 1:
          const expired = prompt("Masukkan waktu expired");
          newProduct = new FastFood(newName, newPrice, newStock, expired);
          break;

        // Cloth (size)
        case 2:
          const size = prompt("Masukkan size produk :");
          newProduct = new Cloth(newName, newPrice, newStock, size);
          break;

        // Electronic (warranty)
        case 3:
          const warranty = prompt("Masukkan status garansi :");
          newProduct = new Electronic(newName, newPrice, newStock, warranty);
          break;

        // Fruits (sugar)
        default:
          const sugar = prompt("Masukkan tingkat kadar gula :");
          newProduct = new Fruits(newName, newPrice, newStock, sugar);
          break;
      }

      // Masukkan array baru ke dalam array fruits
      products.push(newProduct);

      alert(createList(products, "Daftar produk"));
      break;

    case 3:
      const productList = createList(products, "Menghapus produk");
      // selectedIndex = 0 (Apple)
      var selectedIndex = parseInt(prompt(productList));

      // menampilkan daftar buah dan memilih buah untuk dihapus
      // index dari buah terpilih akan disimpan ke variable selIndex
      products.splice(selectedIndex, 1);

      alert(createList(products, "Daftar produk"));
      break;

    case 4:
      // [name, price, qty]
      var cart = [];

      var isShoping = true;
      while (isShoping) {
        // Tampilkan daftar buah dan minta user untuk memilih
        const productList = createList(products, "Membeli produk");

        // 1 --> Grape
        var selectedIndex = parseInt(prompt(productList));

        // var [selName, selPrice, selStock] = ["Grape", 15000, 7]
        // selectedName = "Grape"
        // selectedPrice = 15000
        // selectedStock = 7
        var { name, price, stock } = products[selectedIndex];

        while (true) {
          // Minta user input qty
          // ["Grape", 15000, 7]
          var qty = parseInt(
            prompt(`Masukan quantity untuk ${name}, stock: ${stock}`)
          );

          // Jika melebihi stock, minta input ulang
          if (qty > stock) {
            alert(
              `Quantity yang diminta ${qty}, melebihi jumlah stock ${stock}`
            );
          } else {
            // Jika tidak melebihi stock, masukan buah yang terpilih ke dalam keranjang
            // cart.push(["Grape", 15000, 5]);
            cart.push({
              name,
              price,
              qty,
            });
            // Kurangi stock buah yang dimasukkan ke keranjang
            // ["Grape", 15000, 2]
            products[selectedIndex].stock -= qty;
            break;
          }
        }

        // Tampilkan isi keranjang dan tanyakan user apakah ingin beli buah lainnya ?

        var cartList = createList(cart, "Keranjang", 0);

        cartList += "\nApakah ingin belanja lainnya ?";

        // OK -> true
        // Cancel -> false
        isShoping = confirm(cartList);
      }

      var finalPrice = 0;

      // cart = {name, price, qty, total}
      cart.forEach((val) => {
        // total price per buah
        // Price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut
        val.total = val.qty * val.price;

        // final price kesuluhan
        finalPrice += val.total;
      });

      var finalReport = "";

      cart.forEach((val) => {
        const { name, price, qty, total } = val;
        finalReport += `${name} : ${price} x ${qty} = ${total}\n`;
      });

      while (true) {
        var money = parseInt(
          prompt(`Detail Belanja\n\n${finalReport}\nTotal : ${finalPrice}`)
        );

        var margin = Math.abs(money - finalPrice);

        if (money < finalPrice) {
          alert(
            `Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`
          );
        } else {
          if (money > finalPrice) {
            alert(`Terimakasih, uang kembalian Anda ${margin}`);
          } else {
            alert(`Terimakasih`);
          }
          break;
        }
      }

      cart = [];
      break;

    case 5:
      showMenu = false;
      break;
  }
}
