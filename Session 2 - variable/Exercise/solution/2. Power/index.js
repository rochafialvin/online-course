// Menerima input dari user berupa angka
// "2"
var input = prompt("Silahkan masukkan angka berapapun:")
// Mengubah tipe data string menjadi integer
// "2" ==> 2
input = parseInt(input)
// Input dari user di pangkat dua, hasilnya disimpan ke variabel result
var result = Math.pow(input,2)
// Tampilkan hasil pemangkatan menggunakan alert
alert(`Kuadrat dari ${input} = ${result}`)
