
// const inputContainer = document.querySelector("inputs-container");

// Get user bill amount
const billAmount = document.getElementById("billAmount");
let billValue = 0;
billAmount.addEventListener("input", (e) => {
   billValue = parseFloat(e.target.value) || 0;
});
 

// Get the value of each percentage
const percentages = document.querySelectorAll(".percent-btn-wrapper button");
let selectedPercentage = 0;

percentages.forEach((button) => {
   button.addEventListener("click", (e) => {
      for(let btn of percentages) {
         btn.classList.remove("selected");

         e.target.classList.add("selected");
         e.target.style.color = ("var(--secondary-green)"); 
         e.target.style.backgroundColor = ("var(--primary-green)");

         selectedPercentage = parseFloat(e.target.textContent) / 100;
         calculateTip();
      }
   });
});

 

// Get the value of user input for number of people
const userInputNumber = document.getElementById("inputNumber");
let numberOfPeople = 0;

userInputNumber.addEventListener("input", (e) => {
   numberOfPeople = parseInt(e.target.value) || 0;
   calculateTip();
});


// error message
const errorMessage = document.getElementById("errorMessage");

// tips amounts
const tipAmountPerPerson = document.getElementById("tipAmountOutPut");
const totalTipAmount = document.getElementById("totalAmountOutPut");

function calculateTip()  {
   if(numberOfPeople <= 0) {
      errorMessage.textContent = "Can't be zero";
      return;
   }

   errorMessage.textContent = "";

   const tipAmount = (billValue * selectedPercentage) / numberOfPeople;
   const totalAmount = (tipAmount * numberOfPeople) + billValue;

   tipAmountPerPerson.textContent = `$${tipAmount.toFixed(2)}`;
   totalTipAmount.textContent = `$${totalAmount.toFixed(2)}`;

   resetButton.disabled = false;
}


// reset
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
   billAmount.value = "";
   billValue = 0;
   selectedPercentage = 0;
   percentages.forEach(btn => btn.classList.remove("selected"));
   percentages.forEach(btn => btn.classList.remove("selected"));
   percentages.forEach(btn => btn.classList.remove("selected"));
   userInputNumber.value = "";
   numberOfPeople = 0;
   errorMessage.textContent = "";
   tipAmountPerPerson = "$0.00";
   totalTipAmount = "$0.00";
   resetButton.disabled = true;
});

