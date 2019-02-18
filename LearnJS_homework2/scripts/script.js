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


for (i = 0; i < 2;i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    appData.expenses[a]=b;
}

console.log(appData);

var oneDaymoney = (a1+a2)/30;
alert('Бюджет на один день: ' + +oneDaymoney);

