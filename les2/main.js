// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let topBooks = ['The Last Thing He Told Me', 'The Midnight Library', 'Horse', 'The Best Is yet to Come', 'Lessons in Chemistry', 'The House Across the Lake', 'Escape', 'Where the Crawdads Sing', 'The 6:20 man', 'The it Girl'];
console.log(topBooks[0]);
console.log(topBooks[1]);
console.log(topBooks[2]);
console.log(topBooks[3]);
console.log(topBooks[4]);
console.log(topBooks[5]);
console.log(topBooks[6]);
console.log(topBooks[7]);
console.log(topBooks[8]);
console.log(topBooks[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bookTheItGirl = {
    title: 'The it Girl',
    pageCount: 422,
    genre: 'Fiction'
}

let bookTheMan = {
    title: 'The 6:20 man',
    pageCount: 659,
    genre: 'Fiction'
}

let bookEscape = {
    title: 'Escape',
    pageCount: 423,
    genre: 'Fiction'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let bookTheMan = {
    title: 'The 6:20 man',
    pageCount: 659,
    genre: 'Fiction',
    authors: [{name: 'David Baldacci', age: 57},
        {name: 'Bob Balaban', age: 55}
    ]
}

let bookLessonsInChemistry = {
    title: 'Lessons in Chemistry',
    pageCount: 365,
    genre: 'Fiction',
    authors: [{name: 'Li Chang', age: 48},
        {name: 'Alex G', age: 50}]
}

let bookTheKingdomOfSand = {
    title: 'The Kingdom of Sand',
    pageCount: 258,
    genre: 'Novel',
    authors: [{name: 'Holleran Andrew', age: 35},
        {name: 'Alex G', age: 50}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'User1', username: 'User Name 1', password: 11111},
    {name: 'User2', username: 'User Name 2', password: 22222},
    {name: 'User3', username: 'User Name 3', password: 33333},
    {name: 'User4', username: 'User Name 4', password: 44444},
    {name: 'User5', username: 'User Name 5', password: 55555},
    {name: 'User6', username: 'User Name 6', password: 66666},
    {name: 'User7', username: 'User Name 7', password: 77777},
    {name: 'User8', username: 'User Name 8', password: 88888},
    {name: 'User9', username: 'User Name 9', password: 99999},
    {name: 'User10', username: 'User Name 10', password: 10101}
]
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
