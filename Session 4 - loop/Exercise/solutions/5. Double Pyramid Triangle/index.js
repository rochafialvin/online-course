////////////////////////////
// DOUBLE PYRAMID TRIANGLE
///////////////////////////


// 1. s  s  s  s  *
// 2. s  s  s  *  *  *
// 3. s  s  *  *  *  *  *
// 4. s  *  *  *  *  *  *  *
// 5. *  *  *  *  *  *  *  *  *

var stars = ''
var rows = 5

for (var i = 1 ; i <= rows ; i++) {

    // Spasi per baris
    for (var j = (rows - i) ; j >= 1 ; j--){

        stars += '   '

    }

    // Bintang per baris
    for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++){

        stars += ' * '

    }

    // New Line per baris
    stars += '\n'

}


// 5. *  *  *  *  *  *  *  *  *
// 4. s  *  *  *  *  *  *  *
// 3. s  s  *  *  *  *  *
// 2. s  s  s  *  *  *
// 1. s  s  s  s  *

for (var i = rows ; i >= 1 ; i--) {

    // Spasi per baris
    for (var j = (rows - i) ; j >= 1 ; j--){

        stars += '   '

    }

    // Bintang per baris
    for (var k = 1 ; k <= (i - 1) * 2 + 1 ; k++){

        stars += ' * '

    }

    // New Line per baris
    stars += '\n'

}

console.log(stars)
