function repeatedString(s, n) {
 
  let aCount = 0;

  if (n%(s.length) === 0){
    let multiplier = (n/s.length); 
    for (let i = 0; i < s.length; i++){
      if (s[i] === 'a'){
        aCount++;
      }
    }
    aCount = aCount * multiplier;
    return aCount; 

// even modulus is correct 

  } else if (n%(s.length) >= 1){
    
    let multiplier = (n/s.length); 
    let multiplierWholeNum = Math.trunc(multiplier);

    let remainder = n%(s.length);
    
    let remainderCount = 0;
    for (let j=0; j < remainder ; j++){
      if (s[j] === 'a'){
        remainderCount++;
      // remainder count 
      }
    }
    
    for (let i = 0; i < s.length; i++){
      if (s[i] === 'a'){
        aCount++;
      }
    } // the count of a in the substring

     aCount = remainderCount + (aCount * multiplierWholeNum);
     // remainder + number of occurrances in evenly divided 
     return aCount;
  }
}
const subStr= "aa";
repeatedString(subStr, 6);


// solution number one 

  // let aCount = 0;
  // let actualString = s;
  // let i=0;
  //   // building the string we want to investigate
  // while( i < n ){
  //   actualString = actualString.concat(s);
  //   i++;
  // }
  // // iterating over the string we build to see how many a's
  // for (let i =0; i < n; i++){
  //   if (actualString[i] ==='a'){
  //     aCount++;
  //   }
  // } 
  // return aCount;