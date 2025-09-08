/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // 1. Create a new, empty array to store the results
    const returnedArray = [];

    // 2. Loop through each element of the input array
    for (let i = 0; i < arr.length; i++) {
        // 3. Apply the transformation function `fn` to the current element and its index
        const transformedElement = fn(arr[i], i);

        // 4. Add the transformed element to the new array
        returnedArray.push(transformedElement);
    }

    // 5. Return the newly created array
    return returnedArray;
};