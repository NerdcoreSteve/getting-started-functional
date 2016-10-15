function doubleValues(arr) {
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

console.log(doubleValues([1, 2, 3, 4]))
