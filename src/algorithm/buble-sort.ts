
const bubleSort = (nums: number[]): number[] => {

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }

        }
    }

    return nums;
}
