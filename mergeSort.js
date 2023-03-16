function mergeSort(array) {
    if (array.length < 2) { return array }

    const halfLength = Math.floor(array.length / 2)
    const leftHalf = mergeSort(array.slice(0, halfLength))
    const rightHalf = mergeSort(array.slice(halfLength))

    return merge(leftHalf, rightHalf)
}

function merge(leftHalf, rightHalf) {
    let leftIndex = 0
    let rightIndex = 0
    let newArray = []
    while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
        if (leftHalf[leftIndex] >= rightHalf[rightIndex]) {
            newArray.push(rightHalf[rightIndex])
            ++rightIndex
        }
        else {
            newArray.push(leftHalf[leftIndex])
            ++leftIndex
        }
    }

    // If leftIndex < leftHalf.length, then all of rightHalf has been iterated through
    // and thus ALL of rightHalf is already in newArray. That's the way the while loop works.
    //
    // And if ALL of rightHalf is already in newArray, then that means that the REMAINING 
    // numbers in leftHalf are greater than ALL those inserted into newArray thus far.
    //
    // This is true even if leftIndex = 0 at this point.
    //
    // But leftHalf was already sorted by mergeSort()'s recursive call!
    //
    // So we can just append all of leftHalf.slice(leftIndex)'s elements to newArray
    if (leftIndex < leftHalf.length) {
        newArray = [...newArray, ...leftHalf.slice(leftIndex)]
    }
    else if (rightIndex < rightHalf.length) {
        newArray = [...newArray, ...rightHalf.slice(rightIndex)]
    }
    return newArray
}