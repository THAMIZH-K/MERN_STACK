const person1 = {
    firstname: "Eren",
    lastname: "Yeager,",
    age: 19,
    role: "attack titen",
    dialogue: () => console.log("Am going to destroy all the titen and every one outside the walls "),
}

const person2 = {
    firstname: "Mikasa",
    lastname: "Ackerman,",
    age: 19,
    role: "survey corps",
    dialogue: () => console.log("this world is cruel, but also beautiful."),
}

console.log("my Name " + person1.firstname)
console.log(person1.lastname)
console.log("am " + person1.age)
person1.dialogue()


console.log("my Name " + person2.firstname)
console.log(person2.lastname)
console.log("am " + person2.age)
person2.dialogue()