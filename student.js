var stockApple = 5;
var stockGrape = 7;
var stockOrange = 10;

var qtyApple = prompt("Masukkan Jumlah Apel Yang Ingin Dibeli");
if (qtyApple > stockApple) {
  for (
    var qtyApple;
    qtyApple > stockApple;
    qtyApple = prompt(
      `Maaf. Jumlah Yang Anda Masukkan Melebihi Stock Kami.
Silahkan Masukkan Kembali Jumlah Apel Yang Ingin Dibeli (Stock : ${stockApple})`
    )
  );
}
var qtyGrape = prompt("Masukkan Jumlah Anggur Yang Ingin Dibeli");
if (qtyGrape > stockGrape) {
  for (
    var qtyGrape;
    qtyGrape > stockGrape;
    qtyGrape = prompt(
      `Maaf. Jumlah Yang Anda Masukkan Melebihi Stock Kami.
Silahkan Masukkan Kembali Jumlah Anggur Yang Ingin Dibeli (Stock : ${stockGrape})`
    )
  );
}
var qtyOrange = prompt("Masukkan Jumlah Jeruk Yang Ingin Dibeli");
if (qtyOrange > stockOrange) {
  for (
    var qtyOrange;
    qtyOrange > stockOrange;
    qtyOrange = prompt(
      `Maaf. Jumlah Yang Anda Masukkan Melebihi Stock Kami.
Silahkan Masukkan Kembali Jumlah Jeruk Yang Ingin Dibeli (Stock : ${stockOrange})`
    )
  );
}
var prcApple = 10000;
var prcGrape = 15000;
var prcOrange = 20000;

var totalApple = parseInt(qtyApple) * prcApple;
var totalGrape = parseInt(qtyGrape) * prcGrape;
var totalOrange = parseInt(qtyOrange) * prcOrange;
var totalBelanja = totalApple + totalGrape + totalOrange;

var output = `
Detail Belanja

Apel: ${qtyApple} x Rp${prcApple} = Rp${totalApple}
Anggur: ${qtyGrape} x Rp${prcGrape} = Rp${totalGrape}
Jeruk: ${qtyOrange} x Rp${prcOrange} = Rp${totalOrange}

Total = Rp${totalBelanja}`;

var cashIn = prompt(`${output}
Masukkan Nominal Pembayaran`);

if (cashIn > totalBelanja) {
  var ret = cashIn - totalBelanja;
  alert(`Nominal Yang Harus Dibayar : Rp${totalBelanja}
    Nominal Yang Anda Masukkan : Rp${cashIn}
    Kembalian : Rp${ret}
    Terimakasih Sudah Berbelanja`);
} else if (cashIn < totalBelanja) {
  for (
    var cashIn;
    cashIn < totalBelanja;
    cashIn = prompt(`Nominal Yang Harus Dibayar : Rp${totalBelanja}
Nominal Yang Anda Masukkan : Rp${cashIn} (Tidak Cukup)
Silahkan Masukkan Kembali Sesuai Dengan Nominal Yang Harus Dibayarkan`)
  );
  var ret = cashIn - totalBelanja;
  alert(`Nominal Yang Harus Dibayar : Rp${totalBelanja}
Nominal Yang Anda Masukkan : Rp${cashIn}
Kembalian : Rp${ret}
Terimakasih Sudah Berbelanja`);
} else {
  alert(`Nominal Yang Harus Dibayar : Rp${totalBelanja}
Nominal Yang Anda Masukkan : Rp${cashIn}
Terimakasih Sudah Berbelanja`);
}
