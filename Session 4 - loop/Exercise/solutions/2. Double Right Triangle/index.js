//////////////////////////////
// Segitiga siku - siku ganda
/////////////////////////////

// 1. Membuat segitiga siku - siku terbalik
// 2. Membuat segitiga siku - siku
// 3. Salah satu ujung dari segitiga siku - siku dihilangkan

var stars = ''
var row = 5

// Loop i untuk membuat baris
// loop sebanyak nilai yang disimpan didalam "row"
for(var i = 1; i <= row; i++){
    
    // loop j untuk menambahkan bintang
    // Menghitung mundur dari banyak bari ke posisi baris sekarang ( " i " )
    for(var j = row; j >= i; j--){
        stars += ' * '
    }
    
    stars += '\n'
}


// Loop i untuk membuat baris
// loop sebanyak nilai yang disimpan didalam "row"
// "i" dimulai dari 2 untuk menghapus 1 bintang di akhir
for(var i = 2; i <= row; i++){
    
    // loop j untuk menambahkan bintang
    // loop sebanyak nilai yang disimpan didalam "i"
    // "i" adalah posisi baris yang sedang dikerjakan
    for(var j = 1; j <= i; j++){

        stars += ' * '

    }

    stars += '\n'
}

console.log(stars)