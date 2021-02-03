////////////////////////
/* RECURSIVE FUNCTION */
////////////////////////

/* Function yang memanggil dirinya sendiri */

var countdown = (counter) => {
  // Munculkan angka pada terminal
  console.log(counter);
  // Kurangi angka dengan 1
  counter--;

  // Jika angka tidak lebih kecil dari 0
  if (counter >= 0) {
    // Memanggil dirinya sendiri
    countdown(counter);
  }
};

countdown(3);
