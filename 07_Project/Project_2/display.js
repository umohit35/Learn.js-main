const form = document.querySelector("form");

//stop defult action of form
form.addEventListener("submit", function (e) {
  e.preventDefault(); //method to stop defult action of form

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const val = document.querySelector("#weight-guide");
  const result = document.querySelector("#results");
  const display = document.querySelector("#display");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please provide a Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please provide a Valid Height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span> Your BMI is ${bmi}</span>`;

    // to display the range on the bases of BMI generated
    if (bmi < 18.6) {
      const content = val.querySelectorAll("p")[0].textContent;
      display.innerHTML = content;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      const content = val.querySelector("p")[1].textContent;
      display.innerHTML = content;
    }
    if (bmi > 24.9) {
      const content = val.querySelector("p")[2].textContent;
      display.innerHTML = content;
    }
  }
});
