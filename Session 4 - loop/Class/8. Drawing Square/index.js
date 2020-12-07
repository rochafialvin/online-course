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
    // Setiap loop akan menambahkan satu bintang
    stars += ' * '

}

// Menampilkan hasil
console.log(stars);


///////////////////
// Membuat persegi
//////////////////

// * * *
// * * *
// * * *

// Melakukan looping untuk membuat tiga baris
// Setiap barisnya, melakukan looping untuk menambahkan tiga bintang dan enter
// Banyak baris = banyak bintang per baris

var stars = ''
var row = 3

// Loop i untuk membuat baris
// loop sebanyak nilai yang disimpan didalam "row"
for (i = 1; i <= row; i++) {

    // loop j untuk menambahkan bintang
    // loop sebanyak nilai yang disimpan didalam "row"
    for(j = 1; j <= row; j++){

        stars += ' * '

    }

    // Memindahkan kursor ke baris berikutnya
    stars += '\n'
}

console.log(stars);