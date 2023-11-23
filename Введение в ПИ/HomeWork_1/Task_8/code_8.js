const x1 = parseFloat(prompt("Введите X1:"));
const y1 = parseFloat(prompt("Введите Y1:"));
const x2 = parseFloat(prompt("Введите X2:"));
const y2 = parseFloat(prompt("Введите Y2:"));

if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    console.log("Пожалуйста, введите числовые значения для координат.");
} else {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    console.log("Расстояние между точками: " + distance);
}
