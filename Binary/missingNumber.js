/* 268. Missing Number
* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
*/
const missingNumber = (nums) => {
    const nLength = nums.length;
    const gaussian = nLength * (nLength + 1) / 2;
    const numsSum = nums.reduce((acc, cur) => acc + cur);
    
    return gaussian - numsSum;
};