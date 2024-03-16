"use strict";
// Question no 44 
function orderSandwich(...items) {
    if (items.length === 0) {
        console.log("You haven't selected any sandwich items.");
    }
    else {
        console.log("Sandwich Summary:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}
// Call the function with different arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Banana");
