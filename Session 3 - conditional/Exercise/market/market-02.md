## MARKET V.1.2

### Specifications :

- Dari versi sebelumnya, tambahkan variable stock untuk setiap produk.

- Jika user menginput jumlah quantity melebihi stock.
    - Qty buah tersebut akan menjadi sejumlah stock yang ada.
    - Format alert : "Permintaan melebihi stock, qty akan terisi sesuai jumlah stock yaitu (stock)"

- Lanjut Menampilkan total biaya yang harus dibayar, sekaligus meminta user untuk menginput sejumlah uang untuk membayar. 

- Saat user sudah memasukkan sejumlah uang. akan terdapat tiga kondisi berbeda, dan setiap kondisi akan memiliki alurnya masing - masing untuk dijalankan

    - Kondisi 1 : Jika user menginput dengan jumlah kurang dari seharusnya
        - Munculkan alert ' Transaksi dibatalkan, Yang anda masukkan kurang (nominal kurang) '
    - Kondisi 2 : Jika user menginput dengan jumlah lebih dari seharusnya
        - Munculkan alert ' Terimakasih, Uang kembali untuk Anda (nominal kembali) '
    - Kondisi Terakhir  : Jika user menginput dengan jumlah yang sama dari seharusnya
        - Munculkan alert ' Terimakasih '