export const sumArrayIntegers = async (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number' || !Number.isInteger(arr[i])) {
      throw new Error('All elements in the array must be integers.');
    }
    sum += arr[i];
  }

  return sum;
}

/*
const integersArray = [1, 2, 3, 4];
console.log(await sumArrayIntegers(integersArray)); // Output: 10
*/