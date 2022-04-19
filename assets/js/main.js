console.log("it works")

let inputNumber = document.getElementById('input_number');
let output = document.getElementById('form_output');



function double() {
    console.log("function works");
    console.log(form_output);
    output.innerHTML = inputNumber.value * 2;
}
