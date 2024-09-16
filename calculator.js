function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Error: Invalid operation';
    }
}

console.log(calculator(10, 5, 'add'));      // 15
console.log(calculator(10, 5, 'subtract')); // 5
console.log(calculator(10, 5, 'multiply')); // 50
console.log(calculator(10, 5, 'divide'));   // 2
console.log(calculator(10, 0, 'divide'));   // Error: Division by zero
