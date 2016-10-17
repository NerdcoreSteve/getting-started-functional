function someFunction() {
    return 'this is from some function'
}

function callFunction(f) {
    return f()
}

function returnFunction () {
    return function () {
        return 'this is from the returned function'
    }
}

const theSameFunction = someFunction
const someOtherFunction = returnFunction()

console.log(someFunction())
console.log(theSameFunction())
console.log(callFunction(someFunction))
console.log(someOtherFunction())
console.log(returnFunction()())
