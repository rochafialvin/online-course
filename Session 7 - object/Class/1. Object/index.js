////////////
/* OBJECT */
////////////

/* key : value */
/* value : function, key : method */
/* value : selain function , key : property */


/* Literal */
let captain = {
  // string
  name: "Kuroky",
  // array
  pets: ["cat", "fox", "bird"],
  // boolean
  active: true,
  // number
  height: 170,
  // function
  play: function(game) {
    console.log(`Playing ${game}`);
  },
};

///////////////////////
/* Access with dot . */
///////////////////////

// object : {name, pets, active, ...}
console.log(captain);
// Kuroky
console.log(captain.name);
// 170
console.log(captain.height);
// Playing dota
captain.play("dota");


////////////////////////////
/* Access with bracket [] */
////////////////////////////


// Kuroky
console.log(captain["name"]);
// 170
console.log(captain["height"]);
// Playing dota
captain["play"]("dota");


////////////////////
/* Changing value */
////////////////////

captain.pets = "dog";
captain.height = 169;
captain.play = function(game) {
  console.log(`Let's play some ${game}`);
};

// Object with new value from pets and height
console.log(captain);
// Let's play some dota
captain.play("dota");

/////////////////
/* Add new key */
/////////////////

// Add new property
captain.nationality = "Germany"
// Add new method
captain.greet = function(time) { console.log(`Good ${time}`) }

console.log(captain)
console.log(captain.nationality)
captain.greet("Morning")

/////////////////
/* Destructure */
/////////////////

let { name, pets, play } = captain;
// My name is Kuroky, and i have 3 pets
console.log(`My name is ${name}, and i have ${pets.length} pets`);

/////////
/* New */
/////////

let capitan = new Object();

// empty object : {}
console.log(capitan);

// Add properties and methods
capitan.name = "Sebastien";
capitan.pets = ["owl", "dog"];
capitan.play = function(game) {
  console.log(`Playing ${game}`);
};

// object : {name, pets, play}
console.log(capitan);
// "Sebastien"
console.log(capitan.name);
// [ 'owl', 'dog' ]
console.log(capitan.pets);
// Playing counter strike
capitan.play("Dota");
