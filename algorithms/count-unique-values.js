/*
*** Return the length of unique values from the sorted array.
*** e.g:- [1,4,6,4] => 3
*/

function countUniqueValues(arr){
    let left = 0;
    let right = 1;
    if (arr.length === 0) return 0;
    while(right < arr.length) {
        if(arr[left] === arr[right]) {
            right++;
        } else if(arr[left] < arr[right]) {
            left++;
            arr[left] = arr[right];
            right++;
        }
    }
    return left+1;
  }