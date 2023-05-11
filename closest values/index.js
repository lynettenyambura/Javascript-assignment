function closestTo100(num1, num2) {
    const target = 100; 
    const diff1 = Math.abs(num1 - target); 
    const diff2 = Math.abs(num2 - target); 
    if (diff1 === diff2) { 
      return num1;
    } else if (diff1 < diff2) { 
      return num1;
    } else { 
    }
  }
  
  
  console.log(closestTo100(95, 99)); 
  console.log(closestTo100(75, 125)); 
  console.log(closestTo100(90, 91)); 