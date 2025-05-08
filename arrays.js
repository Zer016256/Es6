const checkTwoDimensional = () => {
  const myArray = [ [],
                  [],
                  [] ];

  for(let i = 0; i < myArray.length; i++){
    var row = "";
    for(let j = 0; j < 3; j++){
      myArray[i][j] = prompt(`Enter row's ${i + 1}, column's ${j + 1}: `);
      row += myArray[i][j] + " ";
    }
    console.log(` The row's are: ${row}`);
  }

  for(let b = 0; b < 3; b++){
    var column = "";
    for(let a = 0; a < myArray.length; a++){
      column += myArray[a][b] + " ";
    }
    console.log(` The column's are: ${column}`);
  }
}

checkTwoDimensional();