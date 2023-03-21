export const binarySearch = (sortedNums: number[], searchNum: number): number => {
    let left = 0;
    let right = sortedNums.length;
    while (left + 1 !== right) {
        let mid = Math.floor((left + right) / 2);
        if (searchNum === sortedNums[mid]) return mid;

        if (searchNum < sortedNums[mid]) right = mid;
        if (searchNum > sortedNums[mid]) left = mid;
    }
    return -1;
};
 
const recursiveBinarySearch = (arr: number[], find: number): number => {
    return bSearch(arr, find, 0, arr.length);
}

const bSearch = (arr: number[], find: number, left: number, right: number): number => {
    if (left + 1 === right) return -1;

    let mid = Math.floor((left + right) / 2);
    if (find === arr[mid]) return mid;

    if (find < arr[mid]) {
        return bSearch(arr, find, left, mid);
    }
    if (find > arr[mid]) {
        return bSearch(arr, find, mid, right);
    }
}