// 'number' + 3 + 3
// Оператор `+` між рядком і числом виконує конкатенацію.
// 'number' + 3 → "number3"
// "number3" + 3 → "number33"
console.log('number' + 3 + 3); // "number33"

// null + 3
// null приводиться до 0, тому: 0 + 3 = 3
console.log(null + 3); // 3

// 5 && "qwerty"
// Оператор `&&` повертає перше хибне значення або останнє істинне.
// 5 - істинне значення, "qwerty" - теж істинне, тому повертається "qwerty".
console.log(5 && "qwerty"); // "qwerty"

// +'40' + +'2' + "hillel"
// Унарний `+` перетворює рядки в числа:
// +'40' → 40, +'2' → 2
// 40 + 2 = 42
// "42" + "hillel" → "42hillel" (конкатенація рядка)
console.log(+'40' + +'2' + "hillel"); // "42hillel"

// '10' - 5 === 6
// '10' перетворюється на число 10, тому 10 - 5 = 5
// 5 === 6 → false
console.log('10' - 5 === 6); // false

// true + false
// true → 1, false → 0
// 1 + 0 = 1
console.log(true + false); // 1

// '4px' - 3
// "4px" не може бути конвертоване в число, тому результат NaN
console.log('4px' - 3); // NaN

// '4' - 3
// '4' приводиться до числа 4, тому 4 - 3 = 1
console.log('4' - 3); // 1

// '6' + 3 ** 0
// 3 ** 0 = 1 (будь-яке число в нульовому степені дорівнює 1)
// '6' + 1 → "61" (конкатенація рядка)
console.log('6' + 3 ** 0); // "61"

// 12 / '6'
// '6' приводиться до числа 6
// 12 / 6 = 2
console.log(12 / '6'); // 2

// '10' + (5 === 6)
// 5 === 6 → false
// '10' + false → "10false" (конкатенація рядка)
console.log('10' + (5 === 6)); // "10false"

// null == ''
// null дорівнює тільки undefined, тому результат false
console.log(null == ''); // false

// 3 ** (9 / 3)
// 9 / 3 = 3, тому 3 ** 3 = 27
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true'
// Обидва значення - непорожні рядки, які приводяться до true
// !!'false' → true, !!'true' → true
// true == true → true
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1
// '0' && 1 → 1 (бо '0' - істинне значення)
// 0 || 1 → 1 (бо оператор `||` повертає перше істинне значення)
console.log(0 || '0' && 1); // 1

// (+null == false) < 1
// +null → 0, 0 == false → true (бо false приводиться до 0)
// true < 1 → true (true = 1, а 1 < 1 → false)
console.log((+null == false) < 1); // true

// false && true || true
// `&&` має вищий пріоритет, ніж `||`, тому:
// false && true → false
// false || true → true
console.log(false && true || true); // true

// false && (false || true)
// false || true → true
// false && true → false
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5
// +null → 0, 0 == false → true
// 1 ** 5 = 1
// true < 1 → true (бо true приводиться до 1)
console.log((+null == false) < 1 ** 5); // true

