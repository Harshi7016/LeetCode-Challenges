/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  const len = nums.length;
  const res = [];
  for(let i=0;i<len;i++){
      while(res.length && nums[i]<res[res.length-1]){
          if(k-res.length <len-i){
              console.log(res);
              res.pop();
          } else break;
          console.log({res})
      }
      if(res.length<k){
          res.push(nums[i]);
          console.log(res);
      }
  }
  return res
};