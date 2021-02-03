//////////////
/* FOR EACH */
//////////////

/* Direct Callback */

var nums = [1, 2, 3, 4, 5];
var cb = (val) => {
  console.log(`Loop ${val}`);
};

nums.forEach(cb);
