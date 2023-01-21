function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }
    return numbers;
}

console.log(tri([1, 87, 74, 2], 'desc'))
console.log(tri([100, 7, 7465, 802, 1], 'asc'))