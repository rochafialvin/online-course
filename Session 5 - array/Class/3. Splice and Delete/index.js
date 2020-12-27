//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan data
//////////////////////////////////////////


/*
    Syntax

    things.splice(index, amount, new data)

    index : index awal dimulainya operasi (menambah / menghapus)
    amount : jumlah data yang ingin dihapus mulai dari 'index'
    new data : data baru yang akan ditambahkan ke array

*/

/////////////////////////
// Case : Menghapus data
/////////////////////////


var things = ["book", "pen", "clock", "paper"]

// Dimulai dari index 0 , hapus 2 buah data
// ["clock", "paper"]
things.splice(0, 2)

things = ["book", "pen", "clock", "paper"]

// Dimulai dari index 1 , hapus 3 buah data
// ["book"]
things.splice(1, 3)

things = ["book", "pen", "clock", "paper"]

// Dimulai dari index 1 , hapus 1 buah data
// ["book", "clock", "paper"]
things.splice(1, 1)

things = ["book", "pen", "clock", "paper"]

// Dimulai dari index 0 , hapus dua buah data
// ["book", "pen", "clock", "paper"]
things.splice(1, 0)

// ["book", "pen", "clock", "paper"]
console.log(things)




/////////////////////////
// Case : Menambah data
/////////////////////////

var things = ["book", "pen", "clock", "paper"]

// Dimulai dari index 1, hapus 0 data, tambahkan "pencil"
// ["book", "pencil", "pen", "clock", "paper"]
things.splice(1, 0 , "pencil")

// Dimulai dari index 3, hapus 0 data, tambahkan "magazine", 1987
// ["book", "pencil", "pen", "magazine", 1987, "clock", "paper"]
things.splice(3, 0 , "magazine", 1987)

// Dimulai dari index 2, hapus 3 data, tambahkan "door"
// ["book", "pencil", "door", "clock", "paper"]
things.splice(2, 3, "door")

// Dimulai dari index 1, hapus 4 data, tambahkan "end"
// ["book", "end"]
things.splice(1, 4, "end" )

// ["book", "end"]
console.log(things)



///////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan berisi undefined
///////////////////////////////////////////////////////////////

var things = ["book", "pen", "clock", "paper"]

// [undefined, "pen", "clock", "paper"]
delete things[0]

// [undefined, "pen", undefined, "paper"]
delete things[2]

console.log(things);
console.log(things[0])
console.log(things[1])