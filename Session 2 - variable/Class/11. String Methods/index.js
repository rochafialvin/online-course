// S2 - Slide 54

var x = "Hello World!";

// Banyak karakter pada strings
console.log(x.length);

// Mencari index dari string World di dalam string X
console.log(x.indexOf('World!'));

// Mencopy bagian tertentu dari strings
// index awal, berapa banyak character yang ingin di copy
console.log(x.substr(5, 3));

// Mencopy bagian tertentu dari strings
// index awal, index akhir (tidak termasuk)
console.log(x.slice(5, 8));

// Memecah string menjadi beberapa bagian berpatokan dengan karakter tertentu
console.log(x.split(' '));

var y = "hello"
var z = "WORLD"

// Mengubah string menjadi huruf kapital
console.log(x.toUpperCase())

// Mengubah string menjadi huruf kecil
console.log(x.toLowerCase())

// Mengubah satu huruf l dengan n
console.log(x.replace('l', 'n'))

// Mengubah semua huruf l dengan n
console.log(x.replace(/l/g, 'n'))

var text = "Hello World"

// true
text.includes("World")
// true
text.includes("orld")
// false
text.includes("world")