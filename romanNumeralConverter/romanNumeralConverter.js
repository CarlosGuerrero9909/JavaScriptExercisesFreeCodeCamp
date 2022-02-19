const convertToRoman = (num) => {
	let numRoman = "";
	let cantM;
	let cantC;

	if (Math.trunc(num/1000) != 0) {
		cantM = Math.trunc(num/1000);
		cantD = num%1000;

	} else if (Math.trunc(num/100) != 0) {
		cantC = Math.trunc(num/1000);
		cant = num%1000;
	} 

	return num;
}

convertToRoman(36);

console.log(1984%1000);
