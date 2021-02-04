///////////////////
/* MAP DUPLICATE */
///////////////////

/*
 1.Method map membutuhkan array untuk di proses, dan callback function yang akan memproses setiap data dari array.

  2.Map akan menjalankan callback function sebanyak data yang ada di array, dan setiap kali dijalankan, data pada array akan masuk secara bergantian.
  
  3.Callback yang masuk kedalam map akan melakukan return nilai, dan nilai yang di return ini akan dimasukkan ke dalam array baru.

  4.Array baru yang berisi hasil dari proses map akan di return oleh map sehingga hasilnya dapat disimpan ke dalam variabel.
*/

/* map duplicate : for loop */
var mapForLoop = (arr, cb) => {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }

  return result;
};

/* map duplicate : for each */
var mapForEach = (arr, cb) => {
  var result = [];

  arr.forEach((val) => {
    result.push(cb(val));
  });

  return result;
};

var numbers = [1, 2, 3];
var multi = (number) => number * 2;

var forLoopResult = mapForLoop(numbers, multi);
console.log(forLoopResult);

var forEachResult = mapForEach(numbers, multi);
console.log(forEachResult);

var mapResult = numbers.map(multi);
console.log(mapResult);
