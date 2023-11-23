const edgeLength = parseFloat(prompt("Введите длину ребра куба:"));

if (isNaN(edgeLength) || edgeLength <= 0) {
    console.log("Пожалуйста, введите положительное числовое значение для длины ребра.");
} else {
    const faceArea = Math.pow(edgeLength, 2);
    const surfaceArea = 6 * faceArea;
    const volume = Math.pow(edgeLength, 3);

    console.log("Площадь грани: " + faceArea);
    console.log("Площадь полной поверхности: " + surfaceArea);
    console.log("Объем куба: " + volume);
}
