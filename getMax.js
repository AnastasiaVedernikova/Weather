function getMax(arr) {
    // returns max sum of subarray
    let max = 0;
    let currentMax = 0;

    for (let item of arr) {
        currentMax += item;
        max = Math.max(max, currentMax);
        if (currentMax < 0) currentMax = 0;
    }

    return max;
}

console.log(getMax([2, 3, -9]));// = 5
console.log(getMax([-1, 2, -1, 2, 3])); //= 6
console.log(getMax([2, 3, -9, 11]));// = 11
console.log(getMax([-1, 1, 2])); //= 3
console.log(getMax([100, -9, 2, -3, 5])); //= 100
console.log(getMax([1, 2, 3])); //= 6
