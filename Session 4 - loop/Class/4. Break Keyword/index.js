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

    // Menampilkan nilai i
    console.log(`i : ${i} `)

}

//////////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapati dibagi 5
//////////////////////////////////////////////////////

// Infinite loop : loop yang memiliki condition selalu true

while(true){

    // Mendapatkan angka random 0 - 99
    var rand = Math.floor(Math.random() * 100)
    // Menampilkan angka random
    console.log(rand)
    // Jika angka random dapat dibagi lima, maka hentingan proses loop
    if (rand % 5 == 0) {
        // Hentikan proses loop
        break
    }
}
