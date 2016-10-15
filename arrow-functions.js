const add  = (x, y) => x + y

const double_num = x => 2 * x

//by rights should be a one-liner
//but just to show you another way...
const triple_add = (x, y, z) => {
    return 3 * (x + y + z)
}

console.log(double_num(5))

console.log(add(1, 2))

console.log(triple_add(1, 2, 3))
