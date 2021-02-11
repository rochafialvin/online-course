////////////////////////
/* RECURSIVE FUNCTION */
////////////////////////

/* Function yang memanggil dirinya sendiri */

var countdown = (counter) => {
  // counter = 0
  console.log(counter);
  // counter - 1 = -1
  counter--;
  // countdown(0)
  if (counter >= 0) {
    countdown(counter);
  }
};

countdown(10);

// 5
// 4
// 3
// 2
// 1
// 0
