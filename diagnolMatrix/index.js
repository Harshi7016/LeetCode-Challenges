/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let res = {};
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[r].length; c++) {
      const curr = mat[r][c];
      const diag = r - c;
      if (!res[diag]) res[diag] = [];
      res[diag].push(curr);
    }
  }

  for (let k in res) {
    res[k].sort((a, b) => a - b);
  }

  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[r].length; c++) {
      const diag = r - c;
      const curr = res[diag].shift();
      mat[r][c] = curr;
    }
  }
  return mat;
};
