function fibonacci(limit) {
    const fib = [0, 1];
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > limit) break;
        fib.push(next);
    }
    return fib;
}

console.log(fibonacci(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
