/////////////////////
/* ARROW FUNCTION */
////////////////////

/* Function Expression (Basic) */
var earth = function () {
  console.log("Selamatkan Bumi");
};

/* Function Expression (Arrow) */
var earth = () => {
  console.log("Selamatkan Bumi");
};

earth();

/* Not Hoisted */
earth();

var earth = () => {
  console.log("Selamatkan Bumi");
};
