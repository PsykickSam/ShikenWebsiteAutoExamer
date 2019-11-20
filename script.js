var noOfQuestions = document.getElementById("noOfQuestions");
var percentageRadio70 = document.getElementById("percentageRadio70");
var percentageRadio100 = document.getElementById("percentageRadio100");
var emailFrom = document.getElementById("emailFrom");
var emailTo = document.getElementById("emailTo");
var hack = document.getElementById("hack");

if (hack !== null) {
  hack.addEventListener("click", () => {
    window.close();

    if (percentageRadio100.checked === true) {
      window.open(
        "https://www.fe-siken.com/fekakomon.php?noq=" +
          noOfQuestions.value +
          "&p=100"
      );
    } else {
      window.open(
        "https://www.fe-siken.com/fekakomon.php?noq=" +
          noOfQuestions.value +
          "&p=any"
      );
    }
  }); 
}

