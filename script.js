var noOfQuestions = document.getElementById("noOfQuestions");
var percentageRadioAny = document.getElementById("percentageRadioAny");
var percentageRadio40 = document.getElementById("percentageRadio40");
var percentageRadio70 = document.getElementById("percentageRadio70");
var percentageRadio100 = document.getElementById("percentageRadio100");
var emailFrom = document.getElementById("emailFrom");
var emailTo = document.getElementById("emailTo");
var hack = document.getElementById("hack");

if (noOfQuestions !== null) {
  noOfQuestions.value =
    localStorage.getItem("noOfQuestions") == null
      ? ""
      : JSON.parse(localStorage.getItem("noOfQuestions"));
}

if (hack !== null) {
  hack.addEventListener("click", () => {
    localStorage.setItem("noOfQuestions", JSON.stringify(noOfQuestions.value));
    window.close();

    if (percentageRadio100.checked === true) {
      window.open(
        "https://www.fe-siken.com/fekakomon.php?noq=" +
          noOfQuestions.value +
          "&p=100"
      );
    } else if (percentageRadio70.checked === true) {
      window.open(
        "https://www.fe-siken.com/fekakomon.php?noq=" +
          noOfQuestions.value +
          "&p=70"
      );
    } else if (percentageRadio40.checked === true) {
      window.open(
        "https://www.fe-siken.com/fekakomon.php?noq=" +
          noOfQuestions.value +
          "&p=40"
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
