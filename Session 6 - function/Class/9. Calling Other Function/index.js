////////////////////////////
/* CALLING OTHER FUNCTION */
///////////////////////////

/* sebuah function dapat memanggil function lainnya secara langsung */

var first = () => {
  console.log("First");
};

var second = () => {
  first();
  console.log("Second");
};

// second();

var add = (a, b) => {
  return a + b;
};
var sub = (a, b) => {
  return a + b;
};
var mul = (a, b) => {
  return a + b;
};

var calculator = (num1, num2, operation) => {
  if (operation == "add") {
    return add(num1, num2);
  } else if (operation == "sub") {
    return sub(num1, num2);
  } else {
    return mul(num1, num2);
  }
};

calculator(2, 3, "add");
calculator(2, 3, "mul");
calculator(2, 3, "sub");
