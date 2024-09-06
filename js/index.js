//document.write('123');
//console.log(Math.PI);
//alert("Вывод информации");
//confirm("Вопрос?");
//prompt("Вопрос с текстовым ответом");

//Циклы
//певоначальное значение/ собледаемое условие / что каждый раз будет происходить с числом i
// for(var i = 0; i < 10; i++){
//     if(i==5){
//         //break;
//         continue;
//     }
//     console.log(i);
// }

// while
// var x = 0;
// while(x<10){
//     console.log(x);
//     x++;
// }

//do while
// var y = 0;
// do {
//     console.log(y);
//     x++;
// } while(y < 10);

// Условия
// || &&
// let number = 8;
// if(number==5) {
//     console.log('ok');
// } else if(number==6) {
//     console.log('ok2');
// } else {
//     console.log('no');
// }

// let num = prompt('Введите число', '');
// let message = (num > 0) ? '1':
//     (num < 0) ? '-1':
//     '0';
// alert( message );

// let num = 10;
// switch(num) {
//     case "4": 
//         console.log('nanana');
//     break;
//     default:
//         console.log('not');
// }

//массивы
// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr[0][1])

// let pustaya_peremennaya = null;
// let peremennaya = NaN;

// function info() {
//     console.log('123');
// }
// info();

// function info2(word) {
//     console.log(word, 'Ivan');
// }
// info2("Hello");

//КАК ИЗМЕНИТЬ HTML ЧЕРЕЗ JS добавить можно через innerHTML

// let text = document.getElementById('text');
// text.style.color = "blue";

// Методы lenght join() sort() reverse() split()
// class Person{
//     constructor(name, age, happiness) {
//         this.name = name;
//         this.age = age;
//         this.happiness = happiness;
//     }
// }
// let alex = new Person('Alex', 45, true);
// console.log(alex.name);