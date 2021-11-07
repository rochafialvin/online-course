////////////////////
// PYRAMID TRIANGLE
////////////////////

// 1. s  s  s  s  *
// 2. s  s  s  *  *  *
// 3. s  s  *  *  *  *  *
// 4. s  *  *  *  *  *  *  *
// 5. *  *  *  *  *  *  *  *  *

// rows                 : 5
// posisi baris ( i )   : 1 2 3 4 5
// jumlah spasi ( j )   : 4 3 2 1   ( rows - i )
// jumlah bintang ( k ) : 1 3 5 7 9 ?

// rows: 5
// ( i ) ( form ) ( * )  ==> (i - 1) * 2 + 1
//   1    0 1 0     1
//   2    1 1 1     3
//   3    2 1 2     5
//   4    3 1 3     7
//   5    4 1 4     9

// Contoh saat baris ke lima ( i = 5)
// i = 5
// 1 sisi : (i - 1)         = 4
// 2 sisi : (i - 1) * 2     = 8
// total : (i - 1) * 2 + 1  = 9

var stars = "";
var rows = 7;

// Loop i untuk membuat baris
// Loop sebanyak nilai yang disimpan pada 'rows'
for (var i = 1; i <= rows; i++) {
  // Loop j untuk menambahkan spasi setiap baris
  for (var j = rows - i; j >= 1; j--) {
    stars += "   ";
  }

  // Loop k untuk menambahkan bintang setiap baris
  for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
    stars += " * ";
  }

  // Menambahkan new line
  stars += "\n";
}

// Menampilkan hasil akhir
console.log(stars);

///////////////////////////////////////
// SORT DESCENDING ( 9 - 0 ) ( z - a )
///////////////////////////////////////

// var names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];
