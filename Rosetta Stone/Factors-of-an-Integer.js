//returns array with factors of positive integer
function factors(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
}
