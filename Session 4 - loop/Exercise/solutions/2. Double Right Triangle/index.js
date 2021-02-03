/////////////////////////
// DOUBLE RIGHT TRIANGLE
/////////////////////////

// 1. Membuat segitiga siku - siku terbalik
// 2. Membuat segitiga siku - siku
// 3. Salah satu ujung dari segitiga siku - siku dihilangkan

// baris ke 5 : * * * * *
// baris ke 4 : * * * *
// baris ke 3 : * * *
// baris ke 2 : * *
// baris ke 1 : *

var stars = ''
var rows = 5

for (var i = rows ; i >= 1 ; i--) {

    for (var j = 1 ; j <= i ; j++ ){

        stars += ' * '

    }

    stars += '\n'

}


// baris ke 2 : * *
// baris ke 3 : * * *
// baris ke 4 : * * * *
// baris ke 5 : * * * * *

for (var i = 2 ; i <= rows ; i++) {

    for (var j = 1 ; j <= i ; j++ ){

        stars += ' * '

    }

    stars += '\n'

}

console.log(stars)
