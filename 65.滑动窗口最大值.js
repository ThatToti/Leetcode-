/**
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口 k 内的数字。滑动窗口每次只向右移动一位。

返回滑动窗口最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
解释:

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
注意：

你可以假设 k 总是有效的，1 ≤ k ≤ 输入数组的大小，且输入数组不为空。

进阶：

你能在线性时间复杂度内解决此题吗？
 */

/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var maxSlidingWindow = function (nums, k) {

    /** 左右双指针,模拟窗口,win:窗口,result:结果 */
    let left = 0, right = 0, win = [], result = []

    /** 右指针要小于数组大小 */
    while (right < nums.length) {

        /** 队列为空,直接加 */
        if (win.length === 0) {

            win.push(right)

        } else {

            /** 先判断,如果窗口满的,每进一次,shift 一个队头出去 */
            if (win[0] < left) win.shift()

            /** 新元素大于队尾,先删除 */
            while ((nums[right] > nums[win[win.length - 1]]) && win.length > 0) {

                win.pop()

            }

            /** 再添加 */
            win.push(right)

            /** 如果超过 k,把队头 shift 出来 */
            if (win.length > k) win.shift()
        }

        /** 在窗口为k 的情况下,才记录队头的数字 */
        if (right === k + left - 1) result.push(nums[win[0]])

        /** 小于 k,只加 right;等于 k,左右同步加 */
        right < k + left - 1 ? right++ : (right++ , left++)
    }

    return result

};

/**
 * 窗口经过了 left,要 shift
 * 窗口满3,先 shift 再加
 * win.length===3
 * 判断当前队头是否超过窗口线,需要记录下标
 * now<left shift
 *
 */