//директива use strict
//мы пишем на стандарте ES6 и некоторые
//ошибки прошлого работать не будут
//например a=5 (т.е. без объявления)
'use strict';

/*alert( 'Привет, Мир!' );
//Переменные
var planetName='Earth';
var userName='Petr';

// Окно с полем для ввода
var name = prompt('Введите ваше имя?', '');
alert('Ваше имя ' + name + ' !');

/* БАР
alert('Драсти!')
var go = prompt('Идем сегодня в бар?', 'да/нет');
if (go!='да') {
 goagain=prompt('А если подумать?', '')
 if (goagain!='да'){
     alert('Уходи! Ты злой!')
 }
 else {
     alert ('А ты молодец! Собирайся!')
 }
}
else {
    alert( 'Собирайся!');
}*/

//Массивы
/*let person={
    name: "John",
    age: 25,
    isMarred: false
};
console.log (person.name);

let arr = [2,3,4,5,7];
console.log (arr[3]);

//Окно с кнопками OK и CANCEL
//нажать OK вернет true, сcancel - false
let answer = confirm("A you here?");
console.log (answer);

//type of для определения типа данных
let answer = prompt("Определить тип данных", "введите");
console.log (typeof(arr));*/

//Унарный плюс преобразует к типу number
/*let a = +prompt("на выходе отдам число", "введите");
console.log (a);
console.log (typeof(a));

//Инкремент и декремент
let incr=10, decr=10;
//сначала прибавит, потом вернет
console.log (++incr);
console.log (--decr);
//Сначала вернет, потом прибавит
let incr1=10, decr1=10;
console.log (incr1++);
console.log (decr1--);

//== - сравнение, === - строгое сравнение по типам данных
console.log ("2" == 2); //true
console.log ("2" === 2); //false*/

// И ИЛИ
let isCheked = true,
    isClose = true,
    isAnotherOne = false;

console.log (isCheked && isClose); //true
console.log (isCheked && isAnotherOne); //false
console.log (isCheked || isClose); //true
console.log (isCheked || isAnotherOne); //true


