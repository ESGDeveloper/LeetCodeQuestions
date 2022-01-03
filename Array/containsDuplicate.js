/* 217. Contains Duplicate
*
* Given an integer array nums, 
* return true if any value appears at least twice in the array, 
* and return false if every element is distinct.
*/
const containsDuplicate = function(nums) {
    const numLength = nums.length;
    for (let i = 0; i < numLength; ++i) {
        const searchData = nums.lastIndexOf(nums[i]);
        if(searchData >= 0 && searchData != i){
            return true;
        }
    }
    return false;
};