// Masukkan besaran total belanja. Jika melebihi dari 1000 akan mendapatkan discount 15%, kurang dari 1000 hanya discount 5%

var amount = parseInt(prompt("Masukkan besaran total belanja"));
var discount;

if (amount > 1000) {
  discount = 15;
} else {
  discount = 5;
}

var totalDiscount = amount * (discount / 100);
var finalAmount = amount - totalDiscount;

alert(`
Besaran belanja    ${amount}
Besaran discount (${discount})   ${totalDiscount}
Besaran yang dibayar    ${finalAmount}`);
