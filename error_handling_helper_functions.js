//1
function isValidPassword(password) {
    if (typeof password !== 'string' || password.length < 8) {
      return false;
    }
  
    let hasNumber = false;
    let hasUppercase = false;
  
    for (let char of password) {
      if (!hasNumber && char >= '0' && char <= '9') {
        hasNumber = true;
      }
      if (!hasUppercase && char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      }
      if (hasNumber && hasUppercase) {
        return true;
      }
    }
  
    return false;
  }
  
//2
function showErrors() {
    try {
      let result = 10 / 0;
      if (!isFinite(result)) {
        throw new Error("Division by zero resulted in Infinity");
      }
  
      let names = ["Lithemba", "Sive"];
      let thirdName = names[2];
      if (thirdName === undefined) {
        throw new Error("Index out of bounds in the 'names' array");
      }
    } catch (error) {
      console.log("An error occurred:", error.message);
    }
  }
  
//3

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function removeExtraSpaces(text) {
  return text.trim().replace(/\s+/g, ' ');
}

//4

function findHighestScore(scores) {
  let highest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

function findLowestScore(scores) {
  let lowest = scores[0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
  }
  return lowest;
}

function calculateAverageScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}



