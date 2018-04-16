export function getAverage(arr: number[]) {
    return arr.reduce((prev: number, next: number) => {
        return prev + next;
    }) / arr.length;
}