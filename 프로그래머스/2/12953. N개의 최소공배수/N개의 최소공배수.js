function primeFactorization(n) {
    let factors = {};
    let divisor = 2;
    
    while (n > 1) {
        while (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n /= divisor;
        }
        divisor++;
    }
    
    return factors;
}

const solution = (arr) => {
    let lcmFactors = {};

    for (let num of arr) {
        let factors = primeFactorization(num);

        for (let factor in factors) {
            lcmFactors[factor] = Math.max(lcmFactors[factor] || 0, factors[factor]);
        }
    }

    // 최소공배수 계산
    let lcm = 1;
    for (let factor in lcmFactors) {
        lcm *= Math.pow(parseInt(factor), lcmFactors[factor]);
    }

    return lcm;
};
