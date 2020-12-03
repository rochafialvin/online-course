// Cube Root

// Menerima input berupa string
// Karena Prompt berada di dalam parseInt
// Maka nilai yang diterima oleh prompt akan langsung masuk ke parseInt
// input = parseInt("8")
var input = parseInt(prompt("Masukkan angka"))

var result = Math.cbrt(input)
alert(result)
