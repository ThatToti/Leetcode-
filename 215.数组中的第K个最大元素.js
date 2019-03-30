/**
 * 

 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。} nums 

 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    const i = nums.length - k
    // console.log(i)

    nums = quickSort(nums)

    return nums[i]

};

var quickSort = function (arr, left = 0, right = arr.length - 1) {

    if (left < right) {

        let pivot = Math.floor((left + right) / 2)

        let newPivot = partition(arr, pivot, left, right)

        quickSort(arr, left, newPivot - 1)
        quickSort(arr, newPivot + 1, right)

    }

    return arr
}

var partition = function (arr, pivot, left, right) {

    let value = arr[pivot]
    let newPivot = left

    swap(arr, right, pivot)

    for (let i = left; i < right; i++) {

        if (arr[i] < value) {

            swap(arr, i, newPivot)
            newPivot++
        }

    }

    swap(arr, right, newPivot)

    return newPivot

}

var swap = function (arr, left, right) {

    let temp = arr[left]

    arr[left] = arr[right]

    arr[right] = temp
}