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

