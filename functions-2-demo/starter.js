////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add =(num1, num2) => num1 + num2;
const subtract =(num1, num2) => num1 - num2;
const multiply =(num1, num2) => num1 * num2;
const divide =(num1, num2) => num1 / num2;
// we want to check if the arg(num1,num2) are number, if so then we
// High order function \\
const CALCULATOR = (num1, num2, cb) => {
  // will check to see if these params can be coerced into numbers, 
  // if so then we will coere them,
  // if not we will inform the user
  if(+num1 && +num2){
    num1 = +num1
    num2 = +num2
    return cb(num1, num2)
  }else {
    console.log('please send in number');
  }
}

const addResult = CALCULATOR(1,2,add);
console.log(addResult);

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
// we want to apply a discount (y) percentage 25% would be .25
const applyPercentDis = (product, discount) => {
product.displayPrice = product.basePrice * (1 - discount)
}
// want to apply a flat rate discount($5);
const applyFlatRateDis = (product, discount) => {
  product.displayPrice = product.basePrice - discount
}

const applyDiscountToColl = (arr, discount, cb) => {
  for(let i=0; i<arr.length; i++) {
    cb(arr[i], discount)
  }
}

// applyDiscountToColl(dogProducts, .1, applyPercentDis);
// console.log(dogProducts);

// applyDiscountToColl(catProducts, 5, applyFlatRateDis);
// console.log(catProducts);

const applyDicountByCategory = (category, discount, arr, cb) => {
  // we want to iterate over the array and change the values that match the category
  for(let i=0; i<arr.length; i++) {
    // check if category matches
    // if it does we can do our operation
    if(arr[i].category === category) {
      cb(arr[i], discount)
    }
  }
}

// applyDicountByCategory(1, .25, catProducts, applyPercentDis);
// console.log(catProducts);

// applyDicountByCategory(1, 2, dogProducts, applyFlatRateDis);
// console.log(dogProducts);

const applyDiscountByInventory = (inventory, discount, arr, cb) => {
  for(let i=0; i<arr.length; i++) {
    if(arr[i].inventory < inventory) {
      cb(arr[i], discount)
    }
  }
}

// applyDiscountByInventory(50, 1, catProducts, applyFlatRateDis);
// console.log(catProducts);

// applyDiscountByInventory(80, .05, dogProducts, applyPercentDis);
// console.log(dogProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makesSandwhich(bread) {
  // returns a function
  return function(ingredients) {
    let order = `you ordered a ${bread} sandwhich with`
    for(let i=0; i<ingredients.length; i++) {
      if(i === ingredients.length -1 && i !== 0) {
        order += `and ${ingredients[i]}.`
      }else if (ingredients.length === 1) {
        order += `${ingredients[i]}.`
      }else if(i === ingredients.length -2) {
        order += `${ingredients[i]}`
      }else {
        order += `${ingredients[i]},`
      }
    }
    return order
  }
}

const makesbreadSandwhich = makesSandwhich('whole grain');
console.log(makesbreadSandwhich(['cheese', 'turkey', 'avacado', 'lettece']));
