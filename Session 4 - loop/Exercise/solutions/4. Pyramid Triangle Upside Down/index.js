////////////////////////////////
// PYRAMID TRIANGLE UPSIDE DOWN
///////////////////////////////


// 5. *  *  *  *  *  *  *  *  *
// 4. s  *  *  *  *  *  *  *
// 3. s  s  *  *  *  *  *
// 2. s  s  s  *  *  *
// 1. s  s  s  s  *

// Jumlah spasi ( j ) = rows - i
// Jumlah bintang ( k ) = (i - 1) * 2 + 1

var stars = ''
var rows = 5

// Loop untuk menentukan banyak baris
for (var i = rows ; i >= 1 ; i--) {

    // Loop untuk menentukan jumlah spasi tiap baris
    for (var j = (rows - i) ; j >= 1 ; j--){

        stars += '   '

    }

    // Loop untuk menentukan jumlah bintang tiap baris
    for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++) {

        stars += ' * '

    }

    // Menambahkan new-line tiap baris
    stars += '\n'

}

// Menampilkan hasil akhir
console.log(stars);


var stars = ''
var rows = 5


for (var i = rows ; i >= 1 ; i--) {


    for (var j = (rows - i) ; j >= 1 ; j--){

        stars += '   '

    }

    for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++) {

        stars += ' * '

    }


    stars += '\n'

}

console.log(stars);
