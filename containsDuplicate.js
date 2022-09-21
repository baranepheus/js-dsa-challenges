
const arr = [2,14,18,22,22]

var containsDuplicate = function (nums) {
    // console.log(nums.length)

	const set = new Set([...nums]);
    // A value in the Set may only occur once; it is unique in the Set's collection. 
	return set.size != nums.length;
};


console.log(containsDuplicate(arr));

//https://relatablecode.com/javascript-leetcode-contains-duplicate