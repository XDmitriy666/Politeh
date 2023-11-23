const a = parseFloat(prompt("Введите длину стороны a:"));
const b = parseFloat(prompt("Введите длину стороны b:"));
const c = parseFloat(prompt("Введите длину стороны c:"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log("Введены некорректные значения длин сторон.");
} else {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Площадь треугольника: " + area);
}
