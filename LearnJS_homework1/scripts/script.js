'use strict';

var money = +prompt('Сколько вам лет?', '');
var time= prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    allMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var a1 =    prompt('Введите обязательную статью расходов в этом месяце', '');
var a2 = +prompt('Во сколько обойдется?', '');
var a3 =     prompt('Введите обязательную статью расходов в этом месяце', '');
var a4 = +prompt('Во сколько обойдется?', '');



appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

//console.log(expenses);
console.log(appData);


var oneDaymoney = (a1+a2)/30;
alert('Бюджет на один день: ' + +oneDaymoney);

