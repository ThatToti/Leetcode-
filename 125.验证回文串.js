/**
 * 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 */

var isPalindrome = function (s) {

    var head = 0
    var rear = s.length - 1

    const test = (e) => {
        return (e >= '0' && e <= '9') || (e >= 'a' && e <= 'z') || (e >= 'A' && e <= 'Z')
    }

    var flag = false

    while (head <= rear) {

        if (!test(s.charAt(head))) head++

        if (!test(s.charAt(rear))) rear--

        if (test(s.charAt(head)) && test(s.charAt(rear))) {
            if (s.charAt(head++).toLowerCase() !== s.charAt(rear--).toLowerCase()) return false
        }

    }

    return true
};

/**
 * 重点就是 a-z,A-Z,0-9
 * 然后双指针头尾循环一遍就可以了
 * 注意不分大小写去对比
 */