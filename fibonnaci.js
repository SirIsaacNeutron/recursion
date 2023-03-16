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

function fibsRec(n) {
    if (n === 1) {
        return [0]
    }
    if (n === 2) {
        return [0, 1]
    }
    const previousFibs = fibsRec(n - 1)
    // previousFibs[n - 2] is the equivalent of F(n - 1)
    // See https://en.wikipedia.org/wiki/Fibonacci_sequence
    return [...previousFibs, previousFibs[n - 2] + previousFibs[n - 3]]
}