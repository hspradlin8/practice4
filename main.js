
for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenMonkey");
    }
    else if (currentNumber % 5 === 0) {
        console.log("chicken");
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey");
    } else {
        console.log(currentNumber);
    }

}

/* class work  
const debbieCakes = [
 zebra = {
  type: cakes,
  shape: square,
  frosting: white and chocolate
},
 nuttyBuddy = {
 type: waffer,
 shape: rectangle,
 frosting: chocolate and peanut-butter filling
},
 christmasTree = {
 type: cake,
 shape: tree,
 frosting: white and red with sprinkles
}
]
*/

/*Battle of the Bands */

let bandNumber = 1

const takeNumber = function (band) {
    console.log(`${band} is number ${bandNumber}`);
    bandNumber++
}

const scum = takeNumber("Galactic Scum")
// This should print "1. Galactic Scum" in the console

const sunn = takeNumber("SunnO")
// This should print "2. SunnO" in the console

const nirvana = takeNumber("Nirvana")

/*CookOUT */

const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}
// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill(foods) {
    for (let i = 0; i < foods.length; i++) {
        foods[i].cooked = true

        if (foods[i].cooked === true) {
            cookedFood.push(foods[i]);
        }
    }
};
    grill(foods);

    /* Class Work book 4 Ch 7 */ 
const sweetArray = [
    {
        name: "Apple Delights",
        event: "Back To School",
        count: 8
    },
    {
        name: "Pumpkin Delight",
        event: "Fall Festive",
        count: 8
    },
    {
        name: "Happy Camper",
        event: "Summer Time",
        count: 4
    }
]    
const createSweetComponent = (item) => {
  return`
        <div>
            <h2>${item.name}</h2>
            <p>${item.event}</p>
            <p>${item.count} sweets</p>
        </div>
       `
}
/* instead of writing the word function, write => */ 
const sweetContainer = document.querySelector("#container");

for (let i = 0; i < sweetArray.length; i++){
    console.log("loop of the array", i , sweetArray[i]);
    sweetContainer.innerHTML += createSweetComponent(sweetArray[i]);  
}

/* += shows the html h1 and the js container infor. = only shows the js container infor
and does not show the html h1*/
//console.log(createSweetComponent());//

// how to write a forEach loop
// sweetArray.forEach(sweetItem => {
    // sweetContainer.innerHTML += createSweetComponent(sweetItem);
// });
// item will still run even though sweetItem is the element name of the forEach loop

