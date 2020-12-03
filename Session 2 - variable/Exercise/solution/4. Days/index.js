// S2 - Slide 64

// 485 hari
// 485 / 360 = 1 tahun (360 hari) sisa 125 hari
// 125 / 30 = 4 bulan (120 hari) sisa 5 hari
// 5 / 7 = 0 minggu (0 hari) sisa 5 hari

// 270 hari
// 270 / 360 = 0 tahun (0 hari) sisa 270 hari
// 270 / 30 = 9 bulan (270 hari) sisa 0 hari
// 0 / 7 = 0 minggu (0 hari) sisa 0 hari

// 1 tahun 360 hari, 1 bulan 30 hari, 1 minggu 7 hari
var input = parseInt(prompt("Masukkan jumlah hari: "));

// 398
var tahun = Math.floor(input / 360);
var hari = (input % 360)
var bulan = Math.floor(hari / 30);
hari = (hari % 30)
var minggu = Math.floor(hari / 7);
hari = Math.floor(hari % 7);

alert(input + " hari sama dengan:\n" +
  tahun + " tahun\n" +
  bulan + " bulan\n" +
  minggu + " minggu\n" +
  hari + " hari"
);


