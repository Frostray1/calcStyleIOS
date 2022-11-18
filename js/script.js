let firstNumber = "";
let secondNumber = "";
let operation = "";
let answer = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

const out = document.querySelector(".screen p");

function clearAll() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  answer = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("buttons__btn")) return;
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";

  if (event.target.classList.contains("plus-minus")) {
    if(secondNumber == ''){
        firstNumber = -1 * firstNumber;
        out.textContent = firstNumber;
    }else{
        secondNumber = -1 * secondNumber;
        out.textContent = secondNumber;
    }
  } else if (event.target.classList.contains("percent")) {
    firstNumber = firstNumber / 100;
    out.textContent = firstNumber;
  }

  


  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (secondNumber === "" && operation == "") {
      firstNumber += key;
      console.log("клик по цифрам", firstNumber, secondNumber, operation);
      out.textContent = firstNumber;
    } else if (firstNumber !== "" && secondNumber !== "" && answer) {
      secondNumber = key;
      answer = false;
      out.textContent = secondNumber;
    } else {
      secondNumber += key;
      console.log("клик по цифрам", firstNumber, secondNumber, operation);
      out.textContent = secondNumber;
    }
  }
  if (action.includes(key)) {
    operation = key;
    out.textContent = firstNumber;

    console.log("нажатие кнопки", firstNumber, secondNumber, operation);
  }

  if (key === "=") {
    if (secondNumber === "") secondNumber = firstNumber;
    switch (operation) {
      case "+":
        firstNumber = +firstNumber + +secondNumber;
        break;
      case "-":
        firstNumber = +firstNumber - +secondNumber;
        break;
      case "/":
        if (secondNumber === "0") {
          out.textContent = "Ошибка";
          firstNumber = "";
          secondNumber = "";
          operation = "";
          return;
        }
        firstNumber = +firstNumber / +secondNumber;
        break;
      case "x":
        firstNumber = +firstNumber * +secondNumber;
        break;
    }
    answer = true;
    out.textContent = firstNumber;
  }
};
