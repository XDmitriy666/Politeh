// Значение константы pi
const pi = 3.14;

// Считываем радиус круга
let radius = parseFloat(prompt("Введите радиус круга:"));

// Проверка на ввод числа
if (isNaN(radius)) {
    console.log("Пожалуйста, введите числовое значение для радиуса.");
} else {
    // Вычисляем диаметр, длину окружности и площадь
    let diameter = 2 * radius;
    let circumference = 2 * pi * radius;
    let area = pi * Math.pow(radius, 2);

    // Выводим результаты
    console.log("Диаметр круга: " + diameter);
    console.log("Длина окружности: " + circumference);
    console.log("Площадь круга: " + area);
}



