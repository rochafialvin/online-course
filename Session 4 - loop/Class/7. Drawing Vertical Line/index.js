///////////////////
// Drawing Vertical
///////////////////

//////////////////////////////////
// Compare dengan horizontal code
/////////////////////////////////

var stars = ''

// Loop sebanyak lima kali
for(var i = 0; i < 5; i++){

    // Menambahkan satu bintang untuk setiap kali loop
    stars += ' * '

}

// Menampilkan hasilnya pada terminal
console.log(stars);

////////////////////////
// Membuat vertical line
////////////////////////

/*
  *\n*\n*\n*\n

  *
  *
  *
  *
  *
*/

var stars = ''

// Loop sebanyak lima kali
for(var i = 0; i < 5; i++){

    // // Menambahkan satu bintang dan new l untuk setiap kali loop
    stars += '*' + '\n'
}

console.log(stars)
