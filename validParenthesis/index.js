/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (const c of s) {
    console.log({ c });
    if (map[c]) {
      stack.push(map[c]);
    } else if (stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;
};
