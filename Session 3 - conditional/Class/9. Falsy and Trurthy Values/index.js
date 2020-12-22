// Falsy values : Nilai yang akan dibaca sebagai false
// 0 , "", Null, Undefined, NaN

var falResult = Boolean(0)
console.log(falResult)

// String kosong
console.log(Boolean(""))
// Null
console.log(Boolean(null))
// Undefined
console.log(Boolean(undefined))
// NaN
console.log(Boolean(NaN))

// Truthy values : Nilai yang akan dibaca sebagai true
// Selain dari falsy values

var truResult = Boolean(23)
console.log(truResult)

// Nilai negatif
console.log(Boolean(-23));
// String berisi karakter
console.log(Boolean("Hello"));
// String berisi satu spasi
console.log(Boolean(" "));
// Array dengan data
console.log(Boolean(["sunday", "tuesday"]));
// Array kosong
console.log(Boolean([]));


// Conditional statement with falsy or truthy values
var value = -23.345

if(value){
    console.log(`${value} adalah : Truthy Value`);
} else {
    console.log(`${value} adalah : Falsy Value`);
}
