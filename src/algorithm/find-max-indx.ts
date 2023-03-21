export const findMaxIndx = (nums: number[]): number => {
    let maxIndex = 0;
    for (let index = 1; index < nums.length; index++) {
        if (nums[index] > nums[maxIndex]) maxIndex = index;
    }
    return maxIndex
};