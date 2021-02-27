/////////////////
// MARKET V.1.4
/////////////////

/*

    1. Hanya boleh ada satu block while untuk input qty semua produk.
    2. Gunakan for loop untuk menghitung total harga setiap barang dan total harga keseluruhan
    3. Terdapat menu tambahan, total semua menu yang dimiliki antara lain :
        1. Menampilkan buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
    4. Tampilkan daftar buah setiap selesai proses menambah dan menghapus buah
    5. User kini bisa memilih buah apa yang ingin dibeli, tidak harus beli semua.
    6. Setiap user sudah menentukan qty dari suatu produk, masukkan produk tersebut ke keranjang
    7. Tampilkan isi keranjang setiap selesai memilih satu produk untuk dibeli, dibarengi pertanyaan apakah akan lanjut belanja atau tidak.
    8. Kosongkan array setelah selesai melakukan pembayaran

*/

// [ name, price, stock ]
var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

// [ name, price, qty, totalPrice ]
var cart = [];

// While 'Main Menu', akan menampilkan menu selama user belum memilih untuk keluar (pilihan 5)
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

  // Menampilkan buah
  if (menu == 1) {
    // Variable awal yang akan menyimpan list dari buah
    var fruitList = "Daftar buah\n\n";

    // Looping sebanyak buah yang ada, fruits.length = jumlah data yang ada pada array fruits
    for (var i = 0; i < fruits.length; i++) {
      // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variable fruitlist
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock : ${fruits[i][2]}\n`;
    }

    // Menampilkan daftar buah
    alert(fruitList);
  } else if (menu == 2) {
    // Input nama, harga, stock untuk buah yang baru
    var newName = prompt("Masukkan nama buah :");
    var newPrice = parseInt(prompt("Masukkan jumlah harga satuan :"));
    var newStock = parseInt(prompt("Masukkan jumlah stock :"));

    // Dibuat menjadi satu array dengan urutan layaknya data pada fruits
    var newFruit = [newName, newPrice, newStock];

    // Array yang sudah jadi, di push ke array fruits
    fruits.push(newFruit);

    // Menampilkan list buah setelah selesai menambahkan satu buah baru.
    var fruitList = `Daftar buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }

    alert(fruitList);
  } else if (menu == 3) {
    // Menampilkan daftar buah agar dipilih untuk dihapus
    var fruitList = `Menghapus buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }

    // Menampilkan daftar buah dan memilih buah untuk dihapus
    // index dari buah terpilih akan disimpan ke variable selIndex
    var selIndex = parseInt(prompt(fruitList));

    // Menghapus satu data pada array
    // index data yang akan dihapus, jumlah data yang ingin dihapus
    fruits.splice(selIndex, 1);

    // Menampilkan daftar setelah menghapus 1 data
    var fruitList = `Daftar buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
    }

    alert(fruitList);
  } else if (menu == 4) {
    // Loop 'Choosing Fruit'
    while (true) {
      // Menampilkan list buah
      var fruitList = `Membeli buah:\n\n`;

      for (var i = 0; i < fruits.length; i++) {
        fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || ${fruits[i][2]} \n`;
      }

      // index buah yang dipilih untuk dibeli
      var selIndex = parseInt(prompt(fruitList));

      // menyimpan nama, harga, dan stock buah yang terpilih ke dalam variabel tersendiri
      var selName = fruits[selIndex][0];
      var selPrice = fruits[selIndex][1];
      var selStock = fruits[selIndex][2];

      // loop untuk 'Input Quantity' dari buah yang dipilih
      while (true) {
        // jumlah stock yang ingin dibeli
        var selQty = parseInt(
          prompt(`Masukkan quantity untuk ${selName}, Stock : ${selStock} `)
        );

        // jika qty yang diminta melebihi stock yang tersedia
        if (selQty > selStock) {
          alert(
            `Quantity yang diminta ${selQty}, melebihi jumlah stock ${selStock}`
          );
        } else {
          // masukkan ke keranjang (cart)
          cart.push([selName, selPrice, selQty]);
          // kurangi stock buah yang dipesan
          fruits[selIndex][2] -= selQty;
          // keluar dari loop 'Input Quantity'
          break;
        }
      }

      // tampilkan isi keranjang
      var cartList = `Keranjang\n\n`;

      for (var i = 0; i < cart.length; i++) {
        cartList += `${i}. ${cart[i][0]} || Rp.${cart[i][1]} || ${cart[i][2]} \n`;
      }

      var again = prompt(`${cartList}\n\nIngin belanja lagi ? ( ya / tidak )`);

      // keluar dari loop 'Choosing Fruit'
      if (again == "tidak") {
        break;
      }
    }

    // hitung belanjaan
    var finalPrice = 0;

    // menghitung total harga perbuah dan total keseluruhan
    for (var i = 0; i < cart.length; i++) {
      cart[i][3] = cart[i][1] * cart[i][2];

      finalPrice += cart[i][3];
    }

    var finalReport = "";

    // Grape : 15000 * 2 = 30000
    for (var i = 0; i < cart.length; i++) {
      finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][3]}\n`;
    }

    // while 'Bill'
    while (true) {
      // menampilkan informasi belanja termasuk total uang yang harus dibayar
      var money = parseInt(
        prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`)
      );

      // selisih dari uang yang diberikan dengan jumlah uang yang harus dibayarkan
      var margin = Math.abs(money - finalPrice);

      // jika uang yang diberikan kurang dari yang seharusnya
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

        // kembalikan cart menjadi kosong
        cart = [];
        // keluar dari loop 'Bill'
        break;
      }
    }
  } else {
    // keluar dari loop 'Main Menu'
    break;
  }
}
