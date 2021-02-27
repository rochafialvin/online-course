//////////////////
/* THIS KEYWORD */
//////////////////

let person = {
  firstName : "Topias",
  lastName : "Taavitsainen",
  nickname : "Topson",

  thank: function(b) {
    console.log(`Hello, good ${b}`)
  },

  introduction: function(a) {
    this.thank(a)
    console.log(`My full name is ${this.firstName} ${this.lastName}`)
  }
}

person.thank("morning")

person.introduction("evening")


