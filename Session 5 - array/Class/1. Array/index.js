////////////////
// Syntax Array
////////////////

// Membuat array yang menyimpan tiga value
var things = ["books", "pen", "clock"]
// Menampilkan array things dalam bentuk table
console.table(things)
// Membuat array yang menyimpan empat value
var random = [23, "Michael", true, 3.14]
// Menampilkan array random dalam bentuk table
console.table(random)

//////////////
// Access Data
//////////////

// Index dapat dikatakan sebagai sistem penomoran data pada array yang dimulai dari nol

// Mengakses data pada array things index ke satu
console.log('things 0 : ' + things[1])
// Mengakses data pada array random index ke nol
console.log('random 0 ' + random[0])
// Mengakses data pada array random index ke satu
console.log('random 1 ' + random[1])


///////////////
// Change Data
///////////////

// Membuat array dengan tiga value
var things = ["books", "pen", "clock"]
// Menampilkan array dalam bentuk table pada console
console.table(things)
// Mengganti value pada index ke nol
things[0] = 'paper'
// Mengganti value pada index ke dua
things[2] = 'shoes'
// Menampilkan array things dalam bentuk table
console.table(things)

///////////////////
// Create New Index
///////////////////

// Membuat array dengan tiga value
var things = ["books", "pen", "clock"]
// Menambahkan data baru yang sekaligus membuat index baru
things[3] = 'shoes'
// Menampilkan array things dalam bentuk table
console.table(things)
// Menambahkan data baru yang sekaligus membuat index baru
things[5] = 'glass'
// Menampilkan array things dalam bentuk table
console.log(things)
// Menampilkan value pada index ke empat, yang mana adalah undefiend
console.log(things[4])

///////////////////
// Length of Array
///////////////////

// Menampilkan jumlah index pada arrah things menggunakan property length
console.log(`Length dari array things : ${things.length}`)
