function filterArray(arr) {
    const newArr = [];
    const value = 5;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] >= value) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterArray([3, 7, 8, 4, 1]))