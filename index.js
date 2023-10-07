function computeTemp(event) {
  const inputField = event.target;
  const inputValue = parseFloat(inputField.value);

  if (isNaN(inputValue)) {
    return; // Exit if the input is not a valid number
  }

  const inputName = inputField.name;

  if (inputName === "Celsius") {
    document.getElementById("Fahrenheit").value = (inputValue * 9/5) + 32;
    document.getElementById("Kelvin").value = inputValue + 273.15;
  } else if (inputName === "Fahrenheit") {
    document.getElementById("Celsius").value = (inputValue - 32) * 5/9;
    document.getElementById("Kelvin").value = ((inputValue - 32) * 5/9) + 273.15;
  } else if (inputName === "Kelvin") {
    document.getElementById("Celsius").value = inputValue - 273.15;
    document.getElementById("Fahrenheit").value = ((inputValue - 273.15) * 9/5) + 32;
  }
}
