import { binarySearch } from "./binary-search";

export const sumToXWithBinarySearch = (nums: number[], sumResult: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        const diff = sumResult - nums[i]
        if (diff < 0) continue
        const indx = binarySearch(nums, diff);
        if (indx > 0) return [i, indx];
    }
    return [-1, -1];
};