/////////////////////
/* RETURN (OUTPUT) */
////////////////////

/* Basic */

var basic = () => {
  return "I am the boss";
};

var result = basic();
console.log(result);

console.log(basic());

/* Random 1 - 10 */
var oneToTenRandom = () => {
  var ran = Math.random();
  var ranMultiTen = ran * 10;
  var oneTen = Math.floor(ranMultiTen) + 1;

  return oneTen;
};

var ranResult = oneToTenRandom();
console.log(ranResult);
