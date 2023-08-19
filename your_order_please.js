function order(words){
  const arr = words.split(" ");
  let result = "";
  let placement = 1;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].includes(placement.toString())) {
        i === arr.length - 1 ? result += arr[j] :  result += `${arr[j]} `;
        placement += 1;
        break;
      }
    }
  }
  
  return result;
}