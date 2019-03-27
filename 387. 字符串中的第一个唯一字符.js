/**
 * 
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

案例:

s = "leetcode"
返回 0.

s = "loveleetcode",
返回 2.
 

注意事项：您可以假定该字符串只包含小写字母。} s 
 */
/** time:230ms */
var firstUniqChar = function (s) {

    let obj = {}

    for (let i = 0; i < s.length; i++) {

        const char = s.charAt(i)

        if (!obj[char]) obj[char] = 0

        obj[char]++
    }

    for (let [key, value] of Object.entries(obj)) {
        if (value === 1) return s.indexOf(key)
    }

    return -1
};

/** time:70ms */
var firstUniqChar = function (s) {

    let alpha = 'abcdefghijklmnopqrstuvwxyz'

    let first = alpha.length

    for (let i = 0; i < 26; i++) {

        let index = s.indexOf(alpha[i])

        if (index !== -1 && index === s.lastIndexOf(alpha[i])) {
            if (index < first) first = index
        }
    }

    return first === s.length ? -1 : first
};