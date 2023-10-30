class Cat {
  constructor(colorOfFur, livesInside, isFat){
    (this.colorOfFur = colorOfFur),
    (this.livesInside = livesInside),
      (this.isFat = isFat)
  }
 colorOfFur (){
  this.color = this.colorOfFur;
 }
 livesInside () {
  this.livesInside = livesInside;
 }
isFat () {
  this.isFat = true;
}
}
const cat1 = new Cat("grey", false, true)
const cat2 = new Cat("orange", true, false)
const cat3 = new Cat("pink", false, false)


console.log(cat1)
console.log(cat3)
console.log(cat2)


class Pirate {
  constructor(hasBeard, likesToEatCandy, hasAShip) {
this.hasBeard = hasBeard;
this.likesToEatCandy = likesToEatCandy;
this.hasAShip = hasAShip;
  }

  hasBeard () {
    console.log('I got a big old bird')
  }
  likesToEatCandy() {
    console.log("i love to eat candy")
  }
  hasAShip() {
    console.log("I most certainly have my own ship")
  }
} 

const Pirate1 = new Pirate("yes", "love candy", "its called the Jolly Roger");
const Pirate2 = new Pirate("no", "i dont want cavities", "its called the Black Pearl");
const Pirate3 = new Pirate("yes its huge and filled with candy", "always on deck", ["jollyRanger", "blackPearl"]);

// console.log(Pirate1)
// console.log(Pirate2)
// console.log(Pirate3)

console.log(Pirate3.hasAShip[1])
console.log(Pirate2.hasAShip)