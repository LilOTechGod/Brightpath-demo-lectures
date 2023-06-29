////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////

const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY']

const copyArrToCamelCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i] //'biLbO BaGGINs'
        const splitStr = str.split(' ') //['biLbO', 'BaGGINs']
        let camelCaseStr = ''
        
        for (let x = 0; x < splitStr.length; x++) { //nested for loop
            let word = splitStr[x] // word= 'biLbO'

            word = word.toLowerCase() // word = 'bilbo

            if (x !== 0) { // 1st word in camelCase is all lower, if x ===0 then we are looking at the first word of our camelCase conversion
                word = word.charAt(0).toUpperCase() + word.slice(1)
            }

            camelCaseStr += word // = 'bilbo'
        }

        newArr.push(camelCaseStr) // push to new array
    }

    return newArr
}

const copyArrToSnakeCase = arr => {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]
        str = str.toLowerCase()
        const splitStr = str.split(' ')
        const snakeCaseStr = splitStr.join('_')
        newArr.push(snakeCaseStr)
    }

    return newArr
}
  
// CODE HERE

// const numberMultipliedByFour = (num) => num * 4
// console.log(numberMultipliedByFour(4));


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////


//// MAP ////

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange']

const mappedColors = colors.map(() => 'pink')
console.log(mappedColors); 

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret']

const formalGreeting = names => {
    // CODE HERE
    console.log(`hello ${names}`)
}

// const formalGreeting = formalNames.map((name) => 'hello' + '' + name)


// Call formalGreeting passing in the formalNames array
formalNames.map(formalGreeting);

// //// FILTER ////

// /*
//     Pass a callback to filter that will return
//     only strings that begin with the letter A
// */

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo']

const placesThatStartWithA = places.filter( city => city[0] === 'A');
const citiesThatStartWithA = places.filter( city => city.startsWith('A'));


/*
    Create a function called identifier that uses the filter higher order 
     array method to filter over the provided jobs array of objects
    The function should return the object of the person with a job as a programmer
     Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
 Use arrow functions and the filter method
 */

// // Do not edit the code below.
let jobs = [
	{ receptionist: "James" },
	{ programmer: "Steve" },
	{ designer: "Alicia" },
];

// // Do not edit the code above.

// // CODE HERE

const indentifier = (arr) => {
    let filteredJob = arr.filter((element) => { // return an [{ programmer: "Steve" },]
        if('origrammer' in element) {
            return element
        }
    })
    return filteredJob[0];
}

// // call the function passing in the jobs array


// //// REDUCE ////

// /*
//     Edit the productOfArray function and use 
//     the built in .reduce method to loop over the numbers parameter
//     and return the product of all the numbers in the array

//     Make sure to use arrow functions combined with the reduce method    
// */

// const numsToReduce = [43, 7, 24, 79, 290]

// const productOfArray = numbers => {
//     // Code here
// }

// // CODE HERE


// // call productOfArray passing in numsToReduce


// /*
//     Pass a callback and an initial value to reduce 
//     that will subtract all the expenses in the array
//     from the initial budget

//     This will allow us to see how much we have left
//     in the budget after these expenses
// */

const budget = 2000

const expenses = [
    {
        title: 'rent', 
        amount: 1000
    }, 
    {
        title: 'car payment', 
        amount: 250
    }, 
    {
        title: 'food', 
        amount: 300
    }
]

const remaining  = expenses.reduce((a, b) => {
    return a - b.amount //a = budget, b = {title: 'rent', amount: 100}
}, budget)