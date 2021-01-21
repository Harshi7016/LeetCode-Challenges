/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  if (salary.length < 2) return salary;
  let salarySum = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    salarySum += salary[i];
    console.log(salarySum);
  }
  console.log(salarySum, salary.length - 2);
  return salarySum / (salary.length - 2);
};
