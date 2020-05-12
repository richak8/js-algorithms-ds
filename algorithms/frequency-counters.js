/*
*** To get the frequency of the elements of the array.
*** e.g:- [1,4,6,4] => {1: 1, 4: 2, 6: 1}
*/

function frequency(arr) {
    return arr.reduce((acc, cv) => {
        acc[cv] = ++acc[cv] || 1;
        return acc;
    }, {});
}