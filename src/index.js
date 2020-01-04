/**
 * flatten
 * https://github.com/sharvit/flatten-js
 *
 * Copyright (c) 2016 Avi Sharvit
 * Licensed under the MIT license.
 */

/**
 * Returns a new array that is a one-dimensional flattening of the input array (recursively).
 * That is, for every element that is an array, extract its elements into the new array.
 *
 * @param  {Array} inputArray array to make flatten
 * @return {Array} one-dimensional flatten array
 */
const flatten = inputArray => {
  if (!Array.isArray(inputArray)) {
    return [inputArray];
  }

  const outputArray = [];

  for (const item of inputArray) {
    if (Array.isArray(item)) {
      outputArray.push(...flatten(item));
    } else {
      outputArray.push(item);
    }
  }

  return outputArray;
};

export default flatten;
