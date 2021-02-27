/////////////////
/* INHERITANCE */
////////////////

/* PLAYER */

class Player {
  constructor(name, nickname, nationality) {
    this.name = name
    this.nickname = nickname
    this.nationality = nationality
  }

  intro() {
    console.log(`My name is ${this.name} but you can call me ${this.nickname}`)
  }


}

/* CASUAL PLAYER */

class casualPlayer extends Player {
  constructor(name, nickname, nationality, job){
    super(name, nickname, nationality)
    this.job = job
  }

  myJob() {
    console.log(`I'm not pro player so i have a job, that is ${this.job}`)
  }
}


/* PRO PLAYER */

class proPlayer extends Player {
  constructor(name, nickname, nationality, team){
    super(name, nickname, nationality)
    this.team = team
  }

  myTeam() {
    console.log(`I'm a pro player so i have a team, that is ${this.team}`)
  }
}

const tanji = new Player ('Tanjirou Kamado', 'Swordsman', 'Japan')
console.log(tanji)
console.log(tanji.__proto__)
tanji.intro()

const dendi = new casualPlayer('Danil Ishutin', 'Dendi', 'Ukraine', 'Fisherman')
console.log(dendi)
console.log(dendi.__proto__)
dendi.intro()
dendi.myJob()

const kuroky = new proPlayer('Kuro Salehi', 'Kuroky', 'Germany', 'Nigma')
console.log(kuroky)
console.log(kuroky.__proto__)
kuroky.intro()
kuroky.myTeam()