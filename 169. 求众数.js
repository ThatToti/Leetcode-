/**
 * 
 * 
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2

 */

var majorityElement = function (nums) {

    let count = 0;
    let candidate = 0;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count = candidate === num ? ++count : --count;
    }
    return candidate;
};

/**
 * 摩尔投票法
 * 先选择一个作为候选人,相同+1,不同-1,为0换候选人.因为是众数,大于1半,所以,最后候选人肯定>0
 * [2,2,1,1,1,2,2],[6,5,5],[3,2,3]
 */

/** time:144 ms */
var agian = (nums) => {
    let count = 0
    let temp = undefined

    for (let i = 0; i < nums.length; i++) {

        if (count === 0) temp = nums[i]

        if (temp === nums[i]) {
            count++
        } else {
            count--
        }
    }

    return temp
}