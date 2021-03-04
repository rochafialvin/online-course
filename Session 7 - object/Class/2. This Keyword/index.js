//////////////////
/* THIS KEYWORD */
//////////////////

const person = {
  firstName : "Topias",
  lastName : "Taavitsainen",
  nickname : "Topson",
  greet : function(time) { console.log(`Good ${time}`)},
  intro : function(time) {
    this.greet(time)
    console.log(`My full name is ${this.firstName} ${this.lastName}`)
  },

}

person.intro("Morning")
