/**
 * 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 利用位运算去对比数字相同与不同
 * 例如,1^7^1^2^2^3^3
 * 因为满足交换律,所以顺序没有关系,可以前后相异或
 * 变式:去重,只要出现多次,双数都可以变零
 * @param {number array} nums 
 */
var singleNumber = function (nums) {

    var res = 0

    for (let i of nums) {
        res ^= i
    }

    return res
};