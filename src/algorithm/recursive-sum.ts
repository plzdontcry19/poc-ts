export const recursiveSum = (nums: number[], length: number): number => {
    if (length < 1) return 0;
    return recursiveSum(nums, length - 1) + nums[length - 1];
};