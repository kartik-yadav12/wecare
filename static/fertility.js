//Make arrays of the lookup values (order is inportant!)
function computeQuotient() {
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
    var age =    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var bmi  =   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 4, 5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var afc =    [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var amh10 =  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    //Read Inputs
    var ageInput = document.getElementById("ageInput").value;
    var bmiInput = document.getElementById("bmiInput").value;
    var afcInput = document.getElementById("afcInput").value;
    var amhInput = Number(document.getElementById("amhInput").value) * 10; // *10 is in the formula. 
  
  
    //Handle Empty Inputs
    if ((ageInput == "") || (bmiInput == "") || (afcInput == "") || (amhInput == "")) {
      return document.getElementById("error").innerHTML = "Error! : Please check your inputs...";
    }
    if ((ageInput !== "") && (bmiInput !== "") && (afcInput !== "") && (amhInput !== "")) {
      document.getElementById("error").innerHTML = "";
    }
  
    //Map the Inputs Values to the Lookup
    function map1(ageInput) {
      let index = values.findIndex(values => values >= ageInput);
      return age[index]*3;
    }
    function map2(bmiInput) {
      let index = values.findIndex(values => values >= bmiInput);
      return bmi[index];
    }
    function map3(afcInput) {
      let index = values.findIndex(values => values >= afcInput);
      return afc[index]*3;
    }
    function map4(amhInput) {
      let index = values.findIndex(values => values >= amhInput);
      return amh10[index]*3;
    }
  
    //Calculate Results
    var score = map1(ageInput) + map2(bmiInput) + map3(afcInput) + map4(amhInput);
    var percentage = score * 2;
  
    //Show Results
    document.getElementById("score").innerHTML = score;
    document.getElementById("percentage").innerHTML = `${percentage}%`;
  
    //Show Remarks
    if (score <= 18)  {
      document.getElementById("result").innerHTML = "Poor";
      document.getElementById('low-fertility').setAttribute('style', 'display:none');
      document.getElementById('average-fertility').setAttribute('style', 'display:none');
      document.getElementById('good-fertility').setAttribute('style', 'display:none');
      document.getElementById('best-fertility').setAttribute('style', 'display:none');
      document.getElementById('poor-fertility').setAttribute('style', 'display:block');
    } else if (score > 18 && score <= 27) {
      document.getElementById("result").innerHTML = "Low";
      document.getElementById('low-fertility').setAttribute('style', 'display:block');
      document.getElementById('average-fertility').setAttribute('style', 'display:none');
      document.getElementById('good-fertility').setAttribute('style', 'display:none');
      document.getElementById('best-fertility').setAttribute('style', 'display:none');
      document.getElementById('poor-fertility').setAttribute('style', 'display:none');
    } else if (score > 27 && score <= 34) {
      document.getElementById("result").innerHTML = "Average";
      document.getElementById('low-fertility').setAttribute('style', 'display:none');
      document.getElementById('average-fertility').setAttribute('style', 'display:block');
      document.getElementById('good-fertility').setAttribute('style', 'display:none');
      document.getElementById('best-fertility').setAttribute('style', 'display:none');
      document.getElementById('poor-fertility').setAttribute('style', 'display:none');
  
    } else if (score > 34 && score <= 42) {
      document.getElementById("result").innerHTML = "Good";
      document.getElementById('low-fertility').setAttribute('style', 'display:none');
      document.getElementById('average-fertility').setAttribute('style', 'display:none');
      document.getElementById('good-fertility').setAttribute('style', 'display:block');
      document.getElementById('best-fertility').setAttribute('style', 'display:none');
      document.getElementById('poor-fertility').setAttribute('style', 'display:none');
    } else if (score > 42 && score <= 50) {
      document.getElementById("result").innerHTML = "Best";
      document.getElementById('low-fertility').setAttribute('style', 'display:none');
      document.getElementById('average-fertility').setAttribute('style', 'display:none');
      document.getElementById('good-fertility').setAttribute('style', 'display:none');
      document.getElementById('best-fertility').setAttribute('style', 'display:block');
      document.getElementById('poor-fertility').setAttribute('style', 'display:none');
    } else if (score > 50) {
      document.getElementById("result").innerHTML = "Poor";
      document.getElementById('low-fertility').setAttribute('style', 'display:none');
      document.getElementById('average-fertility').setAttribute('style', 'display:none');
      document.getElementById('good-fertility').setAttribute('style', 'display:none');
      document.getElementById('best-fertility').setAttribute('style', 'display:none');
      document.getElementById('poor-fertility').setAttribute('style', 'display:block');
    } else {
      document.getElementById("result").innerHTML = "N/A"; 
      document.getElementById("percentage").innerHTML = "N/A";
      document.getElementById("score").innerHTML = "N/A";
    }    
  }
  
  //Retain values on page refresh
  
  document.getElementById("ageInput").value = getSavedValue("ageInput");     
  document.getElementById("bmiInput").value = getSavedValue("bmiInput");
  document.getElementById("afcInput").value = getSavedValue("afcInput");
  document.getElementById("amhInput").value = getSavedValue("amhInput");
     
  function saveValue(e){
    var id = e.id;
    var val = e.value;
    sessionStorage.setItem(id, val);
  }
   
  function getSavedValue(v) {
    if (!sessionStorage.getItem(v)) {
      return ""; 
    }
    return sessionStorage.getItem(v);
  }
  
  document.addEventListener("keyup", function (event) {
    if (event.keycode === 13) {
      // event.preventDefault();
      document.getElementById("btn1").click();
    }
  });
  
  //Input Validation [Only Numbers (whole and decimal) are allowed]
  function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }