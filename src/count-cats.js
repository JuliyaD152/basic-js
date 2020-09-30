const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0; 
  for(let i = 0; i<matrix.length; i++){
      console.log(matrix[i]);
      for (let elem of matrix[i]){
          if(elem === '^^'){
              counter++;
          }
      }
  }
  return counter;
};
