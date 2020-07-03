Problem introduction:
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


Description of my initial thoughts:
Keep track of m-1 indices, brute force move them through the array
Don’t need to recalculate, just add/ subtract each number to the subarray it’s being added/ removed to/ from
This is wrong though

Actual solution:
Only need to find an integer, therefore solution space is actually pretty small
Find the min/ max of the solution space, binary search on itå
To check whether a potential maxSum solution is valid, add numbers to a temp array
Once the sum of that temp array exceeds the potential solution, start a new temp array
When you’ve reached the end of the numbers list, if the number of temp arrays used is <= m, then it’s valid
valid solution means look left in the binary search, invalid means look right

