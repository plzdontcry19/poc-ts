export const squareRoot = (num: number) => {
    let cal = 1;
    let prevCal;
    while (Math.pow(cal, 2) !== num) {
        cal = (cal + num / cal) / 2;
        if (prevCal === cal) return cal;
        prevCal = cal;
    }
    return cal;
}


export const recursiveSquareRoot = (num: number): number => {
    return rsSquareRoot(num, 1);
}

const rsSquareRoot = (num: number, cal: number, prevCal?: number): number => {
    if (Math.pow(cal, 2) === num || prevCal === cal) return cal
    return rsSquareRoot(num, (cal + num / cal) / 2, cal)
}
