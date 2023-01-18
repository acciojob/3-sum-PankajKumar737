function threeSum(arr, target) {
  //your code here.
	let ans = infinity;
	for(let i= 0; i < arr.length; i++){
		for(let j = i+1; j < arr.length; j++){
			for(let k = j+1; k < arr.length; k++){
				let t = arr[i]+arr[j]+arr[k];
				if(Math.abs(target-ans) > Math.abs(target-t)){
					ans = t;
				}
			}
		}
	}
	return ans;
}

module.exports = threeSum;
