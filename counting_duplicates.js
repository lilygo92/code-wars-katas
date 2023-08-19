function duplicateCount(text){
  let result = 0;
  const arr = text.toLowerCase().split("");
  let obj = {};
  
  arr.forEach(str => {
    if (!obj[str]){ 
      obj[str] = 1;
    } else if (obj[str] === 1) {
      result += 1;
      obj[str] +=1;
    }
  })
  
  return result;
}