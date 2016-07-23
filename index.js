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
 * @param  {Array} array to make flatten
 * @return {Array} one-dimensional flatten array
 */
function flatten (inputArray) {

	// if the input is not an array
	// we wiil just return an array 
	// that contain this input as single item
	if (!Array.isArray(inputArray)) {
		return [inputArray];
	}

	// we will build this array on the go as our return value
	var outputArray = [];

	// run all over our input items
	for (var i = 0; i < inputArray.length; i++) {

		// current item to hndle with
		var item = inputArray[i];

		// logic to handle array
		if (Array.isArray(item)) {

			// get the item as a flatten array of sub items
			var subItems = flatten(item);

			// push all the subitems to the output array
			for (var j = 0; j < subItems.length; j++) {
				outputArray.push(subItems[j]);
			}
		} 
		// logic to handle "normal" item
		// just push it to the outputArray
		else {
			outputArray.push(item);
		}
	}

	// return the result flatten array
	return outputArray;
}

module.exports = flatten;