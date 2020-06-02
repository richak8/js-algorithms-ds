/*
*** Two arrays are said to be true if the second array is having 
    it's element equivalent to square of the elements of first array.
*** e.g1:- same([1,2,3,5],[1,4,9,11]); //false
*** same([1,2,3,5],[1,4,9,25]); // true
*/

function same(arr1, arr2) {
	if(arr1.length !== arr2.length) {
		return false;
	}
	const frequencyCounter1 = arr1.reduce((acc,cv) => {
		acc[cv] = ++acc[cv] || 1;
		return acc;
   },{});
   const frequencyCounter2 = arr2.reduce((acc,cv) => {
		acc[cv] = ++acc[cv] || 1;
		return acc;
  },{});
  for (let key in frequencyCounter1) {
	if(!(key**2 in frequencyCounter2)) {
		return false;
	} else if(frequencyCounter1[key] !== frequencyCounter2[key**2]) {
	    return false;	
	}
  }
  return true;		
}