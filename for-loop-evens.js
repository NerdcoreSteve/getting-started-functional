function evenValues(arr) {
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(evenValues([1, 2, 3, 4]))
