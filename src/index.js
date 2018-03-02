module.exports = function getZerosCount(number, base) {
  // your implementation
    
    var base1 = base;
    let answer = Infinity;
    
    for (let i = 2; i <= base1; i++) {
        if (base1 % i == 0) {
            let stepen = 0;
            while (base1 % i == 0) {
                stepen++;
                base1 /= i;
            }
            
            let count = 0;
            let result = 0;
            let denom = i;
            do {
                count = Math.floor(number / denom);
                denom *= i;
                result += count;
            } while (count != 0);

            let test = Math.floor(result/ stepen);
            if (test < answer) {
              answer = test;
            }
        }
    }
    
    return answer; 
}