function evenValues(arr) {
    return arr.filter(function (x) { return x % 2 === 0 })
}

console.log(evenValues([1, 2, 3, 4]))
