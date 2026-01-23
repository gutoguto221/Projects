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

const newPerson = new Person()

newPerson.name = "Leandra"
newPerson.age = 39
newPerson.talk()