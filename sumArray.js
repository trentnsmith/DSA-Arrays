function sumArray(arr) {
    const sums = []
    arr.reduce((acc, curr) => {
        sums.push(acc + curr)
        return acc + curr
    })
    sums.sort((a, b) => a < b)    
    return sums[0]
}

console.log(sumArray([4, 6, -3, 5, -2, 1]))