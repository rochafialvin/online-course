// Square


// * * * 
// * * *
// * * *

/////////////////////////
// Membuat vertical line
////////////////////////
var stars = ''

for(var i = 0; i < 5; i++){

    // Menambahkan bintang lalu enter
    stars += '*' + '\n'
}
console.log(stars)

//////////////////////
// Membuat horizontal
/////////////////////

var stars = ''
// Set-up for loop untuk dapat melakukan 5 kali loop
for(var i = 0; i < 5; i++){
    // Setiap loop akan menjumlahkan nilai "stars" sebelumnya dengan nilai satu bintang
    stars += ' * '

}

// Menampilkan hasil
console.log(stars);


///////////////////
// Membuat persegi
//////////////////

// Melakukan looping untuk membuat tiga baris
// Setiap barisnya, melakukan looping untuk menambahkan tiga bintang dan enter

var stars = ''
var row = 5

// Loop i untuk membuat baris
for (i = 1; i <= row; i++) {

    // loop j untuk menambahkan bintang
    for(j = 1; j <= row; j++){

        stars += ' * '

    }

    stars += '\n'
}
console.log(stars);