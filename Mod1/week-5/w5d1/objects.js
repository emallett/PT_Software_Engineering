




1//
/* attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as '15'
methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price */
owner {
    constructor ()
}
    this.name = [unknown];
    this.price = '15'
    this.method 
        this.wheelRun = ['squeak', 'squeak']
        this.eatFood = ["nibble nibble"]
    (getPrice= "return_the_price")

///////////////
/*
Person
attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood ( if weight is currently 10 it should go up to 11 and  same 
    for mood)
exercise() - decrement weight ( if weight is currently 10 weight should change to 9)
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank 
account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement 
bankAccount by the value of the hamster (hint: use getPrice())


/////////
/* Create a Story with your Person class
Feel free to update or add methods to automate some of these tasks.

Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice */



//////////////////
/* Daring Adventure! - Getting Started
Inside today's homework folder, create a folder called donut_adventure
Navigate inside the donut_adventure folder and create an index.html and adventure.js file.
Connect the files and for the rest of this homework, work in the adventure.js file. Confirm 
that you've successfully connected your files by console logging something and checking your browser 
developer tools console! */

///////////
Our Hero
class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10};
        this.catchPhrase = ['I\'m fresher than day old pizza', 'You can\'t count my calories'];
    }
    talkSass() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return `${this.name}'s health is ${this.health}.`;
    }
        fight(enemy) {
            //console.log('i\'m ready to rumble');
            let random = Math.round(Math.random());
            if (random == 1) {
                enemy.health -= this.weapons.sugarShock;
                return (`${this.name} has used sugar shock`)
            } else {
                enemy.health -= this.weapons.sprinkleSpray;
                return (`${this.name} has used sprinkle spray`)
            }
        }
}
const Dougie = new Hero('Dougie');
//Our Enemy
class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {pepperoniStars: 5, cheeseGrease: 10};
        this.catchPhrase = ['I\'m youtube famous', 'I\'m more dangerous than an uncovered sewer'];
    }
    talkSmack() {
        let phrases = this.catchPhrase;
        let random = Math.random();
        let totalPhrase = this.catchPhrase.length;
        let randomIndex = Math.floor(random * totalPhrase);
        let randomPhrase = phrases[randomIndex];
        return randomPhrase;
    }
    announceHealth() {
        return `${this.name}'s health is ${this.health}.`;
    }
    fight(hero) {
        //return 'I\'m gonna flatten you like a slice of pepperoni'
            let random = Math.round(Math.random());
            if (random == 1) {
                hero.health -= this.weapons.pepperoniStars;
                return (`${this.name} has used pepperoni stars`)
            } else {
                hero.health -= this.weapons.cheeseGrease;
                return (`${this.name} has used cheese grease`)
            }
        }
}
const PizzaRat = new Enemy('Pizza Rat');
//Walking Down the Street
console.log(Dougie.talkSass());
console.log(PizzaRat.talkSmack());
console.log(Dougie.announceHealth());
console.log(PizzaRat.announceHealth());
//Fight!
console.log(Dougie.fight(PizzaRat));
console.log(PizzaRat.fight(Dougie));
console.log(PizzaRat.announceHealth());
console.log(Dougie.announceHealth());