
const checkBrand = () => {
  let cars = [];
  for(let i = 0; i < 5; i++){
    cars[i] = prompt(`Enter your Car Brands ${i + 1}: `);
  }

  console.log(`You're Car Brands are: ${cars}`);
}

checkBrand();

const checkAge = () => {
  let age = 17;
  if(age > 18){
    console.log("You're Adult");
  }else{
    console.log("You're Minor");
  }
}

checkAge();

