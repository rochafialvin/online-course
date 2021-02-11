
/* Date object */
var date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());


/* Time */
var time = () => {
  var x = new Date();

  var year = x.getFullYear();
  // 0 - 11
  var month = x.getMonth();
  // 1 - 31
  var date = x.getDate();
  // 0 - 6
  var day = x.getDay();
  // 0 - 23
  var hours = x.getHours();
  // 0 - 59
  var minutes = x.getMinutes();

  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return [days[day], date, months[month], year, hours, minutes];
};

var arrTime = time();
console.table(arrTime);
console.log(
  `${arrTime[0]}, ${arrTime[1]} ${arrTime[2]} ${arrTime[3]} - ${arrTime[4]} : ${arrTime[5]}`
);
