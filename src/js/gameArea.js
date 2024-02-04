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

// function to handle the logic of the game
export const check = (x) => {
  let success = true;
  for (let i = 1; i <= x; i++) {
    let input = document.querySelector(`.guess-${tryNumber}-letter-${i}`);
    let predictLetter = input.value.toLowerCase();
    if (predictLetter === actualWord[i - 1]) {
      input.classList.add("yes-in-place");
    } else if (actualWord.includes(predictLetter) && predictLetter !== "") {
      input.classList.add("not-in-place");
      success = false;
    } else if (!actualWord.includes(predictLetter)) {
      input.classList.add("no");
      success = false;
    }
  }
  // handle Win or Loss
  if (success) {
    console.log(`success`)
  }
  else {
    console.log(`fail`);
  }
};
