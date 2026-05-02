//your JS code here. If required.
function secondHighest(arr){
	const n = arr.length;
	if(n <= 1){
		return -Infinity;
	}

	let highest = -Infinity;
	let shighest = -Infinity;
	for(let num of arr){
		if(num > highest){
			shighest = highest;
			highest = num;
		}else if(num < highest && num > shighest ){
			shighest = num;
			
		}
	}
	return shighest;
}