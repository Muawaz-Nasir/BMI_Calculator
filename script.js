let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  //   let weightGuide = document.querySelector("weight-guide");

  results.innerHTML = "";
  if (height <= 0 || isNaN(height)) {
    results.innerHTML += `Please add a valid height: ${height}`;
  }
  if (weight <= 0 || isNaN(weight)) {
    results.innerHTML += `Please add a valid weight: ${weight}`;
  }
  if (!isNaN(height) && height > 0 && !isNaN(weight) && weight > 0) {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML += `Your BMI is : ${bmi}`;
    if (bmi < 18.5) {
      results.innerHTML += `<p>You are under weight</p>`;
    } else if (bmi > 18.5 && bmi <= 24.9) {
      results.innerHTML += `<p>You are normal weight</p>`;
    } else if (bmi > 24.9) {
      results.innerHTML += `<p>You are over weight</p>`;
    } else {
      results.innerHTML += `<p>Unexpected Results</p>`;
    }
  }
});
