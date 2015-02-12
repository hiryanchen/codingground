

/**
 * Merge two sorted lists of numbers into one sorted list (ascending).
 * left & right are non-null non-sparse arrays of numbers.
 */

function concatRemaining(result, resultIndex, remain, remainIndex) {
   while(remainIndex < remain.length) {
      result[resultIndex++] = remain[remainIndex++];
   }
}

function merge(left, right) {
    var result = new Array(left.length + right.length);
    var leftIndex = 0;
    var rightIndex = 0;
    var resultIndex = 0;
    while ((leftIndex < left.length) && (rightIndex < right.length)) {
       if (left[leftIndex] <= right[rightIndex]) { 
           result[resultIndex] = left[leftIndex];
           leftIndex++;
       } else {
           result[resultIndex] = right[rightIndex];
           rightIndex++;
       }
       resultIndex++;
    }
    concatRemaining(result, resultIndex, left, leftIndex);
    concatRemaining(result, resultIndex, right, rightIndex);
    return result;
}

/* Merge sort the input between left and right (including left, excluding right), which is a non-null non-sparse array of numbers.*/
function mergeSort(input, opt_left, opt_right) {
    // Cover basic input
    if (opt_left === undefined) {
       opt_left = 0;
       opt_right = input.length-1;
    }
    // Base Case
    if (opt_left >= opt_right) {
        return [input[opt_left]];
    }
    // Find middle point
    var middle = Math.floor((opt_left + opt_right) / 2);
    var leftResult = mergeSort(input, opt_left, middle);
    var rightResult = mergeSort(input, middle+1, opt_right);
    return merge(leftResult, rightResult);
}



