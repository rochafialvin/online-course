///////////////
// Switch Case
//////////////

/////////////////////
// IF, ELSE IF, ELSE
/////////////////////

// 1. Dapat memiliki condition lebih dari satu
// 2. Terdapat block kode yang akan dijalankaan saat semua condition bernilai false (else)
if(key == value_1){
    // Task 1

} else if (key == value_2){
    // Task 2

} else if (key == value_2){
    // Task 3

} else if (key == value_2){

    // Task 4
}

//////////////
// SWITCH CASE
//////////////

// 1. Dapat memiliki case lebih dari satu
// 2. Terdapat block kode yang akan dijalankaan saat semua condition bernilai false (default)
switch (key) {
    case value_1:
        // Jika nilai "key" sama dengan "value_1"
        // Task 1
        break;
    case value_2:
        // Jika nilai "key" sama dengan "value_2"
        // Task 2
        break;
    case value_3:
        // Jika nilai "key" sama dengan "value_3"
        // Task 3
        break;
    default:
        // Jika nilai "key" tidak sama dengan semua case value
        // Task Default
        break;
}

//////////////
// TECHNOLOGY
//////////////

var tech = "React"

switch (tech) {
    case "Javascript":
        // Jika nilai "term" sama dengan "Javascript"
        console.log("Javascript berfungsi untuk mengolah data")
        // Keyword break digunakan untuk menghalangi menjalankan kode pada case lainnya
        break;
    case "HTML":
        // Jika nilai "term" sama dengan "HTML"
        console.log("HTML berfungsi untuk membuat kerangka website")
        // Keyword break digunakan untuk menghalangi menjalankan kode pada case lainnya
        break;
    case "CSS":
        // Jika nilai "term" sama dengan "CSS"
        console.log("CSS berfungsi untuk mengatur style website")
        // Keyword break digunakan untuk menghalangi menjalankan kode pada case lainnya
        break;
    default:
        // Jika nilai "term" tidak sama dengan semua case value
        console.log(`Informasi mengenai ${term} tidak ditemukan`)
        // Break pada switch case tidak wajib ada karena setelah default tidak ada kode lainnya
}


/////////////////
// TRUE or FALSE
////////////////

var number = 10

switch(true){

    case true:
        console.log(`${number} merupakan bilangan GENAP`);
        break

    default:
        console.log(`${number} merupakan bilangan GANJIL`);
}
