// XYZ = W

var x = 4, y = 3, z = 2

// var firstStep = (x + y * ) / (x * y)
// var w = Math.pow(firstStep, z)

var w = Math.pow((x + y * z) / (x * y), z)

console.log(w)
