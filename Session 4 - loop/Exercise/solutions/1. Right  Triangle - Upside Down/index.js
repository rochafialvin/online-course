////////////////////////////////
// Segitiga siku - siku terbalik
///////////////////////////////

// *  *  *  *  *
// *  *  *  *
// *  *  *
// *  *
// *

var stars = ''
var row = 5

////////////////////////////////////////////////////
// baris ke - i
// nilai pada "i" menunjukkan posisi baris saat ini
////////////////////////////////////////////////////

// baris ke - 1 : * * * * *
// baris ke - 2 : * * * *
// baris ke - 3 : * * *
// baris ke - 4 : * * 
// baris ke - 5 : * 

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
console.log(stars)