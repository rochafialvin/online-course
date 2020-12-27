////////////////////////////////////////////////
// PUSH : Menambahkan value pada index terakhir
// POP : Menghapus value pada index terakhir
///////////////////////////////////////////////

var things = ["book", "pen", "clock"]

// ["book", "pen", "clock", "Jacket"]
things.push("jacket")

// ["book", "pen", "clock", "Jacket", "apple", "banana"]
things.push("apple", "banana")

// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3, true]
things.push("pencil", 3, true)

// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3]
things.pop()

// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil"]
things.pop()

// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil"]
console.log(things);



////////////////////////////////////////////////
// UNSHIFT : Menambahkan value pada index pertama
// SHIFT : Menghapus value pada index pertama
///////////////////////////////////////////////

var things = ["book", "pen", "clock"]

// ["Jacket", "book", "pen", "clock"]
things.unshift("jacket")

// ["apple", "banana", "Jacket", "book", "pen", "clock"]
things.unshift("apple", "banana")

// ["pencil", 3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
things.unshift("pencil", 3, true)

// [3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
things.shift()

things.shift()

// [true, "apple", "banana", "Jacket", "book", "pen", "clock"]
console.log(things)