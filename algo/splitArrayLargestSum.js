// Given an array which consists of non-negative integers and an integer 
//m, you can split the array into m non-empty continuous subarrays. Write 
//an algorithm to minimize the largest sum among these m subarrays.

// Note:
// If n is the length of array, assume the following constraints are satisfied:

// 1 ≤ n ≤ 1000
// 1 ≤ m ≤ min(50, n)

// Input:
// nums = [7,2,5,10,8];
// [7,2] [5] [10]
// m = 2

// Output:
// 18

// Explanation:
// There are four ways to split nums into two subarrays.
// The best way is to split it into [7,2,5] and [10,8],
// where the largest sum among the two subarrays is only 18.

const testNums = [7,2,5,10,8];
console.log(splitArray(testNums, 2));

function splitArray(nums, m) {
  let left = Math.max(...nums); //10
  let right = nums.reduce((a,b) => a+b); //35
  let mid;

  while (left < right) {
    mid = Math.floor((left + right)/2);
    //potentially too small, look at the left side of binary split
    if (isValid(nums, m, mid)) { 
      right = mid;
    } else { //wasn't valid, look to the right
      left = mid + 1;
    }
  }
  return left;
}

function isValid(nums, targetNumSplits, target) {
  let runningSum = 0;
  let numSplits = 1;
  for (const num of nums) {
    if (runningSum + num > target) {
      runningSum = 0;
      numSplits++;
    }
    runningSum += num;
  }
  return numSplits <= targetNumSplits;
}