var userInput = prompt("Введите число от 1 до 7 :");

var dayNumber = parseInt(userInput);

if (dayNumber >= 1 && dayNumber <= 7) {
var dayOfWeek;
switch (dayNumber) {
case 1:
    dayOfWeek = "Понедельник";
    break;
case 2:
    dayOfWeek = "Вторник";
    break;
case 3:
    dayOfWeek = "Среда";
    break;
case 4:
    dayOfWeek = "Четверг";
    break;
case 5:
    dayOfWeek = "Пятница";
    break;
case 6:
    dayOfWeek = "Суббота";
    break;
case 7:
    dayOfWeek = "Восскресение";
    break;
    }
    alert("День недели: " + dayOfWeek );
} else {
    alert("Ошибка: Введите число от 1 до 7.");
}