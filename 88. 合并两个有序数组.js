/**
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
 */

var merge = function (nums1, m, nums2, n) {
    var i = m - 1, j = n - 1, k = m + n - 1

    while (j >= 0) {
        if ((i >= 0) && (nums1[i] > nums2[j])) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }

    console.log(nums1)
};

/**
 * 就是归并排序,从后往前比较,元素不用都位移
 * 如果从前往后比较,后面的元素要各种位移
 */