const person ={
    name: "Guto",
    age: 38,
    talk: function(){
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Person {
constructor (name,age){
console.log(`Hi! My name is ${this.name}`);

this.name = name
this.age = age

}

    talk(){
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`);
    }
}

const newPerson = new Person("Guto", 38);
const newPerson2 = new Person("Leandra", 39);
const newPerson3 = new Person("Maria Clara", 10);

newPerson.talk();
newPerson2.talk();
newPerson3.talk();
