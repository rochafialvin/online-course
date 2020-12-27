//////////////////////////
// REVERSE ARRAY IN PLACE
//////////////////////////

var nums = [1, 2, 3, 4, 5, 6, 7, 8]
var numsLength = nums.length - 1

for (var i = 0; i <= Math.floor((numsLength) / 2); i++) {
    let el = nums[i];
    nums[i] = nums[numsLength - i];
    nums[numsLength - i] = el;
}

console.table(nums)

