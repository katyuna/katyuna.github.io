'use strict';
//псевдоним репозитория js-lessons
var money = +prompt('Сколько вам лет?', '');
var time= prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    allMoney: money,
    timeData: time,
    surelyExpenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var obligatorily =     prompt('Введите обязательную статью расходов в этом месяце', '');
var howMuch = +prompt('Во сколько обойдется?', '');

var expenses = {};
expenses.item = obligatorily;
expenses.amount = howMuch;
appData.surelyExpenses = expenses;

//console.log(expenses);
//console.log(appData);


var oneDaymoney = howMuch/30;
alert('Бюджет на один день: ' + +oneDaymoney);

