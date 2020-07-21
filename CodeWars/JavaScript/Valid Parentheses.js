//confirm that order of parentheses is correct in string
function validParentheses(parens) {
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") count++;
    if (parens[i] === ")") count--;
    if (count < 0) return false;
  }
  return count === 0;
}
