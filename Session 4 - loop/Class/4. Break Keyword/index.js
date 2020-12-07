///////////////
// Print 1 2 3
///////////////

// loop hingga lima kali atau mencapai keyword break
for (var i = 1 ; i <= 5 ; i++){

    // Jika nilai i sama dengan 4
    if(i == 4){
        // Mengabaikan perintah yang ada sesudah break dan menghentikan proses loop
        break;
    }

    console.log(`i : ${i} `)

}

/////////////////////////////////////
// Mencari angka yang dapat dibagi 5
/////////////////////////////////////

while(true){

    // Angka random 0 - 99
    var rand = Math.floor(Math.random() * 100)

    // Menampilkan angka random yang di dapat
    console.log(`Checking ... ${rand}`)

    // Evaluasi, apakah nilai rand akan habis dibagi 5
    if(rand % 5 == 0){
        // Jika nilai "rand" habis dibagi 5
        // Tampilkan pada console
        console.log(`Jackpot ! ${rand} `)
        // Memberhentikan loop
        break
    }

    // Jika nilai "rand" tidak habis dibagi 5
    console.log(`Pass ... `)

}