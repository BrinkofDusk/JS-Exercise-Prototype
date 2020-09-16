/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
const pantry = ["🍕", "🥚", "🥤", "🥛", "🥗", "🥞", "🥪", "🦪", "🥖", "🥮", "🧈"];
Person.prototype.eat = function (food) {
    if (this.stomach.length < 10) {
        this.stomach.push(food)
    }
    else {
        return `${this.name} is too full...probably time to use the bathroom.`;
    }

}

Person.prototype.poop = function () {
    this.stomach = [];
    return `${this.name} just engaged in the act of defication. It was successful!!!`;
}

Person.prototype.toString = function () {
    return `${this.name}, ${this.age}`;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];

}

const person = new Person("Jimmie Joe", 192);
for (let i = 0; i <pantry.length; i++) {
    person.eat(pantry[i]);
}



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
Car.prototype.fill = function (gallons) {
    this.tank += gallons;
}

Car.prototype.drive = function (miles) {
    if (this.tank > 0 && this.tank > this.milesPerGallon / miles) {
        let gasUsed = this.milesPerGallon / miles;
        this.odometer += miles;
        this.tank -= gasUsed;
    } else {
        return "Sorry, you don't have enough fuel to drive that far!";
    }
}
function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;

        

}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
    return `Playing with ${this.favoriteToy}`;
}
function Baby(name,age,ftoy) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.favoriteToy = ftoy;

}



/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. If no objects are defined, than the this keyword in javascript automatically refers to the window object. 
  2. When defined in an function, the this keyword refers to the object to the left of the dot operator. Must be used inside of an object.
  3. When the this kw is used inside of a constructor, it refers to the instance of the object that is being created.
  4. This can be explicitly defined within the call() method.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
