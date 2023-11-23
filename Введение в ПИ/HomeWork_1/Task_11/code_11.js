const sideLength = parseFloat(prompt("Введите длину стороны равностороннего треугольника:"));

if (isNaN(sideLength) || sideLength <= 0) {
    console.log("Пожалуйста, введите положительное числовое значение для длины стороны.");
} else {
    const triangleArea = (Math.sqrt(3) / 4) * Math.pow(sideLength, 2);
    const height = (Math.sqrt(3) / 2) * sideLength;
    const inRadius = sideLength / (2 * Math.tan(Math.PI / 3));
    const circumRadius = sideLength / (2 * Math.sin(Math.PI / 3));

    console.log("Площадь треугольника: " + triangleArea);
    console.log("Высота треугольника: " + height);
    console.log("Радиус вписанной окружности: " + inRadius);
    console.log("Радиус описанной окружности: " + circumRadius);
}
