var userInput = prompt("Введите сумму")

var amount = parseFloat(userInput);

if (!isNaN(amount)){
var som = Math.floor(amount);
var tyin = Math.round((amount - som) * 100);

    alert("Вы ввели: " + som + "сома и" + tyin + "тыйынов.");
}else {
    alert("ERROR:ВВЕДИ НОРМАЛЬНОЕ ЧИСЛО ПИДОРАС")
}