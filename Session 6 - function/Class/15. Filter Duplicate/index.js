//////////////////////
/* FILTER DUPLICATE */
//////////////////////

/*
  1. Method filter membutuhkan array untuk di proses, dan callback function yang akan memproses setiap data dari array.

  2. Filter akan menjalankan callback function sebanyak data yang ada di array, dan setiap kali dijalankan, data pada array akan masuk secara bergantian.

  3. Callback yang masuk kedalam filter akan melakukan return boolean, setiap yang di return adalah true, maka data yang masuk akan disimpan ke array baru, jika false, maka data yang masuk pada saat itu tidak akan disimpan.

  4.Array baru yang berisi hasil dari proses filter akan di return oleh filter sehingga hasilnya dapat disimpan ke dalam variabel.
*/

var filterForLoop = (arr, cb) => {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var isTrue = cb(arr[i]);

    if (isTrue) {
      result.push(arr[i]);
    }
  }

  return result;
};

var filterForEach = (arr, cb) => {
  var result = [];

  arr.forEach((val) => {
    var isTrue = cb(val);

    if (isTrue) {
      result.push(val);
    }
  });

  return result;
};

var numbers = [1, 2, 3, 4, 5];
var odd = (val) => val % 2 == 1;
var even = (val) => val % 2 == 0;

var forLoopResult = filterForLoop(numbers, odd);
console.log(forLoopResult);

var forEachResult = filterForEach(numbers, odd);
console.log(forEachResult);

var filterResult = numbers.filter(odd);
console.log(filterResult);
