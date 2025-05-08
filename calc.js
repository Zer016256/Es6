const checkCalc = () => {
  let firstNum, secondNum, result = 0;
  let operation = "";

  do{
    firstNum = Number(prompt("Enter 1st Number: "));
    secondNum = Number(prompt("Enter 2nd Number: "));
    
    operation = prompt("What type of operation?(+,-,/,*)");
    
    switch(operation){
      case '+':
        result = firstNum + secondNum;
        break;
      
      case '-':
        result = firstNum - secondNum;
        break;
      
      case '*':
        result = firstNum * secondNum;
        break;
        
      case '/':
        result = firstNum / secondNum;
        
        if(secondNum === 0){
          alert("Can't Divide by Zero");
          break;
          
        }else if(secondNum != 0){
          result = firstNum / secondNum;
          break;
          
        }else {
          continue;
        }
        
      default:
        alert("Out of range");
        break;
    }
    
    alert(`The First number: ${firstNum}. \nThe Second number: ${secondNum}. \nThe result of ${firstNum} ${operation} ${secondNum} is ${result}.`);
    console.log(`The result of ${firstNum} ${operation} ${secondNum} is ${result}.`);
    
    let tryAgain = prompt("Wanna try it again? (yes | no)");
    if(tryAgain === 'yes'){
      operation = "";
      firstNum, secondNum, result = 0;
      
      continue;
    }else{
      break;
    }
    
  }while(true);
}

checkCalc();