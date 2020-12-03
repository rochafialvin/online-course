// Switch Case Statement

// Menyamakan key dengan value
// switch (key) {
//     case value_1:
//         // Jika nilai "key" sama dengan "value_1"
//         // Statement 1
//         break;
//     case value_2:
//         // Jika nilai "key" sama dengan "value_2"
//         // Statement 2
//         break;
//     case value_3:
//         // Jika nilai "key" sama dengan "value_3"
//         // Statement 3
//         break;
//     default:
//         // Jika nilai "key" tidak sama dengan semua case value
//         // Statement 4
//         break;
// }

// if(key == value_1){
//     // Statement 1

// } else if (key == value_2){
//     // Statement 2

// } else if (key == value_2){
//     // Statement 3

// } else if (key == value_2){
//     // Statement 4

// }


var term = "RE"

switch (term) {
    case "Javascript":
        // Jika nilai "term" sama dengan "Javascript"
        console.log("Javascript berfungsi untuk mengolah data")
        break;
    case "HTML":
        // Jika nilai "term" sama dengan "HTML"
        console.log("HTML berfungsi untuk membuat kerangka website")
        break;
    case "CSS":
        // Jika nilai "term" sama dengan "CSS"
        console.log("CSS berfungsi untuk mengatur style website")
        break;
    default:
        // Jika nilai "term" tidak sama dengan semua case value
        console.log(`Informasi mengenai ${term} tidak ditemukan`)
        break;
}