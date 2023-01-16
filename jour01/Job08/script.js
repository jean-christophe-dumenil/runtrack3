function sommenombrespremiers(x, y) {
    if (isPrime(x) && isPrime(y)) {
      return x + y;
    } else {
      return false;
    }
  }
  //  La fonction isPrime est une fonction d'assistance qui vérifie si un nombre est premier ou non.
  function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num !== 1;
  }
console.log(sommenombrespremiers(2, 25))
console.log(sommenombrespremiers(2, 2))
console.log(sommenombrespremiers(12, 125))
