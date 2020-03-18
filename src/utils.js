export const find = (values, value) => {
  let i = 0,
    j = values.length - 1,
    index = -1;
  while (i <= j) {
    let middle = Math.ceil((i + j) / 2);
    let middleValue = values[middle];
    if (middleValue > value) {
      j = middle = middle - 1;
    } else if (middleValue < value) {
      i = middle = middle + 1;
    } else {
      return middle;
    }
  }

  return index;
};
