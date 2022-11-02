function computeBMI()
{
    //Obtain user inputs
    var height=Number(document.getElementById("height").value);
    var heightunits=document.getElementById("heightunits").value;
    var weight=Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;

    //Convert all units to metric
    if (heightunits=="inches") height/=39.3700787;
    if (weightunits=="lb") weight/=2.20462;

    //Perform calculation
    var BMI=weight/Math.pow(height,2);

    //Display result of calculation
    document.getElementById("bmi-op").innerText= "BMI = " + Math.round(BMI*100)/100;

    var output =  Math.round(BMI*100)/100
    if (output<18.5)
    document.getElementById("bmi-cat").innerText = "Category: Underweight";
    else if (output>=18.5 && output<=25)
    document.getElementById("bmi-cat").innerText = "Category: Normal";
    else if (output>=25 && output<=30)
    document.getElementById("bmi-cat").innerText = "Category: Obese";
    else if (output>30)
    document.getElementById("bmi-cat").innerText = "Category: Overweight";
}
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}