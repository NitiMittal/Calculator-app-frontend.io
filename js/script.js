let rupee = document.getElementById("rupee");
let person = document.getElementById("person");
let custom = document.getElementById("custom");
let tip_amount = document.getElementById("tip_amount");
let total_amount = document.getElementById("total_amount");
let reset = document.getElementById("reset");
let radioButtonArray = document.getElementsByName("radiotip");
let mainForm = document.getElementById("mainForm");
let error = document.getElementById("error");
let error1 = document.getElementById("error1");

let bill_val,
  people_val,
  tip_value,
  amt = 0,
  ppl = 0;

rupee.addEventListener("input", () => {
  amt = Number(rupee.value);
  if (amt <= 0 || amt == "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    calculate();
  }
});

person.addEventListener("input", () => {
  ppl = Number(person.value);
  if (ppl <= 0 || ppl == "") {
    error1.style.display = "block";
  } else {
    error1.style.display = "none";
    calculate();
  }
});

custom.addEventListener("input", () => {
  if (custom.value >= 0) {
    clearRadioButtons();
    tip_value = custom.value;
    setTimeout(() => calculate(), 1000);
  }
});

//get value of radio button
mainForm.addEventListener("change", () => {
  for (var i = 0; i < radioButtonArray.length; i++) {
    if (custom.value > 0 || custom.value == "") {
      custom.value = "";
      if (radioButtonArray[i].checked) {
        tip_value = radioButtonArray[i].value;
        calculate();
        break;
      }
    }
  }
});

const calculate = () => {
  if (amt > 0 && ppl > 0 && tip_value >= 0) {
    let total_tip = (amt * Number(tip_value)) / 100;
    let total_amount1 = total_tip + amt;
    let tip_per_person = total_tip / ppl;
    let amount_per_person = total_amount1 / ppl;
    tip_amount.innerHTML = "$" + tip_per_person.toFixed(2);
    total_amount.innerHTML = "$" + amount_per_person.toFixed(2);
  }
};

//reset all the values
reset.addEventListener("click", () => {
  tip_amount.innerHTML = "$0.00";
  total_amount.innerHTML = "$0.00";
  rupee.value = "";
  person.value = "";
  custom.value = "";
  error.style.display = "none";
  error1.style.display = "none";
  clearRadioButtons();
});

const clearRadioButtons = () => {
  for (let i = 0; i < radioButtonArray.length; i++) {
    let radioButton = radioButtonArray[i];
    radioButton.checked = false;
  }
};
