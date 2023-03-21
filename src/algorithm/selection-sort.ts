export const selectionSort = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0 + 1 + i; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                const temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};