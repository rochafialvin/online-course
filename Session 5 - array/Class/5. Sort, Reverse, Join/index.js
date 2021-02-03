//////////////////////////////////////////////////////////////////////
// SORT : Mengurutkan data pada array secara ascending (0 - 9 / a - z)
//////////////////////////////////////////////////////////////////////

var animals = ["anoa", "dragon", "cameleon", "bird", "cat"]

console.table(animals)

animals.sort()

console.table(animals)

var numbers = [32, 11, 41 , 2]

numbers.sort()

console.table(numbers)


/////////////////////////////////////////////////
// REVERSE : Membalikkan urutan data pada array
/////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"]

console.table(days)

days.reverse()

console.table(days)

/////////////////////////////////////////////////////////////////
// JOIN : Menggabungkan data pada array dengan karakter tertentu
/////////////////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"]

var joinDash = days.join(" - ")
console.log(joinDash)

var joinComma = days.join(", ")
console.log(joinComma)

var joinSpace = days.join(" ")
console.log(joinSpace)

var joinAnd = days.join(" and ")
console.log(joinAnd)
