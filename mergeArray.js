function mergeArray(arr1, arr2) {
    const newArr = Array.from(arr1);
    arr2.forEach(item => {
        let i = 0;
        while(i < newArr.length) {
            if(item <= newArr[i]) {
                newArr.splice(i, 0, item)
                break
            }
            i++
        }
    })
    return newArr
}

console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))