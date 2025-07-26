function merge(left, right) {
  const newArray = [];
  let iL = 0;
  let iR = 0;

  while (iL < left.length && iR < right.length) {
    if (left[iL] <= right[iR]) {
      newArray.push(left[iL]);
      iL++;
    } else {
      newArray.push(right[iR]);
      iR++;
    }
  }

  newArray.push(...left.slice(iL));
  newArray.push(...right.slice(iR));

  return newArray;
}

function mergeSort(array) {
  const len = array.length;
  if (len <= 1) return array;

  const mid = Math.floor(len / 2);
  return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)));
}
