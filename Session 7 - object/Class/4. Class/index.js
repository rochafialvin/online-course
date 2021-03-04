///////////
/* CLASS */
///////////

/* Blueprint untuk membuat object, dengan class akan mempermudah dalam membuat object */

const kuroky = {
  name : "Kuro Salehi",
  age : 28,
  nationality: "Germany",
  position : "Captain",
  team : "Nigma"
}

const ceb = {
  name : "Sebastien Deb",
  age : 28,
  nationality: "France",
  position : "Coach",
  team : "OG"
}

const puppey = {
  name : "Clement Ivanov",
  age : 30,
  nationality: "Estonia",
  position : "Captain",
  team : "Team Secret"
}

/* Syntax */
class Player {
  constructor(name, age, nationality, position, team) {
    this.name = name
    this.age = age
    this.nationality = nationality
    this.position = position
    this.team = team
  }

  intro() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const dendi = new Player("Danil Ishutin", 30, "Ukraine", "Captain", "B8")
const kuroky = new Player("Kuro Salehi", 28, "Germany", "Captain", "Nigma")

console.log(dendi)
console.log(kuroky)

dendi.intro()
kuroky.intro()
