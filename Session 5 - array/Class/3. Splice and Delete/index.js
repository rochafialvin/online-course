//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan data
//////////////////////////////////////////

/*

  Syntax

  array.splice.(index, amount, new data)

  index : index awal dimulainya operasi (menghapus / menambah)
  amount : jumlah data yang ingin dihapus mulai dari 'index'
  new data : data baru yang akan ditambahkan ke array

*/

/////////////////////////
// Case : Menghapus data
/////////////////////////

// Membuat array yang menyimpan empat value
var things = ["book", "pen", "clock", "paper"]
// Dimulai dari index 1 , hapus 2 buah value
things.splice(1, 2)
// Menampilkan array things dalam bentuk table
console.table(things)

// Membuat array yang menyimpan empat value
things  = ["book", "pen", "clock", "paper"]
// Dimulai dari index 0 , hapus 3 buah value
things.splice(0, 3)
// Menampilkan array things dalam bentuk table
console.table(things)

// Membuat array yang menyimpan empat value
things  = ["book", "pen", "clock", "paper"]
// Dimulai dari index 1 , hapus 1 buah value
things.splice(1, 1)
// Menampilkan array things dalam bentuk table
console.table(things)

/////////////////////////
// Case : Menambah data
/////////////////////////

// Membuat array yang menyimpan empat value
var things = ["book", "pen", "clock", "paper"]
// Dimulai dari index 1
// Hapus 0 buah value
// Tambahkan value baru yaitu "pencil" pada index 1
things.splice(1, 0, "pencil")
// Menampilkan array things dalam bentuk table
console.table(things)

// Dimulai dari index 3
// Hapus 0 buah value
// Tambahkan value baru yaitu "magazine" pada index 3 dan 1987 pada index 4
things.splice(3, 0, "magazine", 1987)
// Menampilkan array things dalam bentuk table
console.table(things)


//////////////////////////////////////
// Case : Menambah dan Menghapus data
//////////////////////////////////////

// Membuat array yang menyimpan empat value
var things = ["book", "pen", "clock", "paper"]
// Menampilkan array things dalam bentuk table
console.table(things)

// Dimulai dari index 1
// Hapus 2 buah value
// Tambahkan value baru yaitu "door" pada index 1
things.splice(1, 2, "door")
// Menampilkan array things dalam bentuk table
console.table(things)

// Dimulai dari index 1
// Hapus 2 buah value
// Tambahkan value baru yaitu "door" pada index 1
things.splice(1, 1, "middle", "double")
// Menampilkan array things dalam bentuk table
console.table(things)


///////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan berisi undefined
///////////////////////////////////////////////////////////////

// Membuat array yang menyimpan empat value
var things = ["book", "pen", "clock", "paper"]
// Menghapus value pada array things index ke 0, dan menggantikannya dengan undefiend
delete things[0]
// Menghapus value pada array things index ke 2, dan menggantikannya dengan undefiend
delete things[2]
// Menampilkan array things pada console
console.log(things)
