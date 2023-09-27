let Input = document.querySelector('#inputTemp')
let Output = document.querySelector('#outputTemp')

let clearButton = document.querySelector('#clear')
function roundNumber(number){
    return Math.round(number*100)/100
}
function convertTemperature() {
  const fromScale = document.getElementById("fromScale").value;
  const toScale = document.getElementById("toScale").value;
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  let resultElement = document.getElementById("outputTemp");
  let result = 0;

  if (isNaN(inputTemp)) {
    result = "";
  } else {
    switch (fromScale) {
      case "celsius":
        switch (toScale) {
          case "fahrenheit":
            result =roundNumber((inputTemp * 9) / 5 + 32) ;
            break;
          case "kelvin":
            result =roundNumber(inputTemp + 273.15) ;
            break;
          case "celsius":
            result = roundNumber(inputTemp );
            break;
        }
        break;
      case "fahrenheit":
        switch (toScale) {
          case "celsius":
            result = roundNumber(((inputTemp - 32) * 5) / 9);
            break;
          case "kelvin":
            result =roundNumber (((inputTemp - 32) * 5) / 9 + 273.15);
            break;
          case "fahrenheit":
            result = roundNumber(inputTemp );
            break;
        }
        break;
      case "kelvin":
        switch (toScale) {
          case "celsius":
            result =roundNumber(inputTemp - 273.15) ;
            break;
          case "fahrenheit":
            result =roundNumber (((inputTemp - 273.15) * 9) / 5 + 32);
            break;
          case "kelvin":
            result = roundNumber(inputTemp );
            break;
        }
        break;
    }
  }

  resultElement.value = result;
}


clearButton.addEventListener('click', ()=>{
    Input.value = ""
    Output.value = ""
   
})