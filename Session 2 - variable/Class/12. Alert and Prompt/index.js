// S2 - Slide 59

// Input String
var input = prompt("Tulis sesuatu")
console.log(`Input: ${input}`)

// Input Number
input = prompt("Tuliskan angka")
console.log(`Input: ${input}`)
console.log(`Tipe data : ${typeof(input)}`)
alert(`Input: ${input}`)
alert(`Tipe data : ${typeof(input)}`)

// Alert
var day = prompt("Hari apa sekarang ?")
var date = prompt("Tanggal berapa hari ini ?")

alert(`day / date : ${day}, ${date}`)


// Biodata
var name = prompt("Nama Lengkap")
var hobby = prompt("Hobi")
var address = prompt("Alamat")

var result = `Nama lengkap saya ${name}, hobi saya adalah ${hobby}, dan alamat rumah saya ${address}`
result = `Nama lengkap saya ${name}\nhobi saya adalah ${hobby}\nalamat rumah saya ${address}`

console.log(result)
alert(result)
