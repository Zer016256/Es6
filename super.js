
const checkHero = () => {
  let person = [];
  let favoriteColor = [];

  for(let i = 0; i < 5; i++){
    person[i] = prompt(`Enter your name: ${i + 1}`);
    favoriteColor[i] = prompt(`Enter your favorite color ${i + 1}`);
    console.log(`You're super hero name is ${favoriteColor[i]} ${person[i]}.`);
  }
}

checkHero();
