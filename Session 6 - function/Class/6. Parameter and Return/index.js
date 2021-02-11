///////////////////////////
/* PARAMETER and RETURN */
//////////////////////////

var addition = (num1, num2) => {
  return num1 + num2;
};

var result = addition(9, 8);
console.log(result);

var fullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

var fullResult = fullName("Robert", "Johnson");
console.log(fullResult);
