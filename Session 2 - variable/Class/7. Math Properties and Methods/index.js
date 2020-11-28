// S2 - Slide 34

// Properties = variabel di dalam object
// Object Math memiliki property bernama PI
Math.PI
// 3.141592653589793
console.log(Math.PI)

// Methods = function di dalam object
// function = kode javascript yang memiliki sepasang tanda kurung di belakang.

// Object Math memiliki method abs
Math.abs()
// Object console memiliki method log
console.log()

// function = berdiri sendiri
typeof(23)
// method = dimiliki oleh object
console.log()
Math.abs()


// Math Methods

// Absolute, mengubah bilangan negatif menjadi positif
// Hasil dari Math.abs() disimpan ke variabel result
var result = Math.abs(-4.7)
console.log(result)

// Power, memangkatkan bilangan
// Delapan pangkat dua
var result = Math.pow(8, 2)
console.log(result)

// Square root, mencari akar dua bilangan 
// Akar dua dari 64
var result = Math.sqrt(64)
console.log(result)

// Cube Root, mencari akar tiga bilangan
// Akar tiga dari 64
var result = Math.cbrt(8)
console.log(result)

// Round, membulatkan bilangan mengikuti aturan pembulatan
var result = Math.round(4.7) // 5
console.log(result)

var result = Math.round(4.4) // 4
console.log(result)

// Floor, membulatkan ke bawah
var result = Math.floor(4.7) // 4
console.log(result)

// Ceil, membulatkan ke atas
var result = Math.ceil(4.4) // 5
console.log(result)

// Min, mencari nilai terkecil
var result = Math.min(1, 3, 5) // 1
console.log(result)

// Max, mencari nilai terbesar
var result = Math.max(1, 3, 5) // 5
console.log(result)