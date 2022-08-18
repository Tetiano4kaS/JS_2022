// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool'
//
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool'
//
// let toUpperCaseStr1= str1.toUpperCase();
// let toUpperCaseStr2= str2.toUpperCase();
// let toUpperCaseStr3= str3.toUpperCase();

// console.log(toUpperCaseStr1)
// console.log(toUpperCaseStr2)
// console.log(toUpperCaseStr3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log(toUpperCaseStr1.toLowerCase())
// console.log(toUpperCaseStr2.toLowerCase())
// console.log(toUpperCaseStr3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let arr= str.split(' ');
// console.log(arr)

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let map = arr.map(num => String(num))
// console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

// let nums = [11, 21, 3];
// // sortNums(nums, 'ascending') // [3,11,21]
// // sortNums(nums,'descending' ) // [21,11,3]
//----------------------------------------------
// function sortNums(nums, direction) {
//     if (direction === 'ascending') {
//         nums.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         nums.sort((a, b) => b - a)
//     }
//     return nums;
// }
// console.log(sortNums(nums, 'descending'))

// //
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// ----------------------------------------------------
// let lower = coursesAndDurationArray.sort((num1, num2) =>
//     num1.monthDuration - num2.monthDuration)
// console.log(lower)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//----------------------------------------------------------------

// let filter = coursesAndDurationArray.filter((course) => course.monthDuration > 5 )
// console.log(filter)

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// let deck = [];
// const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
// const values = [6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Joker'];
// const colors = ['red', 'black']
//
// for (let suit in suits) {
//     for (let value in values) {
//
//         if (suits[suit] === 'Hearts' || suits[suit] === 'Diamonds') {
//             deck.push(`${values[value]} of ${suits[suit]}  ${colors[0]}`);
//         } else if (suits[suit] === 'Spades' || suits[suit] === 'Clubs') {
//             deck.push(`${values[value]} of ${suits[suit]} ${colors[1]}`);
//         }
//
//     }
// }
// let deck1 = deck;
// console.log(deck)
//

// let cards = JSON.parse(JSON.stringify(deck));
// console.log(cards)


//
// let map = deck.map(string => Object(string))
// console.log(map)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// console.log(deck1)
// let reduce= map.reduce(function (accumulator, card){
//     if (card === 'Spades'){
//         accumulator.spades.push(card);
//     } else if (card === 'Clubs'){
//         accumulator.clubs.push(card);
//     } else if (card === 'Hearts') {
//         accumulator.hearts.push(card);
//     }else if (card === 'Diamonds'){
//         accumulator.diamonds.push(card)
// }, {
//         spades:[],
//         diamonds:[],
//         hearts:[],
//         clubs:[]
//     }}
// )
// console.log(reduce)
