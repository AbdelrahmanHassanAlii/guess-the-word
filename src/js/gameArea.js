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

// //number of current try
// let tryNumber = 1;

// //function to get random word from the list
// let getRandomWord = () => {
//   const randomIndex = Math.floor(Math.random() * sixLetterWords.length);
//   return sixLetterWords[randomIndex];
// };
// let actualWord = getRandomWord();
// console.log(actualWord);

// let success = true;
// export const check = (x) => {
//   let checkButton = document.querySelector(".check");
//   let checkButtonText = checkButton.innerText;
//   console.log(checkButtonText);
//   if (checkButtonText === `Check Word`) {
//     for (let i = 1; i <= x; i++) {
//       let input = document.querySelector(`.guess-${tryNumber}-letter-${i}`);
//       let predictLetter = input.value.toLowerCase();
//       if (predictLetter === actualWord[i - 1]) {
//         input.classList.add("yes-in-place");
//       } else if (actualWord.includes(predictLetter) && predictLetter !== "") {
//         input.classList.add("not-in-place");
//         success = false;
//       } else if (!actualWord.includes(predictLetter)) {
//         input.classList.add("no");
//         success = false;
//       }
//     }
//     // handle Win or Loss
//     if (success === true) {
//       //get all dives inputs
//       let allInputDiv = document.querySelectorAll(".inputs > div");
//       //make them disabled if he win
//       allInputDiv.forEach((input) => {
//         input.classList.add(`disabled-inputs`);
//       });
//       //get the message Area
//       let messageArea = document.querySelector(`.message`);
//       //add success text to message area
//       messageArea.innerHTML = `<p>Congratulation The Word Is <span>${actualWord.toUpperCase()}</span></p>`;

//       //change the text of the button to reload
//       checkButton.innerHTML = `Play Again!`;
//     } else {
//       if (tryNumber < x) {
//         //get the current row
//         let currentRow = document.querySelector(`.try-${tryNumber}`);
//         //diable the current row
//         currentRow.classList.add(`disabled-inputs`);
//         //disabled the current row inputs
//         currentRow.querySelectorAll("input").forEach((input) => {
//           input.disabled = true;
//         });
//         //increase the nuber of tries
//         tryNumber += 1;
//         //get the next row
//         let nextRow = document.querySelector(`.try-${tryNumber}`);
//         //active it
//         nextRow.classList.remove(`disabled-inputs`);
//         // get all inputs in the row
//         let inputsInNextRow = nextRow.querySelectorAll(`input`);
//         inputsInNextRow.forEach((input) => {
//           input.disabled = false;
//         });
//         //make the frist input active (focus)
//         let fristInput = nextRow.querySelector(`input`);
//         fristInput.focus();
//       }
//     }
//   } else if (checkButtonText === `Play Again!`) {
//     window.location.reload();
//   }
// };


// Number of current try
let tryNumber = 1;

// Function to get a random word from the list
let getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * sixLetterWords.length);
  return sixLetterWords[randomIndex];
};

// Get a random word for the game
let actualWord = getRandomWord();
console.log(actualWord);

// Flag to check if the guess was successful
let success = true;

// Function to check the user's guess
export const check = (x) => {
  // Get the check button and its text
  let checkButton = document.querySelector(".check");
  let checkButtonText = checkButton.innerText;

  // Check if the button text is 'Check Word'
  if (checkButtonText === `Check Word`) {
    // Reset success flag for each guess
    success = true;

    // Loop through each input in the current row
    for (let i = 1; i <= x; i++) {
      let input = document.querySelector(`.guess-${tryNumber}-letter-${i}`);
      let predictLetter = input.value.toLowerCase();

      // Check if the guessed letter is in the correct position
      if (predictLetter === actualWord[i - 1]) {
        input.classList.add("yes-in-place");
      } else if (actualWord.includes(predictLetter) && predictLetter !== "") {
        // Check if the guessed letter is in the word but in the wrong position
        input.classList.add("not-in-place");
        success = false;
      } else if (!actualWord.includes(predictLetter)) {
        // Check if the guessed letter is not in the word
        input.classList.add("no");
        success = false;
      }
    }

    // Handle Win or Loss
    if (success) {
      // Disable all input divs if the user wins
      let allInputDiv = document.querySelectorAll(".inputs > div");
      allInputDiv.forEach((input) => {
        input.classList.add(`disabled-inputs`);
      });

      // Get the message area and display the success message
      let messageArea = document.querySelector(`.message`);
      messageArea.innerHTML = `<p>Congratulations! The Word Is <span>${actualWord.toUpperCase()}</span></p>`;

      // Change the text of the button to 'Play Again!'
      checkButton.innerHTML = `Play Again!`;
    } else {
      // Check if there are more tries left
      if (tryNumber < x) {
        // Disable the current row
        let currentRow = document.querySelector(`.try-${tryNumber}`);
        currentRow.classList.add(`disabled-inputs`);
        currentRow.querySelectorAll("input").forEach((input) => {
          input.disabled = true;
        });

        // Move to the next row
        tryNumber += 1;

        // enable the next row
        let nextRow = document.querySelector(`.try-${tryNumber}`);
        nextRow.classList.remove(`disabled-inputs`);

        // Enable inputs in the next row
        let inputsInNextRow = nextRow.querySelectorAll(`input`);
        inputsInNextRow.forEach((input) => {
          input.disabled = false;
        });

        // Focus on the first input in the next row
        let firstInput = nextRow.querySelector(`input`);
        firstInput.focus();
      }
    }
  } else if (checkButtonText === `Play Again!`) {
    // Reload the page if the button text is 'Play Again!'
    window.location.reload();
  }
};

