///////////////
/* FUNCTION */
//////////////

/*
  Block kode :
    1. Memiliki nama
    2. Dapat digunakan secara berulang
    3. Dapat memiliki input dan output

  Note :
    1. Input adalah proses dimana kita dapat memberikan value kepada function untuk digunakan.
    2. Output adalah proses yang dilakukan oleh function dalam menghasilkan value sehingga dapat disimpan di variabel.
*/

/* Syntax function */

/* 
  keyword 'function' + nama + () + {}

  () -> Tempat menulis parameter

  Parameter -> variabel tempat menyimpan input, akan dijelaskan lebih lengkap di video lainnya, jangan khawatir :)

  {} -> Tempat menulis task yang akan dikerjakan saat function dijalankan
*/

/* Membuat Function */
function firstStep() {
  console.log(
    "Segala sesuatu yang besar, selalu dimulai dari satu langkah kecil."
  );
}

/* Memanggil / menjalankan function */
firstStep();
firstStep();

var keepGoing = function () {
  console.log("Apapun yang terjadi, teruslah melangkah.");
};

keepGoing();

/* Perbedaan keduanya */

/* Hoisted */

leaf();

function leaf() {
  console.log("Hijau Daun");
}

/* Not Hoisted */

tea();

var tea = () => {
  console.log("Teh Hijau");
};

/* Replaced */

function leaf() {
  console.log("Hijau Daun");
}

leaf();

function leaf() {
  console.log("Daun Hijau");
}

/* Not Replaced */

var tea = () => {
  console.log("Teh Hijau");
};

tea();

var tea = () => {
  console.log("Hijau Teh");
};
