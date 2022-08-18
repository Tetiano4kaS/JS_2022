// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let newObj = [];
//
// let user1 = new User(1, 'vasya', 'grusz', 'vasuagrusz@hmail.com', +48036965965)
// let user2 = new User(2, 'kolya', 'szpakowiecz', 'v2asuagrusz@hmail.com', +48036965965)
// let user3 = new User(3, 'olya', 'kwiatkowska', 'v3asuagrusz@hmail.com', +48036965965)
// let user4 = new User(4, 'max', 'marzec', 'v4asuagrusz@hmail.com', +48036965965)
// let user5 = new User(5, 'oleg', 'braun', 'v5asuagrusz@hmail.com', +48036965965)
// let user6 = new User(6, 'masha', 'sokol', 'v6asuagrusz@hmail.com', +48036965965)
// let user7 = new User(7, 'oksana', 'gruszka', 'va7suagrusz@hmail.com', +48036965965)
// let user8 = new User(8, 'lyuda', 'miller', 'va8suagrusz@hmail.com', +48036965965)
// let user9 = new User(9, 'anya', 'trusz', 'vas9uagrusz@hmail.com', +48036965965)
// let user10 = new User(10, 'vika', 'cholod', 'va0suagrusz@hmail.com', +48036965965)
//
// newObj.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(newObj)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

// console.log(newObj.filter(User=> User.id %2 ===0))


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(newObj.sort((a,b) => b.id-a.id) )


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client = [];
//
// let user1 = new Client(1, 'vasya', 'grusz', 'vasuagrusz@hmail.com', +48036965965, ['zabawki', 'kubek'])
// let user2 = new Client(2, 'kolya', 'szpakowiecz', 'v2asuagrusz@hmail.com', +48036965965, ['zabawki', 'kubek', 'zeszyt', 'zabawki', ' kubek', 'zeszyt'])
// let user3 = new Client(3, 'olya', 'kwiatkowska', 'v3asuagrusz@hmail.com', +4803696596, ['zabawki', 'kubek', 'zeszyt', 'zabawki', 'kubek'])
// let user4 = new Client(4, 'max', 'marzec', 'v4asuagrusz@hmail.com', +48036965965, ['zabawki'])
// let user5 = new Client(5, 'oleg', 'braun', 'v5asuagrusz@hmail.com', +48036965965, ['zabawki', 'kubek', 'zeszyt'])
// let user6 = new Client(6, 'masha', 'sokol', 'v6asuagrusz@hmail.com', +48036965965, ['zabawki', 'kubek',])
// let user7 = new Client(7, 'oksana', 'gruszka', 'va7suagrusz@hmail.com', +48036965965, ['zabawki', 'kubek', 'zeszyt', 'zabawki', 'kubek', 'zeszyt', 'zabawki', 'kubek', 'zeszyt'])
// let user8 = new Client(8, 'lyuda', 'miller', 'va8suagrusz@hmail.com', +48036965965, ['zabawki', 'zeszyt'])
// let user9 = new Client(9, 'anya', 'trusz', 'vas9uagrusz@hmail.com', +48036965965, ['zabawki', 'kubek', 'zeszyt'])
// let user10 = new Client(10, 'vika', 'cholod', 'va0suagrusz@hmail.com', +48036965965, ['zabawki', 'kubek', 'zeszyt'])
//
// client.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(client)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//
// console.log(client.sort((a,b)=> a.order.length-b.order.length))
//

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car(model, producer, year, maxspeed, enginecapacity) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.enginecapacity = enginecapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//     this.info = function () {
//         for (let item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item}---${this[item]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         console.log(this.maxspeed += newSpeed);
//     }
//     this.changeYear = function (newValue) {
//         console.log(this.year = newValue);
//     }
//     this.addDriver = function (driver) {
//         console.log(this.driver = driver)
//     }
// }
//
// let x = new Car('audi', 'ger', 1999, 100, 1.8);
// console.log(x)
// x.drive()
// x.info()
// x.increaseMaxSpeed(120)
// x.changeYear(2000)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, year, maxspeed, enginecapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginecapacity = enginecapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//     }
//
//     info() {
//         for (let item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} --- ${this[item]}`)
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         console.log(this.maxspeed += newSpeed);
//     }
//     changeYear (newValue){
//         console.log(this.year=newValue);
//     }
//     addDriver (driver){
//         console.log(this.addDriver = driver);
//     }
// }
//
// let x = new Car('audi', 'ger', 1999, 100, 1.8);
// x.info()
// x.increaseMaxSpeed(15)
// x.changeYear(2000)
// x.info()
// x.addDriver()


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinder = [];
// let cin1 = new Cinderella('alice', 25, 34);
// let cin2 = new Cinderella('lice', 25, 35);
// let cin3 = new Cinderella('alic', 25, 36);
// let cin4 = new Cinderella('ali', 25, 37);
// let cin5 = new Cinderella('ice', 25, 38);
// let cin6 = new Cinderella('li', 25, 39);
// let cin7 = new Cinderella('a', 25, 40);
// let cin8 = new Cinderella('alice', 25, 41);
//
// cinder.push(cin1, cin2, cin3, cin4, cin5, cin6, cin8);
//
// class Prince extends Cinderella {
//     constructor(name, age, findFoot) {
//         super(name, age);
//         this.findFoot = findFoot;
//     }
//
// }
//
// let prince = new Prince('vasya', 30, 35)
//
// let find = (cinder, prince) => {
//     for (let item of cinder) {
//         if (prince.findFoot === item.footSize) {
//             return `My found cinderella is ${item.name}`;
//         }
//     }
// }

// console.log(cinder);
// console.log(prince);
// console.log(find(cinder, prince));