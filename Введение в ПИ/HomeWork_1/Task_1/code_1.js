function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

function calculateArea(a, b) {
    return 0.5 * a * b;
}

var catetA = 4;
var catetB = 8;

var hypotenuse = calculateHypotenuse(catetA, catetB);
var area = calculateArea(catetA, catetB);

console.log("Гипотенуза: " + hypotenuse);
console.log("Площадь: " + area);
