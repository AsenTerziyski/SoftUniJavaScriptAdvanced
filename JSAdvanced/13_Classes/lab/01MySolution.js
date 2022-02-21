class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = Number(age);
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person1 = new Person('Ivan', 'Ivanov', '25', 'test@email.test');
// console.log(person1.toString());
// console.log(JSON.stringify(person1));
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// console.log(person.toString());

function getPersons() {
    let arrayOfPersons = [];
    arrayOfPersons.push(person);
    arrayOfPersons.push('SoftUni');
    arrayOfPersons.push(new Person('Stephan', 'Johnson', 25))
    arrayOfPersons.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    return arrayOfPersons;
}

const gtp = getPersons();
console.log(JSON.stringify(getPersons()));
for (const pr of gtp) {
    console.log(pr);
}