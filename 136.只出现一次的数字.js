/**
 * 只出现一次的数字
 * 利用位运算去对比数字相同与不同
 * 例如,1^7^1^2^2^3^3
 * 因为满足交换律,所以顺序没有关系,可以前后相异或
 * @param {number array} nums 
 */
var singleNumber = function (nums) {

    var res = 0

    for (let i of nums) {
        res ^= i
    }

    return res
};