
var stars = ''
var rows = 7

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