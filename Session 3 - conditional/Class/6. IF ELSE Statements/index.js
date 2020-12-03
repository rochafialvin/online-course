// If Else Statement

// condition : true, jalankan statement 1
// condition : false, jalankan statement 2
if (condition) {

    // statement 1

} else {

    // statement 2

}


// Jika kondisi hujan : kenakan payung
// Jika kondisi tidak hujan : kenakan jaket
var rain = true

if (rain) {
    // Jika rain : true
    console.log("Kenakan Jas Hujan");

} else {
    // Jika rain : false
    console.log("Kenakan Jaket");

}


// Jika tidak bersalah :  dibebaskan
// Jika bersalah : dihukum
var guilty = false

// !false ==> true
if (!guilty) {
    // Jika guilty : false
    console.log("Anda dibebaskan");

} else {
    // Jika guilty : true
    console.log("Anda Dihukum");
}



// Jika umur sudah sampai 18 atau lebih : dapat membuat SIM
// Jika umur belum sampai 18 : ditolak
var age = 17

if (age >= 18){
    // Jika age > 18 atau age == 18 (18 ke atas)
    console.log("Permohonan diterima, silahkan lanjutkan ke proses berikutnya");

} else {
    // Jika age < 18
    console.log("Permohonan ditolak, umur belum mencapai batas minimal");

}
