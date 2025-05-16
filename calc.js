let firstNum,
  secondNum,
  result = 0;
let operation = "";

const checkCalc = (firstNum, secondNum, operation) => {
  switch (operation) {
    case "+":
      return firstNum + secondNum;

    case "-":
      return firstNum - secondNum;

    case "*":
      return firstNum * secondNum;

    case "/":
      if (secondNum === 0) {
        alert("Can't Divide by Zero");
        return;
      } else if (secondNum !== 0) {
        return firstNum / secondNum;
      }
      return firstNum / secondNum;

    default:
      return;
  }
};

do {
  firstNum = Number(prompt("Enter 1st Number: "));
  secondNum = Number(prompt("Enter 2nd Number: "));
  operation = prompt("What type of operation?(+,-,/,*)");

  result = checkCalc(firstNum, secondNum, operation);

  alert(
    `The First number: ${firstNum}. \nThe Second number: ${secondNum}. \nThe result of ${firstNum} ${operation} ${secondNum} is ${result}.`
  );
  console.log(
    `The result of ${firstNum} ${operation} ${secondNum} is ${result}.`
  );

  let tryAgain = prompt("Wanna try it again? (yes | no)");
  if (tryAgain !== "yes") {
    operation = "";

    break;
  }
} while (true);

checkCalc();
console.log(
  `The last entered numbers are: ${firstNum} and ${secondNum}. equal to ${result}.`
);
