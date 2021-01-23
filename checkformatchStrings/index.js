/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const word1Map = new Map();
  const word2Map = new Map();
  let word1Freq = [];
  let word2Freq = [];

  for (const char of word1) {
    word1Map.set(char, (word1Map.get(char) || 0) + 1);
  }
  for (const char of word2) {
    if (!word1Map.has(char)) {
      return false;
    }
    word2Map.set(char, (word2Map.get(char) || 0) + 1);
  }

  for (let [key, value] of word1Map) {
    if (!word1Map.has(key)) {
      return false;
    }
    word1Freq.push(value);
  }
  for (let [key, value] of word2Map) {
    word2Freq.push(value);
  }
  word1Freq.sort((a, b) => a - b);
  word2Freq.sort((a, b) => a - b);
  for (let i = 0; i < word1Freq.length; i++) {
    if (word1Freq[i] !== word2Freq[i]) return false;
  }
  return true;
};
