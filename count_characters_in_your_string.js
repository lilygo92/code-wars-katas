function count(string) {
  let obj = {};
  
  string.split("").forEach(i => {
    obj[i] ? obj[i] += 1 : obj[i] = 1;
  })
  
  return obj;
}