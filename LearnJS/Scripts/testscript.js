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
console.log ("2" === 2); //false

// И ИЛИ
let isCheked = true,
    isClose = true,
    isAnotherOne = false;

console.log (isCheked && isClose); //true
console.log (isCheked && isAnotherOne); //false
console.log (isCheked || isClose); //true
console.log (isCheked || isAnotherOne); //true
*/

//УСЛОВИЯ if проверяет на true т.е. если верно поэтому if(1) всегда будет true
/*var num=50;
if (num<49) {
    console.log ('Мало')
} else if (num>100){
    console.log('Много')
} else {
    console.log('Верно')
};
//более короткая запись
(num == 50) ? console.log ('Верно') : console.log ('Не верно')

//Если много ветвлени1
swith (num) { //ЧТО мы проверяем - в данном случае переменную num
    case num < 49 : 
        console.log ('Мало'); //условие : Дествие в случае его выполнения
        break;
    case num > 100 :
        console.log('Много');
        break;
    case 50 : //особенность! если мы проверяем на соответсвие значению, то просто записываем это значение
        console.log ('Верно');
        break;
    default :
        console.log ('Ни одно из условий');
        break;

}*/

//ЦИКЛЫ
//При помощи цикла for выведите чётные числа от 2 до 10.
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 1) continue; //не выводить четные значения
    console.log(i);
  };

  var i=0;
  while (i<3){
      i++;
      console.log("номер " + i + "!")
  };
//Напишите цикл, который предлагает prompt ввести число, большее 100. 
//Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
  /*var num;
  do {
    num = prompt("Введите число больше 100?", 0);
  } while (num <= 100 && num != null);*/

  //Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
 // n - простое, если при делении на любое число от 2 до n-1 есть остаток.
 /*nextPrime:
 for (var i = 2; i <= 10; i++) {

   for (var j = 2; j < i; j++) {
     if (i % j == 0) continue nextPrime;
   }

   console.log ( i ); // простое
 };*/
 //DO
let num = 50;
do {
  console.log (num);
  num++;
} 
while (num < 55);



