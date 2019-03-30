


function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {

        /** there can not be the Bit operation,cuz it will be the mid of length not the mid of left and right */
        // const pivot = (arr.length - 1) >> 1
        const pivot = Math.floor((right + left) / 2);


        const newPivot = partition(arr, pivot, left, right)

        quickSort(arr, left, newPivot - 1)
        quickSort(arr, newPivot + 1, right)
    }

    return arr
}

function partition(arr, pivot, left, right) {

    const value = arr[pivot]
    let newPivot = left

    swap(arr, pivot, right)

    for (let i = left; i < right; i++) {

        if (arr[i] < value) {

            swap(arr, i, newPivot)
            newPivot += 1
        }
    }

    swap(arr, newPivot, right)

    return newPivot
}

function swap(arr, left, right) {

    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}