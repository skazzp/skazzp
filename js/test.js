

// for (let key in { 1: 1, 0: 0 }) {
//   console.log(key);
// } // выведет ключи (ОТСОРТИРУЮТСЯ ОТ МЕНЬШЕГО К БОЛЬШЕМУ)

// function validParentheses(parens) {
//   console.log(123, parens);
// }
// function check(parens) {
//   if (parens.includes('()') === false) {
//     parens === '' ? console.log(true) : console.log(false);
//   } else {
//     console.log(1);
//     parens = parens.replace('()', '');
//     check(parens);
//   }
// }
// validParentheses('((())');
// let str = '(((()';
// let i = str.indexOf('()');
// str = str.replace('()', '');
// console.log(str);
// check('()()()())');
// check('((((()))))');
// let helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

///////////////////////////////////////////////////////////////////
// ЗАМЫКАНИЕ/ЗАМИКАННЯ ЗМІННИХ
///////////////////////////////////////////////////////////////////

// function foo(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// let add5 = foo(5);    // замыкает (5) в (x)
// let add15 = foo(15);  //
// console.log(add5);    // возвращает ссылку на функцию function (y)
// console.log(add5(0)); // function (y) y=0
// console.log(add5(2)); // function (y) y=2, x - присвоен в "let add5 = foo(5);"
// console.log(add15(0));
// console.log(add15(2));

///////////////////////////////////////////////////////////////////
// Модуль 5. Завдання 16. STATIC змінна
///////////////////////////////////////////////////////////////////
// class Car {
//   // Change code below this line
//   #price;
//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

///////////////////////////////////////////////////////////////////
// function sortReindeer(reindeerNames) {
//   console.log(reindeerNames.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1])));
// }
// sortReindeer([
//   'Dasher Tonoyan',
//   'Dancer Moore',
//   'Prancer Chua',
//   'Vixen Hall',
//   'Comet Karavani',
//   'Cupid Foroutan',
//   'Donder Jonker',
//   'Blitzen Claus',
// ]);
///////////////////////////////////////////////////////////////////
// function sortByValueAndIndex(array) {
//   return array.map((element, index) => element * (index + 1)).sort((a, b) => a - b);
// }
// sortByValueAndIndex([1, 2, 3, 4, 5]);

/////////////////////////////////////////////////////////////////
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((first, second) =>
//   first.author.localeCompare(second.author)
// );

// const sortedByReversedAuthorName = [...books].sort((x, y) => y.author.localeCompare(x.author));

// const sortedByAscendingRating = [...books].sort((first, second) => first.rating - second.rating);

// const sortedByDescentingRating = books;
// console.log(sortedByAuthorName);

////////////////////////////////////////////////////////////////////
// Модуль 4. Завдання 35
////////////////////////////////////////////////////////////////////
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // const totalAveragePlaytimePerGame =
// console.log(
//   players.reduce((totalPT, player) => totalPT + player.playtime, 0) /
//     players.reduce((totalGP, player) => totalGP + player.gamesPlayed, 0)
// );
// console.log(players.reduce((avg, player) => avg + player.playtime / player.gamesPlayed, 0));

////////////////////////////////////////////////////////////////////
// let users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUsersWithEyeColor = (users, color) => {
//   console.log(users.filter(names => names.eyeColor === color));
// };
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(ageArr => ageArr.age > minAge && ageArr.age < maxAge);
// };
// console.log(getUsersWithAge(users, 20, 30));

// getUsersWithEyeColor(users, 'green');

// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

///////////////////////////////////////////////////////////
// let obj = {
//   hello: 123,
//   world: 234,
// };
// console.log(Object.keys(obj).join(' '));
///////////////////////////////////////////////////////////
// function points(games) {
//   let points = 0;
//   for (let game of games) {
//     if (game.split(':')[0] > game.split(':')[1]) {
//       points += 3;
//     } else if (Number(game.split(':')[0]) === Number(game.split(':')[1])) {
//       points += 1;
//     }
//   }
//   console.log(points);
//   return points;
// }
// points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);

// function divisibleBy(numbers, divisor) {
//   let arr = [];
//   for (let num of numbers) {
//     if (num % divisor === 0) {
//       arr.push(num);
//     }
//   }
//   return arr;
// }

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3));
// let array = [2, 57, 3, 27, 4, 7, 10];

// function foo(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//     if (array[i] % 2 !== 0) {
//       array.splice(i, 1);
//     }
//   }
// }
// foo(array);

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, x) {
//   console.log(`Індекс ${x}, значення ${number}`);
// });
/* const sum = number => {
let total = 0
for(let num of number.toString().split("")){
total += +num
if ( total > 10){
return sum(total)
}
}
return  total
}
console.log(sum(256)) */

// let sum = number => {
//   let a = number
//     .toString()
//     .split('')
//     .reduce((total, item) => (total += +item), 0);
//   a = a <= 9 ? a : sum(a);
//   return a;
// };
// console.log(sum(5555));
// const sum = number => number > 9 ? sum(number.toString().split("").reduce((total, item) => total += +item, 0)) : number
// console.log(sum(256)
////////////////////////////////////////////////////////////////////////////
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// console.log(tomorrowIcon);
/////////////////////////////////////////////////////////////////
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // allo() {
//   //   for (let pot of this.potions) {
//   //     console.log(pot);
//   //   }
//   // },
//   addPotion(newPotion) {
//     for (const potionName of this.potions) {
//       const { name } = potionName;
//       if (name === newPotion.name) {
//         console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//         return;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//     for (const potion of this.potions) {
//       if (potionName === potion.name) {
//         potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         return;
//       }
//     }
//     console.log(`Potion ${potionName} is not in inventory!`);
//   },
//   updatePotionName(oldName, newName) {
//     // let potionIndex = -1;
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         // potionIndex = this.potions.indexOf(potion);
//         // this.potions.splice(potionIndex, 1);
//         console.log('123');
//         potion.name = newName;
//         return;
//       }
//       // const potionIndex = this.potions.indexOf(oldName);

//       // if (potionIndex === -1) {
//       //   return `Potion ${oldName} is not in inventory!`;
//     }

//     // this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// // console.log(atTheOldToad.potions);
// // console.log(atTheOldToad.potions.name);
// // console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// // atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
// // atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// // console.log(atTheOldToad.allo());
// // atTheOldToad.removePotion('Dragon breath');
// // atTheOldToad.removePotion('Speed');

// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
// console.log(atTheOldToad.potions);
//////////////////////////////////////////////////////////
// Доповни метод updateBook(oldName, newName) таким чином, щоб він
// змінював назву книги з oldName на newName у властивості books.Використовуй indexOf()
// для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       this.books.splice(this.books.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles');
//////////////////////////////////////////////////////////
// Ми власники піцерії
// при потребі додайте аргументи у функції
//////////////////////////////////////////////////////////
// напиши функцію яка отримує масив піц які хоче юзер та повертає їх вартість
// результатом функції мають бути логи в консолі про результат виконання
// function makePizza(pizzas) {
//   const errorPizzas = [];
//   let totalPrice = 0;
//   for (let pizzaIndex in pizzas) {
//   const result = checkPizzaAndPrise(pizzas[pizzaIndex]);
//     if (result === 0) {
//       errorPizzas.push(pizzas[pizzaIndex]);
//     } else {
//       totalPrice += result;
//     }

//   }
//   consolePizzas(totalPrice, errorPizzas)
// }
// makePizza(["pizzaY", "Chicago", "California", "Paperoni", "Paperoni", "Paper"])

// також зробіть коллбек який перевіряє чи є в наявності така піцца та її вартість
// якщо піци немає в наявності та поверніть нуль та не забудьте його обробити правильно, якщо піца є то поверніть її вартість
// function checkPizzaAndPrise(pizza) {
//   const pizzas = ["Paperoni", "Chicago", "California", "Detroit"]
//   const prises = [25, 35, 28, 22]
//   if (pizzas.includes(pizza)) {
//     const indexPizza = pizzas.indexOf(pizza);
//     return prises[indexPizza];
//   } else {
//     return 0;
//   }
// }

//////////////////////////////////////////////////////////
// напишіть функцію яка отримуватиме два числа та колбек який має обробити цих два числа
// схематично це вигляд наступним чимно
// ви передаєте два числа, та функцію-колбек яка вміє отримувати два числа та повернути їх суму або інші математичні дії

/*
  sum - додавання
  sub - віднімання
  mult - множення
  div - ділення
*/

/* 
  - 1 зробіть голову функцію math()
  - 2 зробіть кілька функцій які отримують два числа та повертають результат математичної дії між ними
  - sum() - повертатиме суму тих чисел які отримує
  - sub() - повертатиме різницю тих чисел які отримує
	і так дальше
  ! функції для обрахування запишіть у форматі стрілкових функцій
  
  - 3 зробіть функцію яка логуватиме результат виклику
  - 4 поверніть результат виконання головної функції та виведіть його у консоль
*/
// function math(x, y, callback){
// 	let result = callback(x, y);
//   logResult(result);
// }
// function logResult(result){
// 	console.log(`Результат - ${result}`)
// }
// function sum(a,b){
// 	sumRes = a + b;
// 	return sumRes;
// }
// function sub(a,b){
// 	subRes = a - b;
// 	return subRes;
// }
// function mult(a,b){
// 	multRes = a * b;
// 	return multRes;
// }
// function div(a,b){
// 	divRes = a / b;
// 	return divRes;
// }
// math(5, 8, mult);

//////////////////////////////////////////////////////////

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

//////////////////////////////////////////////////////////
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = color;
//   console.log(rgb);
//   console.log(hex);
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

////////////////////////////////////////////////////////////
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
////////////////////////////////////////////////////////////
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let sumPrice = 0;
//   for (let product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//       sumPrice = product.price * product.quantity;
//       // console.log(sumPrice);
//     }
//     // console.log('allo', sumPrice);
//   }
//   console.log(sumPrice);
//   // Change code above this line
// }
// calculateTotalPrice('Radar');
// calculateTotalPrice('Blaster');
// calculateTotalPrice('Droid');
// calculateTotalPrice('Grip');
// calculateTotalPrice('Scanner');
////////////////////////////////////////////////////////////
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const val = [];
//   for (let prod of products) {
//     if (Object.keys(prod).includes(propName)) {
//       val.push(prod[propName]);
//     }
//   }
//   console.log(val);

//   // Change code above this line
// }
// getAllPropValues('cat');

/* for (let i = 1; i <= 10; i++) {
  let str = '';
  let y = Math.floor((10 - i) / 2); // count of spaces
  if (i % 2 === 1) {
    str = str.concat(" ");
  }
  // генеруємо пробіли перед зірочками
  for (let x = 0; x < y; x += 1) {

    str = str.concat(" ");
  }
  // генеруємо зірочки
  // в стрічку вводиться стільки зірочок скільки дорівнює i
  for (let star = 0; star < i; star++) {
    str = str.concat("*")
  }
  // генеруємо пробіли після зірочок
  for (let x = 0; x < y; x += 1) {
    str = str.concat(" ");
  }
  console.log(str);
}
 */
// юзер вводить математичну дію
// 2 + 2
// нам треба її порахувати та вивести результат в консоль

// шукаємо перший пробіл
// беремо символи від 0 до пробілу та перетворюємо в цирфу
// аналогічно дальше
// а потім через switch обробляємо
/* const string = prompt('введіть вираз:');
const firstSpace = string.indexOf(' ');
let x = +string.slice(0, firstSpace);
const cutString = x + string.slice(firstSpace + 1);
const secondSpace = cutString.indexOf(' ');
let y = +cutString.slice(secondSpace + 1);
const sign = string.slice(firstSpace + 1, firstSpace + 2);
let output = '';
output = output.concat(string, ' = ');
switch (sign) {
  case '+':
    output = output.concat(x + y);
    console.log(output);
    break;
  case '-':
    output = output.concat(x - y);
    console.log(output);
    break;
  case '*':
    output = output.concat(x * y);
    console.log(output);
    break;
  case '/':
    output = output.concat(x / y);
    console.log(output);
    break;
  case '%':
    output = output.concat(x % y);
    console.log(output);
    break;
  default:
    console.log('шось пішло не так');
}
 */

/* for (let i = 1; i <= 10; i += 1) {
  let str='';
  for (let count = 0; count < i; count += 1) {
  str = str.concat('*');
   console.log(str);
  }
} */

/* const str = "Mklkmdcsmnb&kjsdnc&765Mark"
let fixedStr=''; */
/* for(let i = 0; i < str.length; i += 1) {
  if (str[i] !== '&') {
    fixedStr += str[i];
  }
} */
/* for(let i = 0; i < str.length; i += 1) {
  if (isNaN(str[i])) {
    fixedStr += str[i];
  }
}
console.log(fixedStr); */

/* let str = "gdfgdfgweqgasdgdasghGASGAGAGASGSsbsbsbwr"
console.log(str.toLowerCase().replaceAll("g", '1'));
console.log(str.replaceAll("g", '1').replaceAll("G", '1'));
 */
/* const color = prompt("введіть колір:");

switch (color) {
  case 'red':
    console.log("стій, червоний");
    break;
  case 'yellow':
    console.log("готуйся, жовтий");
    break;
  case 'green':
    console.log("рушай, зелений");
    break;
  default:
    console.log("світлофор не працює")
} */

/* const user = {
  age: 8,
  gender: 'woman',
  balance: 1000,
  status: 'vip',
  items: {
    cars: []
  }
} */

/* function vipMeeting() {
  console.log(user.age < 18 
  ? "Вам немає 18" 
  : user.status !== "vip" 
  ? "Вас немає у списку запрошених" 
  : user.balance >= 5000 
  ? "Давайте гроші і проходьте" 
  : "Недостатньо коштів");
} */
/* function vipMeeting() {
  if (user.age < 18) {
    console.log("Вам немає 18");
  } else if (user.status !== "vip") {
    console.log("Вас немає у списку запрошених");
  } else if (user.balance >= 5000) {
    console.log("Давайте гроші і проходьте");
  } else {
    console.log("Недостатньо коштів")
  }
}*/
/* vipMeeting(); */
/* 
function womanFree() {
  if (user.age < 18) {
    console.log("Вам немає 18");
  } else if (user.gender === "woman") {
    console.log("Жіночко, проходьте");
  } else if (user.balance < 2000) {
    console.log("Недостатньо коштів")
  } else {
    console.log("Гроші є, проходьте");
  }
} */
/*   if (user.age >= 18) {
    if (user.gender === 'man') {
      if (user.balance >= 2000) {
        console.log("Гроші є");
      } else {
        console.log("Недостатньо коштів")
      }
    } else {
      console.log("Жіночко, проходьте");
    }
  } else {
    console.log("Вам немає 18");
  } */
/* womanFree(); */
