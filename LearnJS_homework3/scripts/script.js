'use strict';

var money, time; //объявили переменные как глобальные, чтоб использовать их за пределами функций
var appData = {
    allMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

//бюджет на месяц
function start (){
    money = +prompt('Ваш бюджет на месяц?', ''); //переменные уже объявлены, поэтому не нужно
    time= prompt('Введите дату в формате YYYY-MM-DD', ''); //заново объявлять их через var
    
    while (isNaN(money) || money == '' || money == null){  //isNaN возвращает true, если не цифры
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.allMoney = money;
}
start();

//Уровень достатка
// Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
function detectLevel(){
    if (money < 0){
        console.log('Да ты на мели!');
    } else if (money < 10000){
        console.log('Низкий достаок');
    } else if(money > 10000 && money < 30000){
        console.log('Средний достаок');
    } else if(money > 30000){
        console.log('Высокий достаок');
    }
}
detectLevel()

//Обязательные Расходы
function chooseExpenses(){
for (let i = 0; i < 2;i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'number' && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50){

        appData.expenses[a]=b; 
    } else {
        continue;
    }
 }
}
chooseExpenses();

//Бюджет на день
//Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)
function detectDayBudget(){
appData.moneyPerDay = +(appData.allMoney / 30).toFixed(2);//округлит до 2 десятичноых знаков, НО вернет СТРОКУ
alert('Бюджет на один день: ' + appData.moneyPerDay);
console.log(appData);
}
detectDayBudget();

//Накопления
function checkSavings(){
    if (appData.savings == true){
        var save = +prompt('Какова сумма накоплений', ''),
            percent = +prompt('Под какой процент', '');
            appData.monthIncome = +(save/100/12*percent).toFixed(2);
            alert('Доход в месяц  с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();


//Создать функцию для определения необязательных расходов (chooseOptExpenses):
//Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
//Записать ответы в объект optionalExpenses в формате Номер - Ответ.
// optionalExpenses: {1 : “ответ на вопрос”}
//Вызывать функции не обязательно.

function chooseOptExpenses(){
    for (let i = 0; i < 3; i++){
        let a = prompt('Введите НЕ обязательную статью расходов', '');
        if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50 && a != ''){
            appData.optionalExpenses[i] = a; 
        } else {
            continue;
        }
     }
}
chooseOptExpenses();


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







