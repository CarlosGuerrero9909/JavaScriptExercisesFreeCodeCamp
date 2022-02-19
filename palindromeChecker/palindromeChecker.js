function palindrome(str) {
	// filter for the str, first all in lower then replace signes of puntuation in the same instruction
	let strFilter = str.toLowerCase().replace(/[.,\/#!$% \^&\*;:{}=\-_`~()]/g,"");
	let strReverse = '';
	
	for(let i = strFilter.length-1; i >= 0; i--){
		strReverse += strFilter[i];
	}

	if (strFilter == strReverse) {
		return true;
	} else {
		return false;
	}
} 

console.log(palindrome("My age is 0, 0 si ega ym."));
