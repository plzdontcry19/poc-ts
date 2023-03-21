export const gcd = (x: number, y: number) => {
    while (y > 0) {
        let modResult = x % y;
        x = y;
        y = modResult;
    }
    return x;
}

export const recursiveGcd = (a: number, b: number): number => {
    return rsGcd(a, b);
}
const rsGcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return rsGcd(b, a % b)
}
