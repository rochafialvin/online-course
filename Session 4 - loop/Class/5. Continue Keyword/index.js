////////////////////////////////////////////////////////
// Print 1 - 10. Lewati untuk angka yang habis dibagi 3
////////////////////////////////////////////////////////

// loop hingga sepuluh kali
for (var i = 1 ; i <= 10 ; i++){

    // Jika i bernilai 4
    if(i % 3 == 0){
        console.log('...');
        // abaikan task yang ada setelah continue dan lanjut ke loop berikutnya
        continue;
    }

    console.log(`Print : ${i} `)

}