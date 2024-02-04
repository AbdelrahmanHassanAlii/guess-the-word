import sixLetterWords from "../js/list";
//function convert dynamically to uppercase
export const convertToUpperCase = (e) => {
  e.target.value = e.target.value.toUpperCase();
};

//fuction move to the next input dynamically
export const move = () => {
  let inputs = document.querySelectorAll(`input`);
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      let nextInput = inputs[index + 1];
      if (nextInput) nextInput.focus();
    });
  });
};

export const handleArrows = () => {
  let inputs = document.querySelectorAll(`input`);
  inputs.forEach((input) => {
    input.addEventListener("keydown", (event) => {
      let currentIndex = Array.from(inputs).indexOf(event.target);
      let typeOfKey = event.key;

      if (typeOfKey === "ArrowRight") {
        let nextIndex = currentIndex + 1;
        if (nextIndex < inputs.length) inputs[nextIndex].focus();
      }

      if (typeOfKey === "ArrowLeft") {
        let preIndex = currentIndex - 1;
        if (preIndex >= 0) inputs[preIndex].focus();
      }
    });
  });
};

//number of current try
let tryNumber = 1;

//function to get random word from the list
let getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * sixLetterWords.length);
  return sixLetterWords[randomIndex];
};
let actualWord = getRandomWord();
console.log(actualWord);

export const check = (x) => {
  let checkButton = document.querySelector(".check");
  let checkButtonText = checkButton.innerText;
  console.log(checkButtonText);
  if (checkButtonText === `Check Word`) {
    let success = false;
    for (let i = 1; i <= x; i++) {
      let input = document.querySelector(`.guess-${tryNumber}-letter-${i}`);
      let predictLetter = input.value.toLowerCase();
      if (predictLetter === actualWord[i - 1]) {
        input.classList.add("yes-in-place");
        success = true;
      } else if (actualWord.includes(predictLetter) && predictLetter !== "") {
        input.classList.add("not-in-place");
        success = false;
      } else if (!actualWord.includes(predictLetter)) {
        input.classList.add("no");
        success = false;
      }
    }
    // handle Win or Loss
    if (success === true) {
      //get all dives inputs
      let allInputDiv = document.querySelectorAll(".inputs > div");
      //make them disabled if he win
      allInputDiv.forEach((input) => {
        input.classList.add(`disabled-inputs`);
      });
      //get the message Area
      let messageArea = document.querySelector(`.message`);
      //add success text to message area
      messageArea.innerHTML = `<p>Congratulation The Word Is <span>${actualWord.toUpperCase()}</span></p>`;

      //change the text of the button to reload
      checkButton.innerHTML = `Play Again!`;
    } else {
      //get the current row
      let currentRow = document.querySelector(`.try-${tryNumber}`);
      //diable the current row 
      currentRow.classList.add(`disabled-inputs`);
      //increase the nuber of tries
      tryNumber += 1;
      //get the next row
      let nextRow = document.querySelector(`.try-${tryNumber}`);
      //active it
      nextRow.classList.remove(`disabled-inputs`);
      // get all inputs in the row
      let inputInNextRow = nextRow.querySelectorAll(`input`);
      inputInNextRow.forEach((input) => {
        input.disabled = false;
      });
    }
  } else if (checkButtonText === `Play Again!`) {
    window.location.reload();
  }
};
