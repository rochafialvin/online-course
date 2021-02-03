////////////////////////////////
// RIGHT TRIANGLE (siku - siku)
///////////////////////////////

// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *

// Persegi : Jumlah bintang perbaris ditentukan dari 'jumlah total' baris
// Segitiga siku2 : Jumalh bintang perbaris ditentukan dari 'posisi baris' nya.

////////////////////////////////////////////////////
// baris ke - i
// nilai pada "i" menunjukkan posisi baris saat ini
////////////////////////////////////////////////////

// baris ke - 1 : *
// baris ke - 2 : * *
// baris ke - 3 : * * *
// baris ke - 4 : * * * *
// baris ke - 5 : * * * * *

var stars = ''
var row = 5

// Loop i untuk membuat baris
// loop sebanyak nilai yang disimpan didalam "row"
for(var i = 1; i <= row; i++){

    // loop j untuk menambahkan bintang
    // loop sebanyak nilai yang disimpan didalam "i"
    // "i" adalah posisi baris yang sedang dikerjakan
    for(var j = 1; j <= i; j++){

        stars += ' * '

    }

    stars += '\n'
}

console.log(stars)
