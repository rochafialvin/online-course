// If Else Statement

// Jika condition bernilai true, maka task 1 akan dijalankan
// Jika condition bernilai false, maka task 2 akan dijalankan

if(condition){
    // task 1
} else {
    // task 2
}


// Jika kondisi hujan : kenakan payung
// Jika kondisi tidak hujan : kenakan jaket
var rain = false

if(rain){
    // Jika rain : true
    console.log(`Rain : ${rain}`);
    console.log("Kenakan jas hujan");
} else {
    // Jika rain : false
    console.log(`Rain : ${rain}`);
    console.log("Kenakan jaket");
}

// Jika tidak bersalah : dibebaskan
// Jika bersalah : dihukum
var guilty = false

// !false ==> true
if(!guilty){
    // Jika guilty : false
    console.log(`Guilty ${guilty}`);
    console.log("Anda dibebaskan");
} else {
    // Jika guilty : true
    console.log(`Guilty ${guilty}`);
    console.log("Anda dihukum");
}

// Jika sudah mencapai 18 : Diizinkan
// Jika belum mencapai 18 : Ditolak
var age = 15

if(age >= 18){
    // Jika age > 18 atau age == 18 (18 ke atas)
    console.log(`Age : ${age}`);
    console.log("Permohonan diterima");
} else {
    // Jika age < 18
    console.log(`Age : ${age}`);
    console.log("Permohonan ditolak");
}
