const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) return false;
      let arr = [];
  
  members.forEach(element => {
      if(typeof element != 'string') return;
      element = element.trim();
      if(element != ''){
          arr.push(element[0].toUpperCase());
      } 
      if(arr.length === 0)return false;    
  });
  return arr.sort().join('');
  };

