"use strict";
//Tallest Mountian
//array
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var max = 0;
    var currentTallest = "";
    //in the mountain array each mountain is looked at
    mountains.forEach(function (mountain) {
        //looping throught each mountain it compares the height if the next one is bigger it replaces new max hight
        if (mountain.height > max) {
            //new max hight
            max = mountain.height;
            //gives name of the new highest mountain since it is with in the Loop
            currentTallest = mountain.name;
        }
    });
    return currentTallest;
}
var mountainName = findNameOfTallestMountain(mountains);
console.log(mountainName);
//array
var products = [
    { name: "Cola", price: 1 },
    { name: "Chips", price: 2 },
    { name: "Avocado", price: 3 },
    { name: "Bread", price: 5 }
];
function calcAverageProductPrice(products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return sum / products.length;
}
var productaverage = calcAverageProductPrice(products);
console.log(productaverage);
//array
var inventory = [
    { product: { name: "moto", price: 10 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var itemTotal = 0;
    inventory.forEach(function (item) {
        itemTotal += item.product.price * item.quantity;
    });
    return itemTotal;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
