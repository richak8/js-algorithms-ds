/*
*** Two Strings are considered can be of any length and consist of only small characters
    - called validAnagram only when both strings consist of same characters and with same frequency 
*** e.g1:- validAnagram('anagram', 'naagrma') //true
*** e.g2:- validAnagram('amdx', 'mazd') //false
*/

// solution 1: 
function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    const frequencyCounter1 = str1.split('').reduce((acc,cv) => {
        acc[cv] = ++acc[cv] || 1;
        return acc;
    },{});
    const frequencyCounter2 = str2.split('').reduce((acc,cv) => {
        acc[cv] = ++acc[cv] || 1;
        return acc;
    },{});
    for(let key in frequencyCounter1) {
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true; 
  }

  // solution 2:
  function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    const frequencyCounter1 = str1.split('').reduce((acc,cv) => {
        acc[cv] = ++acc[cv] || 1;
        return acc;
    },{});
    for(let i = 0; i < str2.length; i++) {
		if(!frequencyCounter1[str2[i]]){
			return false;
		} else {
			frequencyCounter1[str2[i]]--;
		}
	}
	return true;
  }

