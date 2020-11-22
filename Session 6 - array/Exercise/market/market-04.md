## MARKET V.1.4

- Hanya boleh ada satu block while untuk input jumlah qty semua produk.
- Gunakan for loop untuk menghitung total harga setiap barang.
- Gunakan for loop untuk menghitung total harga dari seluruh barang.
- Sekarang user tidak hanya bisa belanja namun ada 4 pilihan menu lainnya
- App akan memiliki 4 menu utama :
    - 1 . Menampilkan daftar buah
    - 2 . Menambah buah
    - 3 . Menghapus buah
    - 4 . Membeli buah
    - 5 . Exit

- Untuk setiap selesai menambah dan menghapus buah akan menampilkan daftar buah terbaru.

- Dalam pembelian, user dapat memilih buah apa yang akan dibeli, jadi tidak harus membeli semua buah. Saat memilih menu membeli buah, tampilkan list buah berikut dengan informasi stock dan juga harga satuan setiap buahnya. User nanti akan memilih buah apa yang ingin dibeli.

- Saat user memilih salah satu buah, munculkan prompt untuk menanyakan jumlah qty yang ingin dibeli dari buat tersebut. Setiap selesai menginput jumlah qty pada buah yang diinginkan, masukkan buah tersebut kedalam keranjang, lalu kurangi stock buah tersebut dengan jumlah qty yang diminta

- Tampilkan isi dari keranjang, yaitu berupa buah apa yang sudah dipesan berikut dengan jumlah qty nya, disaat bersamaaan tanyakan kembali kepada user apakah masih ingin belanja buah lainnya atau tidak, menggunakan prompt yang nantinya user akan diminta menginput jawaban 'ya' atau 'tidak'. Jika user memilih 'ya', maka tampilkan list buah kembali seperti sebelumnya, dan user kembali memilih buah untuk dibeli. Jika user memilih tidak maka lanjutkan ke proses penghitungan total dan pembayaran.

- Jika pembayaran selesai, maka kosongkan kembali array keranjang nya.

- Clue : variable fruits kini berisi array dua dimensi. Dimana isi dari array tersebut adalah array juga yang setiap arraynya akan menyimpan informasi nama buah, harga satuan buah, dan stock buah yang dimiliki.

- Clue : membutuhkan satu buah array baru sebagai keranjang. Gunanya untuk menyimpan data buah yang dipilih oleh user untuk dibeli. Jika user membeli dua macam buah, maka array ini hanya akan berisi dua data saja.




