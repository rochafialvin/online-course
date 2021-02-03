// Operator Perbandingan
// Menghasilkan nilai boolean (true atau false)

var result = 5 > 4 // true
console.log(result)

console.log( 5 < 4 ) // false
console.log( 5 < 5 ) // false

// compare : value
console.log( 7 == 9 ) // false
console.log( 7 == 7 ) // true
console.log( 7 == "7" ) // true


// compare : value dan data type
console.log( 7 === 9 ) // false
console.log( 7 === 7 ) // true
console.log( 7 === "7" ) // false

// compare : value
console.log( 18 != 17 ) // true
console.log( 24 != 24 ) // false
console.log( 24 != "24" ) // false

// compare : value dan data type
console.log( 18 !== 17 ) // true
console.log( 24 !== 24 ) // false
console.log( 24 !== "24" ) // true


// Boleh mengikuti ujian jika membawa pensil ATAU pulpen (PILIHAN)
// Pulpen : ya | Pencil : tidak | Ujian : ya
// Pulpen : tidak | Pencil : ya | Ujian : ya
// Pulpen : tidak | Pencil : tidak | Ujian : tidak

// 7 > 8 ? false
// 7 == 8 ? false
// false
console.log( 7 >= 8) // false

// 7 < 8 ? true
// 7 == 8 ? false
// true

console.log( 7 <= 8 )
