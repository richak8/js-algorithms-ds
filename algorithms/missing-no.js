// find two missing nos in an array of array of integers from 1 to N.

function findMissingNo(arr) {
	const result = [], arrObj = {};
	let len = arr.length+2;

	arr.reduce((acc, cv) => {
		acc[cv] = cv;
		return acc;
	}, arrObj);

	for(let i=1 ; i <= len; i++) {
		if(!(i in arrObj)) {
			result.push(i);
		}	
	}
	return result;
}

//findMissingNo([1, 2, 4]); -> o/p - [3, 5]
// findMissingNo([1, 3, 5, 6]); -> o/p - [2, 4]
// findMissingNo([1, 2]); -> o/p - [3, 4]
