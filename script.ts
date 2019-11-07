//Tallest Mountian

//Interface
interface Mountain {
  name: string;
  height: number;
}

//array
let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
  let max = 0;
  let currentTallest: string = "";

  //in the mountain array each mountain is looked at
  mountains.forEach(mountain => {
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

let mountainName = findNameOfTallestMountain(mountains);
console.log(mountainName);

// Products

//Interface
interface Product {
  name: string;
  price: number;
}

//array
let products: Product[] = [
  { name: "Cola", price: 1 },
  { name: "Chips", price: 2 },
  { name: "Avocado", price: 3 },
  { name: "Bread", price: 5 }
];

function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

let productaverage = calcAverageProductPrice(products);
console.log(productaverage);

//Inventroy

//Interface
interface InventoryItem {
  product: Product;
  quantity: number;
}

//array
let inventory: InventoryItem[] = [
  { product: { name: "moto", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1 }, quantity: 20 }
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  let itemTotal: number = 0;
  inventory.forEach(item => {
    itemTotal += item.product.price * item.quantity;
  });
  return itemTotal;
}

let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
