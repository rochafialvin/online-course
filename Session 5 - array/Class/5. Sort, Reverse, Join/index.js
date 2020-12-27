//////////////////////////////////////////////
// SORT : Mengurutkan data pada array secara 
//////////////////////////////////////////////


var animals = ["anoa", "dragon", "cameleon", "bird"]

console.table(animals)

animals.sort()

console.table(animals)



/////////////////////////////////////////////////
// REVERSE : Membalikkan urutan data  pada array
/////////////////////////////////////////////////


var days = ["sunday", "monday", "tuesday", "wednesday"]

console.table(days)

days.reverse()

console.table(days)


/////////////////////////////////////////////////////////////////
// JOIN : Menggabungkan data pada array dengan karakter tertentu
/////////////////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"]

// sunday - monday - tuesday - wednesday
var joinDash = days.join(" - ")
console.log(joinDash);

// sunday, monday, tuesday, wednesday
var joinComa = days.join(", ")
console.log(joinComa);

// sunday monday tuesday wednesday
var joinSpace = days.join(" ")
console.log(joinSpace);