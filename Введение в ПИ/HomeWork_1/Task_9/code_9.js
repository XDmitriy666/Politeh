const number = parseInt(prompt("Введите четырехзначное целое число:"));

if (isNaN(number) || number < 1000 || number > 9999) {
    console.log("Пожалуйста, введите четырехзначное целое число.");
} else {
    const thousands = Math.floor(number / 1000);
    const hundreds = Math.floor((number % 1000) / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;

    if (thousands > 0) console.log(thousands + " – thousands;");
    if (hundreds > 0) console.log(hundreds + " – hundreds;");
    if (tens > 0) console.log(tens + " – tens;");
    if (ones > 0) console.log(ones + " – ones;");
}
