function areaOfCircle(radius) {
    if (radius < 0) return 'Error: Radius cannot be negative';
    return Math.PI * radius * radius;
}


console.log(areaOfCircle(5));  
console.log(areaOfCircle(-1));
