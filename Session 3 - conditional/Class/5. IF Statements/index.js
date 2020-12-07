// If Statement

// Jika condition bernilai true, task akan dijalankan
// Jika condition bernilai false, tidak ada task yang dijalankan
if (condition) {
    // task
}


// Jika kondisi hujan : kenakan jas hujan
var rain = true
// Jika rain bernilai true, jalankan task
if(rain){
    console.log("Kenakan Jas Hujan")
}


// Jika tidak bersalah : dibebaskan
var guilty = false
// Jika guilty sama dengan false, dibebaskan
if(!guilty){
    console.log(`Guilty : ${guilty}`);
    console.log("Anda dibebaskan");
}

// Jika umur sudah mencapai 18 atau lebih : dapat membuat SIM
var age = 18
// Jika age > 18 atau age == 18 (18 ke atas)
if(age >= 18){
    console.log("Permohonan diterima, silahkan lanjutkan ke proses berikutnya");
}
