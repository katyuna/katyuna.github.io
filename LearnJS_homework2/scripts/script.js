'use strict';

var money = +prompt('Ваш бюджет на месяц?', '');
var time= prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    allMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2;i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50){

        appData.expenses[a]=b; 
    } else {
        continue;
    }
 };
 /*let i = 0;
 while(i<2){
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    i++;
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50){
            appData.expenses[a]=b; 
    } else {
        continue;
    }

 };*/

 /*let i=0;
 do 
 {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    i++;
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50){
            appData.expenses[a]=b; 
    } else {
        continue;
    }

 } while (i<2);*/





appData.moneyPerDay = appData.allMoney / 30;

console.log(appData);

alert('Бюджет на один день: ' + appData.moneyPerDay);

