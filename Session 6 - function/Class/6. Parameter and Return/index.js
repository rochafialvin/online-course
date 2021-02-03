///////////////////////////
/* PARAMETER and RETURN */
//////////////////////////

/* Contoh built in function yang me-return nilai */
var x = parseInt("234");
// console.log(x);

/* Addition with no return */
var addition = (a, b) => {
  var addResult = a + b;
  console.log(`addResult : ${addResult}`); // delete it
  // nilai pada addResult akan dikeluarkan (output)
  return addResult;
};

/* Addition with return */
var result = addition(3, 5);
console.log(`result : ${result}`);

/* Full Name */
var createFullName = (first, second) => {
  return `${first} ${second}`;
};

var result = createFullName("Robert", "Johnson");
console.log(result);
