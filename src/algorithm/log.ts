
export const logarithm = (a: number): number => {
    let count = 0;
    while (a > 1) {
        a = Math.floor(a / 2)
        count++;
    }

    return count
}

export const recursiveLog = (a: number): number => {
    return rsLog(a, 0)
}

const rsLog = (a: number, count: number): number => {
    if (a <= 1) return count
    return rsLog(Math.floor(a / 2), count + 1);
}
