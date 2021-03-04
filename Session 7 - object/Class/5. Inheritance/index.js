/////////////////
/* INHERITANCE */
////////////////

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

// Dengan extends ke Class Player
// Semua properties dan methos milik Player akan diturunkan ke CasualPlayer
class CasualPlayer extends Player {

  constructor(name, nickname, nationality, job) {
    // Memanggil constructor milik Player
    super(name, nickname, nationality )
    this.job = job
  }

  myJob() {
    console.log(`I'm not pro player so i have a job, that is ${this.job}`)
  }

}

class ProPlayer extends Player {
  constructor(name, nickname, nationality, team) {
    // Memanggil constructor milik Player
    super(name, nickname, nationality)
    this.team = team
  }

  myTeam() {
    console.log(`I'm a pro player so i have a team, that is ${this.team}`)
  }

}

const dendi = new Player("Danil", "Dendi", "Ukraine")
console.log(dendi)
dendi.intro()

const tanjirou = new CasualPlayer("Tanjirou", "Tanji", "Japan", "Swordsman")
console.log(tanjirou)
tanjirou.intro()
tanjirou.myJob()

const kuroky = new ProPlayer("Kuro", "Kuroky", "German", "Nigma")
console.log(kuroky)
kuroky.intro()
kuroky.myTeam()
