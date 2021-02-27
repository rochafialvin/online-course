///////////
/* CLASS */
///////////

/* Blueprint untuk membuat object, dengan class akan mempermudah dalam membuat object */

let kuroky = {
  name : "Kuro Salehi",
  age : 28,
  nationality: "Germany", // Added later
  position : "Captain",
  team : "Nigma"
}

let ceb = {
  name : "Sebastien Deb",
  age : 28,
  nationality: "France", // Added later
  position : "Coach",
  team : "OG"
}

let puppey = {
  name : "Clement Ivanov",
  age : 30,
  nationality: "Estonia", // Added later
  position : "Captain",
  team : "Team Secret"
}


/* Syntax */

class Player {
  constructor(name, age, nationality, position, team){
    this.name = name,
    this.age = age,
    this.nationality = nationality,
    this.position = aposition,
    this.team = team
  }
}

let dendi = new Player("Danil Ishutin", 30, "Ukraine", "Captain", "B8")
let kuroky = new Player("Kuro Salehi", 28, "Germany", "Captain", "Nigma")
let ceb = new Player("Sebastien Deb", 28, "France", "Coach", "OG")

console.log(dendi)
