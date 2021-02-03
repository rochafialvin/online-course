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

console.table(fruits)

// copy banana dan cherry
var banCherry = fruits.slice(1, 3)
console.table(banCherry)

// copy banana, cherry, dan lemon
// tidak ada index ke 5 namun tetap berjalan baik
var banCheMon = fruits.slice(2, 5)
// copy value dari index 2 hingga index terakhir
// jika tidak menyebutkan index akhir, maka akan mengcopy hingga data terakhir
var banCheMon = fruits.slice(2)
console.table(banCheMon)


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

// Membuat array yang menyimpan 6 value
var colors =  ["black", "grey", "white", "red", "green", "blue"]

// true
var colRed = colors.includes("red")
console.log(colRed)

// false
var colPurple = colors.includes("purple")
console.log(colPurple)

// false
var colRedCapital = colors.includes("Red")
console.log(colRedCapital)

///////////////////////////////////////////////////////
// INDEXOF : Mencari index dari suatu data pada array
///////////////////////////////////////////////////////

// Membuat array yang menyimpan 6 value
var colors =  ["black", "grey", "white", "red", "green", "blue"]

// 3
var idxRed = colors.indexOf("red")
console.log(idxRed)

// 1
var idxGrey = colors.indexOf("grey")
console.log(idxGrey)

// -1
var idxPurple = colors.indexOf("purple")
console.log(idxPurple)
