////////////////
// MARKET V.1.5
////////////////

/*
    1. Ubah looping yang menggunakan for loop menjadi menggunakan method for each, beberapa diantaranya:
        a. Membuat list / daftar buah
        b. Meminta jumlah qty untuk setiap produk
        c. Menghitung total harga
        d. Membuat detail belanja
    2. Buatlah satu buah function yang berfungsi untuk membuat list produk. Jika sekarang masih menggunakan copy paste. Maka buatlah satu function yang akan mengerjakan ini, dan panggil function ini di setiap kita ingin menampilkan list buah.

*/

// [name, price, stock]
var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

// Function untuk menampilkan list buah
var showList = () => {
  // Variable awal yang akan menyimpan list dari buah
  var fruitList = "Daftar buah\n\n";

  fruits.forEach((fruit, i) => {
    // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
    fruitList += `${i}. ${fruit[0]} || Rp.${fruit[1]} || stock : ${fruit[2]}\n`;
  });

  // Menampilkan daftar buah
  alert(fruitList);
};

// While 'menu utama', akan menampilkan menu selama user belum memilih untuk keluar (pilihan 5)
while (true) {
  var menu = parseInt(
    prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
    `)
  );

  // Jika memilih menu 1, Menampilkan daftar buah
  if (menu == 1) {
    // Memanggil function untuk menampilkan list buah
    showList();

    // Jika memilih menu 2, Menambah buah
  } else if (menu == 2) {
    // Input nama, harga, stock untuk buah yang baru
    var newName = prompt("Masukkan nama buah :");
    var newPrice = parseInt(prompt("Masukkan jumlah harga satuan :"));
    var newStock = parseInt(prompt("Masukkan jumlah stock :"));

    // Dibuat menjadi satu array dengan urutan layaknya data pada fruits
    var newFruit = [newName, newPrice, newStock];

    // Array yang sudah jadi di push ke array fruits
    fruits.push(newFruit);

    // Memanggil function untuk menampilkan list buah
    showList();

    // Jika memilih menu 3, Menghapus buah
  } else if (menu == 3) {
    // Variable awal yang akan menyimpan list dari buah
    var fruitList = "Menghapus buah:\n\n";

    fruits.forEach((fruit, i) => {
      // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
      fruitList += `${i}. ${fruit[0]} || Rp.${fruit[1]} || stock : ${fruit[2]}\n`;
    });

    // Menampilkan daftar buah dan memilih buah untuk dihapus
    // index dari buah terpilih akan disimpan ke variable selIndex
    var selIndex = parseInt(prompt(fruitList));

    // Menghapus satu data pada array
    fruits.splice(selIndex, 1);

    // Memanggil function untuk menampilkan list buah
    showList();

    // Jika memilih menu 4, Membeli buah
  } else if (menu == 4) {
    var cart = [];

    // While 'memilih buah' , akan berulang untuk memilih buah yang ingin dibelanjakan
    while (true) {
      // Variable awal yang akan menyimpan list dari buah
      var fruitList = "Membeli buah:\n\n";

      fruits.forEach((fruit, i) => {
        // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
        fruitList += `${i}. ${fruit[0]} || Rp.${fruit[1]} || stock : ${fruit[2]}\n`;
      });

      // Menampilkan daftar buah dan memilih buah untuk dibeli
      var selIndex = parseInt(prompt(`${fruitList}`));

      // While 'Quantity', yang akan berulang untuk meminta qty jika masih melebihi stock
      while (true) {
        // Untuk nama, price, dan stock dari produk terpilih dimasukkan ke dalam variable untuk mempersingkat
        var selName = fruits[selIndex][0];
        var selPrice = fruits[selIndex][1];
        var selStock = fruits[selIndex][2];

        // Jumlah qty buah yang dibeli dengan menampilkan nama buah dan stock yang ada pada index nol
        var selQty = parseInt(
          prompt(`Masukkan quantity untuk ${selName}, Stock : ${selStock}`)
        );

        // Jika qty dari buah yang dipilih melebihi stock
        if (selQty > selStock) {
          alert(
            `Quantity yang diminta ${selQty}, melebihi jumlah stock ${selStock} `
          );
        } else {
          // Masukkan ke keranjang
          carts.push([selName, selPrice, selQty]);

          // Kurangi stock buah yang sudah masuk ke keranjang
          fruits[selIndex][2] -= selQty;

          break;
        }
      }

      // Siapkan variable untuk list buah yang ada pada keranjang
      var cartList = "Keranjang:\n\n";

      carts.forEach((cart, i) => {
        // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable cartlist
        cartList += `${i}. ${cart[0]} || Rp.${cart[1]} || stock : ${cart[2]}\n`;
      });

      var again = prompt(
        `${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`
      );

      // Jika menjawab tidak, keluar dari while 'memilih buah'
      if (again.toLowerCase() == "tidak") {
        break;
      }
    }

    // Keluar dari while 'memilih buah' , lanjutkan menghitung harga yang harus dibayar

    // Menghitung total harga
    var finalPrice = 0;

    carts.forEach((cart) => {
      // total price per buah
      // Price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut
      cart[3] = cart[1] * cart[2];

      // final price kesuluhan
      finalPrice += cart[3];
    });

    // Menampilkan detail belanja
    var finalReport = "";

    carts.forEach((cart) => {
      // cart = [name, price, qty, totalPrice]
      finalReport += `${cart[0]} : ${cart[1]} x ${cart[2]} = ${cart[3]}\n`;
    });

    // While 'input uang', dijalankan untuk meminta inputan jumlah uang dari user
    // akan terus berulang selama uang yang dimasukkan oleh user masih kurang dari yang seharusnya
    while (true) {
      // Menampilkan informasi belanja termasuk total uang yang harus dibayar
      var money = parseInt(
        prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
      );
      var margin = Math.abs(money - finalPrice);

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
