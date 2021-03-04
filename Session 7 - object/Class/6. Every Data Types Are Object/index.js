/////////////////////////////////
/* Object For Every Data Types */
/////////////////////////////////

/////////////////////////////////////////
/* Primitive : string, number, boolean */
/////////////////////////////////////////

// String
const priString = "Today is raining"
const objString = new String("Today is sunny")

console.log(priString.toUpperCase())
console.log(objString.toLowerCase())

console.log(typeof priString)
console.log(typeof objString)

// Number
const priNumber = 37000
const objNumber = new Number(39000)

console.log(priNumber.toLocaleString("id"))
console.log(objNumber.toLocaleString("id"))

console.log(typeof priNumber)
console.log(typeof objNumber)

// Boolean
const priBoolean = true
const objBoolean = new Boolean(false)

console.log(typeof priBoolean)
console.log(typeof objBoolean)


/////////////////////////////////////////////////////
/* Object : array, object, string, number, boolean */
/////////////////////////////////////////////////////

// Array
const priArray = [1, 3, 5, 9]
const objArray = new Array([1, 3, 5, 7])

console.log(typeof priArray)
console.log(typeof objArray)

// Object
const priObject = {name : 'Gonzales'}
const objObject = new Object({name : 'Gonzales'})

console.log(typeof priObject)
console.log(typeof objObject)
