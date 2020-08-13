function stringUrl(str) {
    const arr = str.split('')
    const newArr = arr.map(item => {
        if (item === ' ') {
            return item = '%20'
        }
        return item
    })
    console.log(newArr.join(''));
    return newArr.join('');
}

stringUrl('tauhida parveen')
stringUrl('www.thinkful.com /tauh ida parv een')
// tauhida%20parveen
// www.thinkful.com%20/tauh%20ida%20parv%20een