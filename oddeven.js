
// This program checks if a number is odd or even 
// Recommended
let num = 0;

const checkOddEven = (num) => {
  num = num % 2;
  return num;
}

  while(true) {
    num = prompt("Enter a number: ");
    
    if(checkOddEven(num)){
      alert("Your number is odd number");
    } else {
      alert("Your number is even number");
    }
    
    let again = prompt("Enter again? (yes|no)");
    if(again !== "yes"){
      break;
    }
  }

checkOddEven();

console.log(`My last entered number: ${num}`);
