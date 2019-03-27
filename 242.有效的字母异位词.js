/**
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false

    let x = new Array(26), y = new Array(26)

    for (let i = 0; i < 26; i++) {
        x[i] = 0
        y[i] = 0
    }

    for (let i = 0; i < s.length; i++) {

        x[s.charCodeAt(i) - 'a'.charCodeAt()]++
        y[t.charCodeAt(i) - 'a'.charCodeAt()]++
    }

    for (let i = 0; i < 26; i++) {

        if (x[i] !== y[i]) return false
    }

    return true
};

/**
 *
 * 无论 ascii 还是 unicode,a-z 的范围差都是26,所以只需要建立一个26长度的数组
 * s 有字符的就放里面,然后 s 和 t 对比就可以了...
 * 真的有点妙
 */