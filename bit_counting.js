var countBits = function(n) {
  const binArr = n.toString(2).split("");
  let result = 0;
  
  binArr.forEach(num => {
    if (Number(num) === 1) result += 1;
  });
  
  return result;
};