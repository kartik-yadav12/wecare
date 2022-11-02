function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    }
    if (input == "paper") {
        return "scissors";
    }
    if (input == "scissors") {
        return "rock";
    }
    if (input == "hello") {
        return "Hello there!";
    }
    if (input == "what are AFC count " || input == "what are afc count" || input == "afc count") {
        return " predictor of the ovarian";
    }
    if (input == "what are AMH count" || input == "what are amh count" || input == " amh count") {
        return "how many potential egg cells a woman has left";
    }
    if (input == "what is normal body temperature" || input == "body temperature") {
        return "37 degrees Celsius";
    }
    if (input == "what is normal bp during maternity" || input == "normal bp range") {
        return "120/80mm hg";
    }
    if (input == "goodbye") {
        return "Talk to you later!";
    }
    else {
        return "Try asking something else!";
    }





}