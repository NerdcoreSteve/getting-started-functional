function sumValues(arr) {
    var sum = 0
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log(sumValues([1, 2, 3, 4]))
