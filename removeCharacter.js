function removeCharacter(str, char) {
    const charArr = []
    const strArr = []

    for(let i=0; i<char.length; i++) {
        charArr.push(char.charAt(i))
    }
    for(let i=0; i<str.length; i++) {
        strArr.push(str.charAt(i))
    }

    charArr.forEach(letter => {
        strArr.forEach((strLtr, index) => {
            if (letter === strLtr) {
                strArr.splice(index, 1)
            }
        })
    })

    const concatString = strArr.reduce((acc, curr) => {
        return acc + curr
    })

    return concatString
}


console.log(removeCharacter('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))