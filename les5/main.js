// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaOfRectangle(a, b) {
//     let side = a * 6
//     return side;
// }
// console.log(areaOfRectangle(5,2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function areaOfCircle(r) {
//     let radius = Math.PI * Math.pow(r,2)
//     return radius;
// }
//
// console.log(areaOfCircle(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaOfCylindr(r,h){
// let area= (2*Math.PI*r*h) + (2 * Math.PI * Math.pow(r,2))
//     return area;
// }
//
// console.log(areaOfCylindr(3,2))

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let topBooks = ['The Last Thing He Told Me', 'The Midnight Library', 'Horse', 'The Best Is yet to Come',
// 'Lessons in Chemistry', 'The House Across the Lake', 'Escape', 'Where the Crawdads Sing', 'The 6:20 man',
// 'The it Girl', 'The Last Thing He Told Me', 'The Midnight Library', 'Horse', 'The Best Is yet to Come',
// 'Lessons in Chemistry', 'The House Across the Lake', 'Escape', 'Where the Crawdads Sing', 'The 6:20 man', 'The it Girl'];
//
// function elementsPrinted (array) {
//     for (let item of array) {
//         console.log(item)
//     }
// }
// elementsPrinted(topBooks)
//
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function printedText(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// printedText(`The global logistics industry is fragmented in nature and operates at low margins with staff shortages
// in the commercial trucking and labour-intensive industry segments.
//
// This study analyses how the global logistics industry spends on IoT solutions. It provides regional market overviews
// and their respective shares, drivers, and adoption barriers and identifies key trends and application areas in the
// end-to-end logistics value chain. This study also identifies the new-generation services and transformational growth
// opportunities in a strategic partner ecosystem so that logistics industry participants can deliver future-proof
// connected solutions for smart logistics operation.`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function unorderedList(text) {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`);
// }
//
// unorderedList(`The Last Thing He Told Me`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(text,y){
//    console.log( `<ul>`)
//
//     for (i=0; i<y; i++) {
//     console.log (`<li>${text}</li>`)
//     }
//
//     console.log (`</ul>`)
// }
// list(`igihklj`,3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


//
// function printedList(...elements) {
//
//    console.log(`<ul>`)
//
//     for (let item of elements) {
//         console.log(`<li> ${item}</li>`)
//     }
//     console.log (`</ul>`)
// }
//     printedList('The Last Thing He Told Me', 'The Midnight Library', 125, 'Horse', 'The Best Is yet to Come', 546, true)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// users = [
//     {id: 1, name: 'Anya', age: 22},
//     {id: 2, name: 'Vasya', age: 25},
//     {id: 3, name: 'Olya', age: 28}
// ]
//
// function printedObjects(array) {
//
//     for (let object of array) {
//         document.write(`<div>${object.id} ${object.name} ${object.age}</div>`)
//     }
//
// }
//
// printedObjects(users)

// - створити функцію яка повертає найменьше число з масиву
//???????????????
// numbers = [125, 365, 10, 12, -5, 9, -2,3];
//
// function minNumber(array) {
//     let number = array[0];
//     for (let item of array) {
//         if (number > item) {
//             number = item
//         }
//     }
//     return number;
// }
// console.log(minNumber(numbers))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arr(...elements) {
//     let sum = 0;
//     for (const element of elements) {
//         sum += element
//     }
//     console.log(sum)
// }
//
// arr(1, 2, 3, 4,-2)

// function array(...elements){
//     let sum = 0;
//     for (let i = 0; i < elements.length; i++) {
//         sum += elements[i]
//     }
//     const avg= sum/elements.length
//     console.log(avg)
// }
// array(1,2,3,4)