function isPrime(num) {
	Math.abs(num);
	
	let isPrimeNum = true;

	if (num < 2) {
		return false;
	}

	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			isPrimeNum = false;
		}
	}

	return isPrimeNum;
}