/////////////////////////////////
// SLICE : Copy value dari array
/////////////////////////////////

/*

    Syntax

    things.slice(start index, end index )

    start index : index awal dari data yang akan dicopy
    end index : index akhir dari data yang akan dicopy (tidak termasuk)

*/


var fruits = ["apple", "banana", "cherry", "lemon", "watermelon"]

// Copy mulai dari index 1 sampai 3
// ["banana", "cherry", "lemon"]
var fruSlice = fruits.slice(1, 4)

// Copy mulai dari index 2 sampai habis
// ["cherry", "lemon", "watermelon"]
var fruSliceTillTheEnd = fruits.slice(2)

console.table(fruSlice)
console.table(fruSliceTillTheEnd)
console.table(fruits)



/* 

    Method yang mengubah nilai asli :
        1. push
        2. pop
        3. shift
        4. unshift
        5. splice

    Method yang tidak mengubah nilai asli (hasil operasinya disimpan ke variabel baru) :
        1. slice 
        2. includes
        3. indexOf

*/


/////////////////////////////////////////////////////////////////////
// INCLUDES : Memeriksa apakah suatu array mengandung value tertentu
/////////////////////////////////////////////////////////////////////

var colors = ["black", "grey", "white", "red", "green", "blue"]
// true
var colRed = colors.includes("red")
// false
var colPurple = colors.includes("purple")
// false
var colRedCapital = colors.includes("Red")

///////////////////////////////////////////////////////
// INDEXOF : Mencari index dari suatu data pada array
///////////////////////////////////////////////////////

var colors = ["black", "grey", "white", "red", "green", "blue"]
// 3
var idxRed = colors.indexOf("red")
// 1
var idxGrey = colors.indexOf("grey")
// -1
var idxPurple = colors.indexOf("purple")