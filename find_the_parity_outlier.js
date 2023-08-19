function findOutlier(integers){
  // Find whether the majority numbers are even or odd  
  let filtArr = integers.filter(int => int % 2 === 0);
  
  if (filtArr.length > 1) {
    filtArr = integers.filter(int => Math.abs(int) % 2 === 1);
  }
  
  return filtArr[0];
}