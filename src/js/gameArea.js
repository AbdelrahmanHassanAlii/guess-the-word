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
  if (checkButtonText === `Check Word 🤔`) {
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
      } else if (!actualWord.includes(predictLetter) || predictLetter === "") {
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
      messageArea.innerHTML = `<p>Congratulations 🥰! The Word Is <span>${actualWord.toUpperCase()}</span></p>`;
      document.querySelector(`button.hint`).disabled = true;
      document.querySelector(`button.hint`).style.opacity = 0.5;

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
      } else {
        // Get the message area and display the fail message
        let messageArea = document.querySelector(`.message`);
        messageArea.innerHTML = `<p>You Lost! The Word Is <span>${actualWord.toUpperCase()}</span></p>`;
        checkButton.innerHTML = `Play Again!`;
        document.querySelector(`button.hint`).disabled = true;
        document.querySelector(`button.hint`).style.opacity = 0.5;
      }
    }
  } else if (checkButtonText === `Play Again!`) {
    // Reload the page if the button text is 'Play Again!'
    window.location.reload();
  }
};

export const fun = () => {
  let enabledInputs = document.querySelectorAll(".inputs input:not(:disabled)");

  // Use Array.from to convert NodeList to an array and then filter
  let emptyEnabledInputs = Array.from(enabledInputs).filter((input) => {
    // Return true for elements that have an empty value
    return input.value.trim() === "";
  });

  if (emptyEnabledInputs.length > 0) {
    let randomEmptyIndex = Math.floor(
      Math.random() * emptyEnabledInputs.length
    );
    let randomInput = emptyEnabledInputs[randomEmptyIndex];
    let indexToFill = Array.from(enabledInputs).indexOf(randomInput);
    if (indexToFill !== -1) {
      randomInput.value = actualWord[indexToFill].toUpperCase();
    }
  }
};

//function to handle backspace and enter keys
let handleKeyDown = (event) => {
  if (event.key === "Backspace") {
    let enabledInputs = document.querySelectorAll(
      ".inputs input:not(:disabled)"
    );
    let curretIndex = Array.from(enabledInputs).indexOf(document.activeElement);
    console.log(curretIndex);
    if (curretIndex) {
      let curretInput = enabledInputs[curretIndex];
      let preInput = enabledInputs[curretIndex - 1];
      curretInput.value = "";
      preInput.value = "";
      preInput.focus();
    }
  }
  if (event.key === "Enter") {
    check(6);
  }
};
document.addEventListener("keydown", handleKeyDown);
