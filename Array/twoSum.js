/* 1. Two Sum

* Given an array of integers nums and an integer target, 
* return indices of the two numbers such that they add up to target.
* You may assume that each input would have exactly one solution, 
* and you may not use the same element twice.
* You can return the answer in any order.
*/
const twoSum = function(nums, target) {
    const numLength = nums.length;
    for (let i = 0; i < numLength; ++i) {
        const searchData = nums.lastIndexOf(target - nums[i]);
        if(searchData >= 0 && searchData != i){
            return [i, searchData];
        }
    }
};