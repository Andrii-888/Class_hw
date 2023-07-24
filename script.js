// 1) Создайте класс ShoppingCart, который имеет свойства items и totalPrice,
// а также методы addItem и removeItem. Метод addItem должен добавлять товар
// в корзину и обновлять общую цену, а метод removeItem должен удалять товар
// из корзины и обновлять общую цену. Оба метода должны выдавать ошибку,
// если переданный аргумент не является допустимым объектом со свойствами name и price.

// class Shoppingcart {
//   constructor() {
//     this.items = [];
//     this.totalPrice = 0;
//   }

//   validateItem(item) {
//     if (
//       !item?.name ||
//       !item?.price ||
//       typeof item.name !== "string" ||
//       typeof item.price !== "number" ||
//       item.price < 0 ||
//       Object.keys(item).length !== 2
//     ) {
//       throw new Error("Invalid item fields!");
//     }
//   }
// addItem(item) {
//   try {
//     this.validateItem(item);
//     const { price } = item;
//     this.items.push(item);
//     this.totalPrice += price;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
//   removeItem(item) {
//     try {
//       this.validateItem(item);
//       const { price } = item;
//       this.items = this.items.filter((product) => product.name !== item.name);
//       this.totalPrice -= price;
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }
// const card = new Shoppingcart();
// card.addItem({ name: "Hard", price: 59 });
// card.addItem({ name: "Redtre", price: -1 });
// card.addItem({ name: "Wot", price: 93 });
// console.log(card.items);
// console.log(card.totalPrice);
// card.removeItem({ name: "Hard", price: 59 });
// console.log(card.items);
// console.log(card.totalPrice);

// 2)Создайте класс с именем Triangle, который имеет свойства a, b и c,
// представляющие длины сторон треугольника. Класс должен иметь метод getPerimeter
// который вычисляет периметр. Класс также должен использовать блоки try-catch
// для обработки ошибок при создании нового экземпляра класса, выбрасывая ошибку,
// если значения a, b и c не являются допустимыми числами.

// class Triangle {
//   constructor(a, b, c) {
//     if (
//       typeof a !== "number" ||
//       typeof b !== "number" ||
//       typeof c !== "number" ||
//       a < 1 ||
//       b < 1 ||
//       c < 1
//     ) {
//       throw new Error("Parametors must be numbers");
//     }
//     this.a = a;
//     this.b = b;
//     this.c = c;
//   }
//   getPerimeter() {
//     return this.a + this.b + this.c;
//   }
// }
// try {
//   const triangle = new Triangle();
// } catch (error) {
//   console.log(error);
// }
// try {
//   const triangle2 = new Triangle(5, 4, 7);
//   console.log(triangle2.getPerimeter());
// } catch (error) {
//   console.log();
// }

// 3)Создайте класс Circle со свойствами radius и diameter.
// Добавьте методы getter и setter для обоих свойств, которые
// обновляют другое свойство соответствующим образом. Например, если
// обновляется свойство radius, то свойство diameter также должно обновляться
// по формуле diameter = radius * 2, и наоборот.
// При создании экземпляра указываем только радиус.

// class Circle {
//     #diameter = 0;

//     constructor(radius) {
//       this._radius = radius;
//       this.#diameter = radius * 2;
//     }

//     get radius() {
//       return this._radius;
//     }

//     set radius(value) {
//       this._radius = value;
//       this.#diameter = value * 2;
//     }

//     get diameter() {
//       return this.#diameter;
//     }

//     set diameter(value) {
//       this.#diameter = value;
//       this._radius = value / 2;
//     }
//   }
//   const circle = new Circle(53);
//   console.log(circle.radius);
//   console.log(circle.diameter);
//   console.log("______________");
//   circle.radius = 10;
//   console.log(circle.radius);
//   console.log(circle.diameter);
//   console.log("______________");
//   circle.diameter = 100;
//   console.log(circle.radius);
//   console.log(circle.diameter);

// 4)Создайте класс Person со свойствами firstName, lastName и age.
// Добавьте статическое свойство oldestPerson, которое хранит самый старый экземпляр Person,
// созданный на данный момент. Добавьте статический метод compareAge,
// который принимает два экземпляра Person и возвращает разницу в их возрасте.

// class Person {
//   static oldestPerson = null;

//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;

//     if (!Person.oldestPerson) {
//       Person.oldestPerson = {
//         firstName,
//         lastName,
//         age,
//       };
//     }
//     if (Person.oldestPerson && Person.oldestPerson.age < age) {
//       Person.oldestPerson = {
//         firstName,
//         lastName,
//         age,
//       };
//     }
//   }
//   static compareAge(personA, personB) {
//     return personA.age - personB.age < 0
//       ? personB.age - personA.age
//       : personA.age - personB.age;
//   }
// }
// const pesonA = new Person("Sani", "Tom", 77);
// const pesonB = new Person("San", "Toman", 57);
// const pesonC = new Person("Sanik", "Kom", 72);

// console.log(Person.oldestPerson);
// console.log(Person.compareAge(pesonA, pesonC));
// console.log(Person.compareAge(pesonB, pesonC));

// 5)Создайте класс Book со свойствами title, author и yearPublished.
// Добавьте статическое свойство, где будут сохранены все экземпляры Book.
// Добавьте статический метод listAuthors, который возвращает массив со  всеми именами авторов.
// class Book {
//   static library = [];

//   constructor(title, author, yearPublished) {
//     this.title = title;
//     this.author = author;
//     this.yearPublished = yearPublished;

//     Book.library.push({ title, author, yearPublished });
//   }
//   static listAuthors() {
//     return Book.library.map((book) => book.author);
//   }
// }
// const book1 = new Book("fatalliti", "Cuker", 1985);
// const book2 = new Book("war and word", "Trockii", 1954);
// console.log(Book.listAuthors());

