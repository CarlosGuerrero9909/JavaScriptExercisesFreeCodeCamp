const convertToRoman = (num) => {
	let cantM;
	let cantC;
	let cantX;
	let cantI;

	cantM = Math.trunc(num/1000);
	num %= 1000;
	cantC = Math.trunc(num/100);
	num %= 100;
	cantX = Math.trunc(num/10);
	cantI = num % 10;	

	let strM = "M".repeat(cantM);
	let strC = "";
	let strX = "";
	let strI = "";

	if (cantI < 4){
		strI = "I".repeat(cantI);
	} else if (cantI == 4){
		strI = "IV";
	} else if (cantI >= 5 && cantI < 9){
		strI = "".concat("V", "I".repeat(cantI-5));
	} else{
		strI = "IX";
	}

	if (cantX < 4){
		strX = "X".repeat(cantX);
	} else if (cantX == 4){
		strX = "XL";
	} else if (cantX >= 5 && cantX < 9){
		strX = "".concat("L", "X".repeat(cantX-5));
	} else{
		strX = "XC";
	}

	if (cantC < 4){
		strC = "C".repeat(cantC);
	} else if (cantC == 4){
		strC = "CD";
	} else if (cantC >= 5 && cantC < 9){
		strC = "".concat("D", "C".repeat(cantC-5));
	} else{
		strC = "CM";
	}

	return strM + strC + strX + strI;
}

console.log(convertToRoman(649));
