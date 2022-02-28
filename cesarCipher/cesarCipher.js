const rot13 = (str) => {
	let key = 13;
	let abecedary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let deco = "";

	for (let i = 0; i <= str.length-1; i++){
		if (abecedary.includes(str[i])) {
			for (let j = 0; j <= abecedary.length - 1; j++) {
				if (str[i] == abecedary[j]) {
					if (j <= 12) {
						deco += abecedary[j + key];
					} else {
						deco += abecedary[j - key];
					}
				}
			}
		} else {
			deco += str[i];
		}
	}
	return deco;
}

rot13("SERR CVMMN!");
