function highAndLow(numbers){
  const arr = numbers.split(" ").sort((a, b) => {
    return a - b;
  });
  
  let result = `${arr[arr.length - 1]} ${arr[0]}`;
  
  return result;
}