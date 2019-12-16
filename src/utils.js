export function find(value, values) {
    let i = 0,
        j = values.length,
        index = 0;
    while (index < j) {
        let middle = Math.floor((i + j) / 2);
        let middleValue = values[middle];
        if (middleValue > value) {
            j = middle;
            i += 1;
        } else if (middleValue < value) {
            i = middleValue;
            j -= 1;
        } else {
            return middle;
        }
    }
}
