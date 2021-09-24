/*  const isPrime = (n) => {
  let divisor = 2;
  
  
  while(divisor < n){
    if(n%divisor === 0){
      return 'Not prime'
    } else {
      divisor++;
    }
  }
  return 'Prime';
 }
 
 console.log(isPrime(4)) */
 
  /* const isPrime = (n) => {
  let divisor = 2;
  
  
  while(divisor < n){
    if(n%divisor === 0){
      return 'Not prime'
    } else {
      
      
      if(n%divisor === 1){
      return "prime"
      }
      divisor++;
    }
  }
  
  }
  console.log(isPrime(4)) */
  
  
/*   const isPrime = (n) => {
  
  
  for(d=2; d<n; d++){
  console.log('-----******------')
    if(n%d == 0){
        return 'Not prime'
      } 
  }
  return "prime"
   }
  console.log(isPrime(4)) */
  
  
  const isPrime = (n) => {
  
  
    for(d=2; d<n; d++){
      if(n%d === 0){
          return false
        } else {
            if(d === n-1){
              return true
          }
        }
    }return true
    
   }
  console.log(isPrime(2))
  