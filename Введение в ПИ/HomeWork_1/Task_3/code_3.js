const pi = 3.14;

const r1 = 20;

const r2 = prompt("Введите внешний радиус (r > 20):");

if (isNaN(r2) || r2 <= r1) {
    console.log("Пожалуйста, введите числовое значение больше 20 для внешнего радиуса.");
} else {
    const areaOfRing = pi * Math.pow(r2, 2) - pi * Math.pow(r1, 2);

    console.log("Площадь кольца: " + areaOfRing);
}
