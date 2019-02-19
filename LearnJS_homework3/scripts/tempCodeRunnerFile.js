function detectDayBudget(){
appData.moneyPerDay = +(appData.allMoney / 30).toFixed(2);//округлит до 2 десятичноых знаков, НО вернет СТРОКУ
alert('Бюджет на один день: ' + appData.moneyPerDay);
console.log(appData);
}