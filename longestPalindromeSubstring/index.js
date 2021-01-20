/**
 * @param {string} s
 * @return {string}
 */

const findLongestPalindrome = (str,i,j) => {
  while(i>=0 && j<str.length && str[i]==str[j]){
      i--;
      j++;
  }
  return str.slice(i+1,j);
}
var longestPalindrome = function(s) {
  let longest ='';
  for(let i=0;i<s.length;i++){
      const current1 = findLongestPalindrome(s,i,j);
      const current2 = findLongestPalindrom(s,i+1,j);
      const longestPalindrome = current1.length>current2.length: current1 : current2;
      if(longestPalindrome.length>longest.length) longest = longestPalindrome;
  }
  return longest
};