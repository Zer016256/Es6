const checkOddEven = () => {
  let num = 0;

  while(true) {
    num = prompt("Enter a number: ")
    
    if(num % 2 == 0){
      alert("Your number is even number");
    }
    else if (num % 2 == 1) {
      alert("Your number is odd number");
    } else {
      prompt("Out of range");
    }
    
    let again = prompt("Enter again? (yes|no)");
    if(again !== "yes"){
      break;
    }
  }
}

checkOddEven();
