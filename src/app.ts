// I - Arrow functions:
// const pizzas = [
//   {
//     name: "Pepperoni",
//     toppings: ["pepperoni"],
//   },
// ];
//  implicit return arrow function
// const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());
// const pizza = {
//     name: 'Blazing Inferno',
//     getName: () => pizza.name,
// }
// console.log(mappedPizzas);
// console.log(pizza.getName());

// II - Default functions params:
// function multiply(a, b = 25) {
//   return a * b;
// }

// console.log(multiply(5));
// console.log(multiply(5, 35));

// III - Object literal improvements:
// - add functions in objects
// - use the properties of multiple objects into one variable

// const pizza = {
//   name: "Pepperoni",
//   price: 15,
//   getName() {
//     return this.name;
//   },
// };

// const toppings = ["pepperoni"];

// function createOrder(pizza, toppings) {
//   return { pizza, toppings };
// }

// console.log(pizza.getName());
// console.log(createOrder(pizza, toppings));

// V - Rest params
// function sumAll(message ,...arr) {
//     console.log(message);
//     return arr.reduce((prev, next) => prev + next);
// }

// const sum = sumAll('hello' ,1,2,3,4,5,6,7,8,9,10);

// console.log(sum);

// VI - Array spread operator

// const toppings = ["bacon", "chilli"];
// const newToppings = ["pepperoni"];
// const allToppings = [...toppings, ...newToppings];
// console.log(allToppings);

// VII - Destructuring

// const pizza = {
//   name: "Pepperoni",
//   toppings: ["pepperoni"],
// };

// function order({ name: pizzaName, toppings: pizzaToppings }) {
//   return { pizzaName, pizzaToppings };
// }

// const { pizzaName } = order(pizza);

// const toppings = ["pepperoni", "bacon", "chilli"];

// const [first, second, third] = toppings;

// function logToppings([first, second, third]: any) {
//   console.log(first, second, third);
// }

// logToppings(toppings);

// VIII - Primitive Tipes

// const pizzaCost: number = 10;
// const pizzaToppings: number = 5;

// function calculatePrice(cost: number, toppings: number): number {
//     return cost + 1.5 * toppings;
// }

// const cost: number = calculatePrice(pizzaCost, pizzaToppings);
// console.log(`Pizza costs: ${cost}`);

// IX - String types

// const coupon: string = "pizza25";
// function normalizeCoupon(code: string): string {
//   return code.toUpperCase();
// }
// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
// console.log(couponMessage);

// X - Boolen type
// const pizzas: number = 2;

// function offerDiscount(orders: number): boolean {
//   return orders >= 3;
// }

// if (offerDiscount(pizzas)) {
//   console.log(`You are entitled to a discount!`);
// } else {
//   console.log(`Order more than 3 pizzas for a discount!`);
// }

// XI - any type
//  should be used only if we have no idea what type o data is coming from a 3rd party source or if we have dinamyc variables.

// let coupon: any;

// coupon = 25;
// coupon = "sup";
// coupon = true;

// XII - Implicit & Explicit types => the infered type

// let implicitCoupon = "pizza25";
// let explicitCoupon: string = "pizz25";

// XIII - Void types (it means that there is no type at all => no return type)
//  void => only assign undefined or null to it
// Pure function: it won't mutate any value outside of itself

// let selectedTopping: string = "pepperoni";

// function selectTopping(topping: string): void {
//   selectedTopping = topping;
// }

// selectTopping("bacon");

// console.log(selectedTopping);

// XIV - never type (used when the function is never going to return a particular piece of code)

// function orderError(error: string): never {
//   throw new Error(error);
// //   never going to return a value!
// }

// orderError("Something went wrong");

// XV- Null-Undefined-Strictnullchecks

// let coupon: string | null = "pizza25";

// function removeCoupon(): void {
//     coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon);

// XVI - Union-Literal-Types

// let pizzaSize: string = "small";

// function selectSize(size: "small" | "medium" | "large"): void {
//   pizzaSize = size;
// }

// selectSize("large");

// console.log(`Pizza size: ${pizzaSize}`);

//  XVII - Function-Types

// function sumOrder(price: number, quantity: number): number {
//   return price * quantity;
// }

// let sumOrder: (price: number, quantity: number) => number = (x, y) => x * y;

// sumOrder = (x, y) => x * y;

// const sum = sumOrder(25, 2);
// console.log(`Total sum: ${sum}`);

//  XVIII - Function-Optional-Arguments
//  passing the ? sign in the function parameter flags typescript that the parameter is optional

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//   if (y) {
//     return x * y;
//   }
//   return x;
// };

// const sum = sumOrder(25);
// sumOrder(25, 2);
// console.log(`Total sum: ${sum}`);

// XIX - Function-Default-Params

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y = 1) =>  x * y;
// const sum = sumOrder(25, 5);
// console.log(`Total sum: ${sum}`);

// XX - Object Types

// let pizza: { name: string; price: number; getName(): string } = {
//   name: "Plain Old Pepperoni",
//   price: 20,
//   getName() {
//     return pizza.name;
//   },
// };
// console.log(pizza.getName());

//XXI - Array-Types-Generics

// let sizes: number[];

// sizes = [1, 2, 3];

// let toppings: Array<string>;

// toppings = ['pepperoni', 'tommato', 'bacon'];

//XXII - Tuple-Types
// When there is a fix structure for the array and we have to addere to those structure changes

// let pizza: [string, number, boolean]; // restricting the data structure.
// // used only when we know the data structure specs

// pizza = ['Pepperoni', 20, true];

// XXIII - Type-Alias

// type Size = 'small' | 'medium' | 'large';

// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x) => {
//   pizzaSize = x;
// };

// selectSize('medium');

//XXIV - Type-Assertions

// type Pizza = { name: string; toppings: number };

// const pizza: Pizza = { name: 'Blazzing Inferno', toppings: 5 };

// const serialized = JSON.stringify(pizza);

// function getNameFromJSON(obj: string) {
//   // return (<Pizza>JSON.parse(obj)).name; => the old way
//   return (JSON.parse(obj) as Pizza).name; //The new way
// }

// getNameFromJSON(serialized);

//XXV - Numeric-Enums-Reverse-Mapping

// enum Sizes {
//   Small,
//   Medium,
//   Large,
// }

// enum Sizes {
//  ExtraLarge = 3,
// }

// const selectedSize = 2;

// console.log(Sizes[selectedSize]);

// XXVI - String-Enums-Inlining-Members-Final

// const enum Sizes {
//   Small = 'small',
//   Medium = 'medium',
//   Large = 'large',
// }

// let selected: Sizes = Sizes.Small;

// function updateSize(size: Sizes): void {
//   selected = size;
// }

// updateSize(Sizes.Large);

// console.log(Sizes.Large);

// XXVII - Interfaces-Optional-Properties

// interface Pizza {
//   name: string;
//   sizes: string[];
// }

// interface Pizzas {
//   data: Pizza[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

//XXVIII Interface-Functions

// interface Pizza {
//   name: string;
//   sizes: string[];
//   getAvailableSizes(): string[];
// }

// type getAvailableSizes = () => string[];

// interface Pizzas {
//   data: Pizza[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

// XXIX - Extending-Interfaces

// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   getAvailableSizes(): string[];
// }

// type getAvailableSizes = () => string[];

// interface Pizzas {
//   data: Pizza[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

//XXX - Interface-Optional-Properties

// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   toppings?: number;
//   getAvailableSizes(): string[];
// }

// type getAvailableSizes = () => string[];

// interface Pizzas {
//   data: Pizza[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

// pizza.toppings = 1;

// XXXI - Interface-Index-Signatures

// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string;
//   toppings?: number;
//   getAvailableSizes(): string[];
//   [key: number]: string;
//   // [key: string]: any;
//   // dictionary: {
//   //   [key: string]: any;
//   // };
// }

// type getAvailableSizes = () => string[];

// interface Pizzas {
//   data: Pizza[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza[1] = 'xyz';
// pizza.toppings = 1;

// XXXII - Classes-Introduction

// class Pizza {
//   name: string;
//   toppings: string[] = [];

//   constructor(name: string) {
//     this.name = name;
//   }

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');

// console.log(pizza);

// function Pizza(name: string) {
//   this.name = name;
//   this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//   this.toppings.push(topping);
// };

// XXXII - Public-Private-Members

// class Pizza {
//   toppings: string[] = [];

//   constructor(private name: string) {}

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');
// console.log(pizza);

// XXXIII - 30-readonly-properties

// class Pizza {
//   toppings: string[] = [];

//   constructor(readonly name: string) {}

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');
// pizza.addTopping('bacon');
// pizza.addTopping('Onion rings');
// console.log(pizza.name);
// console.log(pizza);

//XXXIV - Setters-Getters

// class Sizes {
//   constructor(public sizes: string[]) {}

//   public get availableSizes(): string[] {
//     return this.sizes;
//   }

//   public set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// const sizes = new Sizes(['small', 'medium']);

// //invoker getter
// console.log(sizes.availableSizes);

// //invoker setter
// sizes.availableSizes = ['medium', 'large'];

// console.log(sizes.availableSizes);

// class Pizza {
//   toppings: string[] = [];

//   constructor(readonly name: string) {}

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');

//XXXV - Inheritance-Extends

// class Sizes {
//   constructor(public sizes: string[]) {}

//   public get availableSizes(): string[] {
//     return this.sizes;
//   }

//   public set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];

//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.addTopping('pepperoni');

//XXXVI - Abstract-Classes

// abstract class Sizes {
//   constructor(public sizes: string[]) {}

//   public get availableSizes(): string[] {
//     return this.sizes;
//   }

//   public set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];

//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes);
//   }

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.addTopping('pepperoni');

//XXXVII - Protected-Members-Inheritance

// abstract class Sizes {
//   constructor(protected sizes: string[]) {}

//   public get availableSizes(): string[] {
//     return this.sizes;
//   }

//   public set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: string[]) {
//     super(sizes);
//   }

//   public updateSizes(sizes: string[]) {
//     this.sizes = sizes;
// }

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.updateSizes(['large']);
// console.log(pizza.availableSizes);

//XXXVIII - Class-Interface-Implements

// interface SizesInterface {
//   availableSizes: string[];
// }

// abstract class Sizes implements SizesInterface {
//   constructor(protected sizes: string[]) {}

//   public get availableSizes(): string[] {
//     return this.sizes;
//   }

//   public set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
// }

// interface PizzaInterface extends SizesInterface {
//   readonly name: string;
//   toppings: string[];
//   updateSizes(sizes: string[]): void;
//   addTopping(topping: string): void;
// }

// class Pizza extends Sizes implements PizzaInterface {
//   toppings: string[] = [];

//   constructor(readonly name: string, sizes: string[]) {
//     super(sizes);
//   }

//   public updateSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }

//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.updateSizes(['large']);
// console.log(pizza.availableSizes);

//XXXIX - Static-Properties-Methods

// const date = +new Date(); //Instance method (create a new instance)
// console.log(date);

// const date = Date.now();  // satic method, no need to create a new instance
// console.log(date);

// class Coupon {
//   static allowed = ['Pepperoni', 'Blazing Inferno'];

//   static create(percentage: number) {
//     return `PIZZA_RESTAURANT_${percentage}`;
//   }
// }

// console.log(Coupon.create(25));

//XL - Generics

// class Pizza {
//   constructor(private name: string, private price: number) {}
// }

// class List<T> {
//   private list!: T[];

//   addItem(item: T): void {
//     this.list.push(item);
//   }

//   getList(): T[] {
//     return this.list;
//   }
// }

// const list = new List<Pizza>();

// list.addItem(new Pizza('Pepperoni', 15));

// const pizzas = list.getList();

// class Coupon {
//   constructor(private name: string) {}
// }

// const anotherList = new List<Coupon>();
// anotherList.addItem(new Coupon('PIZZA25'));

//XLI - 38-overloads

function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray.split('').reverse().join('');
  }
  return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse([1, 2, 3, 4]);
