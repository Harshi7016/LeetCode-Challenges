/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let count = 0,
    left = 0,
    right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === k) {
      count++;
      left++;
      right--;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else {
      left++;
    }
  }
  return count;
};
console.log(maxOperations([1, 2, 3, 5, 6, 3, 3, 2], 6));
