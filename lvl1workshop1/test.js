//ES-5 Function Expression

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.printProfile = function(){
//     console.log("name :", name)
//     console.log("age :", age)
//   }
// }

// const person1 = new Person("Zak", 37);

// const person2 = new Person("Mike", 67)

// console.log(Person)

// console.log(person1)

// console.log(person2)

// person1.printProfile()

// person2.printProfile()

//ES-6 Arrow Function
//Problaem w/ this.property

// const Person = (name, age) => {
//   this.name = name,
//   this.age = age,
//   this.printProfile = function() {
//     console.log("name :", name)
//     console.log("age :", age)
// }
// }

// const person3 = new Person("John", 18)

// console.log(person3)

//ES-6 CLASS
//Solution to ES-6

// class Person {
//   constructor(name, age){
//     this.name = name;
//     this.age = age
//   }
//   printProfile(){
//     console.log("name :", this.name)
//     console.log("age :", this.age)
//   }
// }

// const person4 = new Person("Tony", 38)

// console.log(person4)

// person4.printProfile()
