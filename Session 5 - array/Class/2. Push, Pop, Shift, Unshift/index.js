////////////////////////////////////////////////
// PUSH : Menambahkan value pada index terakhir
// POP : Menghapus value pada index terakhir
///////////////////////////////////////////////

var things = ["book", "pen", "clock"]

// Menambah data "jacket" pada index terakhir
// ["book", "pen", "clock", "Jacket"]
things.push("jacket")

// Menambah data "apple" dan "banana" pada index terakhir
// ["book", "pen", "clock", "Jacket", "apple", "banana"]
things.push("apple", "banana")

// Menambah data "pencil", 3, dan true pada index terakhir
// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3, true]
things.push("pencil", 3, true)

// Menampilkan array things dalam bentuk table
console.table(things)

// Mengeluarkan satu value ( true ) yang ada pada index terakhir array things
// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3]
things.pop()
// Mengeluarkan satu value ( 3 ) yang ada pada index terakhir array things
// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil"]
things.pop()

// Menampilkan array things dalam bentuk table
console.table(things)



////////////////////////////////////////////////
// UNSHIFT : Menambahkan value pada index pertama
// SHIFT : Menghapus value pada index pertama
///////////////////////////////////////////////

// Membuat array yang menyimpan tiga value
var things = ["book", "pen", "clock"]

// Menambah data "jacket" pada index awal
// ["Jacket", "book", "pen", "clock"]
things.unshift("jacket")

// Menambah data "apple" dan "banana" pada index awal
// ["apple", "banana", "Jacket", "book", "pen", "clock"]
things.unshift("apple", "banana")

// Menambah data "pencil", 3, dan true pada index awal
// ["pencil", 3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
things.unshift("pencil", 3, true)

// Menampilkan array things dalam bentuk table
console.table(things)

// Mengeluarkan satu value ( pencil ) yang ada pada index awal array things
// [3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
things.shift()

// Mengeluarkan satu value ( 3 ) yang ada pada index awal array things
// [true, "apple", "banana", "Jacket", "book", "pen", "clock"]
things.shift()

console.log(things)
