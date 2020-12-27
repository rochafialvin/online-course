var stars = ''
var rows = 7


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

for (var i = rows ; i >= 1 ; i--){

    // space
    for(var j = (rows - i); j >= 1 ; j--){
        stars += '   '
    }

    // stars
    for(var k = 1 ; k <= (((i - 1) * 2) + 1) ; k++) {
        stars += ' * '
    }

    stars += '\n'

}

console.log(stars);