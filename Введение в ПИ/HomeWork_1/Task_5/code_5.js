const a = parseFloat(prompt("Введите длину меньшего основания a:"));
const b = parseFloat(prompt("Введите длину большего основания b:"));

const alphaRadians = parseFloat(prompt("Введите угол при большем основании в радианах:"));

if (isNaN(a) || isNaN(b) || isNaN(alphaRadians)) {
    console.log("Пожалуйста, введите числовые значения.");
} else {
    const h = a * Math.tan(alphaRadians);

    const area = 0.5 * (a + b) * h;

    console.log("Площадь трапеции: " + area);
}
