function fibs(n) {
    const fibArray = []
    for (let i = 0; i < n; ++i) {
        if (i === 0) {
            fibArray.push(0)
        }
        else if (i === 1) {
            fibArray.push(1)
        }
        else {
            const fibNMinus1 = fibArray[fibArray.length - 1]
            const fibNMinus2 = fibArray[fibArray.length - 2]
            fibArray.push(fibNMinus1 + fibNMinus2)
        }
    }
    return fibArray
}