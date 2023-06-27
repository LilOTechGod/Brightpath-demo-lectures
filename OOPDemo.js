const person = {
    firstName: 'Oscar',
    lastName: 'Perez-Hernandez',
    favColor: 'Blue'
}

//// adding to object \\\\
person.hadPets = true;
// console.log(person['hadPets']);
//// adding to object \\\\

// destructure \\
const {firstName: nickName, lastName: surname, favColor: bestColor} = person;
// console.log(nickName, surname, bestColor);
// console.log(person.firstName);
// console.log(person['lastName']);

// const color = 'favColor'

// console.log(person[color]);

const meal = {
    appetizer: 'wings',
    entree: 'chicken fried steak',
    dessert: 'chocoflan',
    drink: 'water'
}

/////// destructure \\\\
const {dessert} = meal;
const {appetizer, entree} = meal
const {drink: favDrink} = meal

// console.log(dessert);
// console.log(appetizer);
// console.log(entree);
// console.log(favDrink);


////// looping through an object \\\\\
// for(plate in meal) {
//     console.log(`the key is ${plate} and the value is ${meal[plate]}`);
// }

///// deleting something in object \\\\
// console.log(meal);
// delete meal.entree 
// console.log(meal);
///// deleting something in object \\\\



///// classes and subclasses \\\\\

class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    greeting() {
        console.log(`Hello i'm ${this.name} the ${this.breed} and i'm ${this.age}`);
    }

}

class Puppy extends Dog {
    constructor(name, breed, age, trainingLevel) {
        super(name, breed, age)

        this.trainingLevel = trainingLevel;
    }
    
}


let reyna = new Dog('Reyna', 'Huskey', 1);
let red = new Dog('red', 'germanS', '1');
// console.log(reyna.name);
// reyna.greeting();
// red.greeting();

for(Attr in reyna) {
    console.log(reyna[Attr])
}