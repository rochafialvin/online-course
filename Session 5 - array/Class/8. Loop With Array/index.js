//////////////////////////////////////////////////////////////////////////////
// LOOP WITH ARRAY : Melakukan looping untuk memproses setiap data pada array
//////////////////////////////////////////////////////////////////////////////

// Aku masih belum tau nih perbedaan horror sama thirller, yang tau tolong komen dibawah ya. waduh haha

var categories = ["Horror", "Sci-Fi", "Thriller", "Adventure", "Animation"]

/*

    Result

    Terdapat 5 kategori film :
    Horror
    Sci-Fi
    Thriller
    Adventure
    Animation

*/

// Menaruh nilai awal berupa teks yang akan muncul pada baris pertama
// akhiri dengan \n agar kata selanjutnya akan muncul dibaris baru
var info = `Terdapat 5 kategori film :\n`

// Loop sebanyak lima kali, karena memiliki lima data pada array
// Variabel i akan memiliki nilai awal 0 hingga 4 (0 1 2 3 4)
// Alasan menggunakan 0 - 4 karena ingin mengakses value pada array categories
// Categories memiliki 5 data, sehingga indexnya dari 0 hingga 4
for (var i = 0 ; i < 5 ; i++) {
    
    // Setiap loopingnya, string pada 'info' akan ditambahkan value dari array
    // Diakhiri dengan '\n' agar setiap datanya akan muncul pada baris baru
    info += `${categories[i]}\n`
    
}

// Setelah loop selesai, tampilkan hasil akhir berupa kombinasi dari semua value pada array
console.log(info)


// Final Version

var info = `Terdapat ${categories.length} kategori film :\n`

for (var i = 0 ; i < categories.length ; i++) {
    
    info += `${categories[i]}\n`
    
}
console.log(info)