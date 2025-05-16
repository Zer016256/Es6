let result = "";
let weight,
  height,
  bmi = 0;

const checkBmi = (weight, height) => {
  return weight / height ** 2;
};

while (true) {
  weight = prompt("Enter your weight in KG");
  height = prompt("Enter you height in Meter");

  bmi = checkBmi(weight, height);

  switch (true) {
    case bmi < 18.5:
      result = "Under Weight you are less than 18.5 ";
      break;

    case bmi >= 18.5 && bmi <= 24.9:
      result = "Normal you are 18.5 to 24.9 weight";
      break;

    case bmi >= 25.0 && bmi <= 29.9:
      result = "Over Weight you are 25.0 to 29.9";
      break;

    case bmi >= 30.0:
      result = "Obese you are greater than 30.0";
      break;

    default:
      result = "Out of range";
      break;
  }

  bmi = bmi.toFixed(2);

  alert(`Your BMI is: ${bmi} \nCategory: ${result}.`);

  let again = prompt("You want to try it again? (yes/no)");
  if (again === "yes") {
    continue;
  } else {
    break;
  }
}

checkBmi();
