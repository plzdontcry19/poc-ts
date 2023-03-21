export const sequentialSearch = (nums: number[], search: number): number => {
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === search) return index;
    }
    return -1;
}

export const recursiveSequentialSearch = (arr: number[], find: number): number => {
    return search(arr, find, arr.length - 1)
}

const search = (arr: number[], find: number, index: number) => {
    if (index < 0) return -1;
    if (arr[index] === find) return index;

    return search(arr, find, index - 1);
}