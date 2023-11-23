const num1 = parseInt(prompt("Введите первое целое число:"));
const num2 = parseInt(prompt("Введите второе целое число:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Пожалуйста, введите целые числа.");
} else {
    const averageArithmetic = (num1 + num2) / 2;
    const averageGeometric = Math.sqrt(Math.abs(num1) * Math.abs(num2));
    console.log("Среднее арифметическое: " + averageArithmetic);
    console.log("Среднее геометрическое модулей: " + averageGeometric);
}
