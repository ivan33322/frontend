// let name = 'Ivan';
// console.log('name ${name}')
// == нестрогое сравнение
// === строгое сравнение

// 1 вариант
// function summa(a, b) {
//     console.log(a+b);
// }
// summa(2, 4);

// 2вариант
// function summa(a, b) {
//     return (a+b);
// }
// let sum = summa(2, 4);
// console.log(sum)

// const ray = function() {
//     console.log('Привет');
// };

// ray()
// let text = ['eqe', 'eqeqeq', 'eqeqeq', 'eqeqeq', 'eqeqeqeq', 'qeqeqeq'];
// text.lenght
// text.toUpperCase()
// text.indexOf('world')
// console.log(text.slice([2], [5]))


// function first(callback) {
//     console.log('Hello');
//     callback();
// }

// function second() {
//     console.log('world');
// }

// first(second);

//работа с объектами
// const wea = {
//     name : `Ivan`,
//     age : 18,
//     height : 180,
//     weight : 70 
// }

// delete object.name;

// console.log(wea)
// console.log(Object.keys(wea))
// const {name, age} = wea;
// console.log(name, age)

//массивы

// const massive = [1, 2, 3];
// massive.push(10);

// console.log(massive);

// massive.pop();

// console.log(massive);

// console.log(massive.join(', '));
// //копирование массива
// const massive2 = massive.slice();
// massive2.push(6);
// console.log(massive, massive2);

// massive3 = [...massive];
// console.log(massive, massive3);

// massive4 = [...massive, ...massive2, ...massive3, 99];

// console.log(massive4)

// ООП
// const sedan = {
//     color: 'grey'
// }

// const bmw = {
//     enginePower : 200
// }

// const toyoya = {
//     enginePower : 120
// }

// Object.setPrototypeOf(bmw, sedan)

// console.log(bmw.color)

// let text = '123';
// из числа в строку
// text = text + ''
// из строки в число
// console.log(+text)

// const box = document.querySelector('#box');
// console.log(box); 

// box.style.cssText = 'color: red';

// const button = document.querySelectorAll('button');
// console.log(button); 

// const div = document.createElement('div');
// div.classList.add('button-red');
// document.body.prepend(div);

// div.innerHTML = '<h1>Hello</h1>';

// div.remove()


// const button = document.querySelector('button');
// const link = document.querySelector('.link');
// const buttons = document.querySelectorAll('button');

// buttons.forEach(item => {
//     item.addEventListener('click', (event) => {
//         event.target.remove();
//     })
// });


// button.addEventListener('mouseenter', (item) => {
//     console.log('Hello');
//     item.target.remove();
// });

// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('hello')
// })


// const timer = setTimeout(function() {
//     console.log('Прошло 2 секунды');
// }, 2000);


// function logger() {
//     console.log('Прошло 5 секунд');
// }

// let timerLogger = setTimeout(logger, 5000);

// // clearInterval(timerLogger);

// timerLogger = setInterval(logger, 2000);

// function User(name, id, age) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.admin = false;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const igor = new User('Igor', 13, 18);
// console.log(igor.hello());

// User.prototype.exit = function() {
//     console.log(`Goodbye ${this.name}`);
// };

// console.log(igor);


// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcRetangle() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);
// console.log(square.calcRetangle());

// const names = ['Ivan', 'Oleg', 'Elizovetta', 'Dmitriy'];
// const namesChange = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(namesChange);

// const names = ['IvaN', 'OleG', 'ElizoVetta', 'DmiTriy'];
// const goodNames = names.map((name) => {
//     return name.toLowerCase();
// });

// console.log(goodNames);

// const arr = [1, 'OleG', 3];
// console.log(arr.every(item => typeof(item) === 'number'));   

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((sum, current) => sum + current);
// console.log(result);

// function getHiddenCard(){};
// END

let tochka = '*';
let cc = 1234567812345678;
console.log(cc[12][15], tochka.repeat(12));

