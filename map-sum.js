function sumValues(arr) {
    return arr.reduce(function (sum, x) { return sum + x })
}

console.log(sumValues([1, 2, 3, 4]))
