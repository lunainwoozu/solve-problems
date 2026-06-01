function solution(s){
	let lr = 0;
	const arr = s.split("");
	for(const w of arr) {
		w === "(" ? lr++ : lr--;
		if (lr < 0) return false;
	}
	return lr === 0 ? true : false;
}