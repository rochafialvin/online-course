///////////////////
// Pyramid Triangle
///////////////////

//              * 
//           *  *  * 
//        *  *  *  *  * 
//     *  *  *  *  *  *  * 
//  *  *  *  *  *  *  *  *  * 

// 1. s  s  s  s  * 
// 2. s  s  s  *  *  * 
// 3. s  s  *  *  *  *  * 
// 4. s  *  *  *  *  *  *  * 
// 5. *  *  *  *  *  *  *  *  *  

// rows                 : 5
// posisi baris ( i )   : 1 2 3 4 5
// jumlah spasi ( j )   : 4 3 2 1 0 (rows - i)
// jumlah bintang ( k ) : 1 3 5 7 9 ((i - 1) * 2 + 1)


// rows: 5
// ( i ) ( form ) ( * )
//   1    0 1 0     1
//   2    1 1 1     3
//   3    2 1 2     5
//   4    3 1 3     7
//   5    4 1 4     9

// i = 5
// 1 sisi : (i - 1)         = 4
// 2 sisi : (i - 1) * 2     = 8
// total : (i - 1) * 2 + 1  = 9




var stars = ''
var rows = 7

// Loop i untuk membuat baris
// loop sebanyak nilai yang disimpan didalam "rows"
for (var i = 1 ; i <= rows ; i++){


    // Loop untuk menambahkan spasi ("s")
    // Jumlah spasi yang ditambahkan didapatkan dengan mengurangi jumlah baris ("rows") dengan posisi bari saat ini ("i")
    // (rows - i)
    for(var j = (rows - i); j >= 1 ; j--){
        stars += '   '
    }
    
    // Loop untuk menambahkan bintang ("*")
    // Jumlah bintang yang ditambahkan didapatkan dengan rumus (((i - 1) * 2) + 1)
    for(var k = 1 ; k <= (((i - 1) * 2) + 1) ; k++) {
        stars += ' * '
    }

    stars += '\n'

}

console.log(stars);