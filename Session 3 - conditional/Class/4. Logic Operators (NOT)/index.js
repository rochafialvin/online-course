// Operator Logika
// NOT

// Membalikkan nilai yang ada didepannya

// true
// console.log(!false);
// false
// console.log(!true);

// true || false : true
console.log( (6 < 9) || !(7 > 6 ) )
// true && true : true
console.log( !(3 >= 4) && ( 5 == "5" ) )
// false || false : false
console.log( (3 >= 4) || ( 5 === "5" ) )
// false && false : false
console.log( !(6 < 9) && !(7 > 6 ) )
// false || false : false
console.log( !( (6 < 9) || !(7 > 6) ) )
// true || false && true && !false
// true && true && !false
// true && !false
// true && true
// true
console.log((3 == "3") || (7 >= 8) && (5 > 4) && !(5 === "5"));
