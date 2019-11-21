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

if (percentageRadioAny !== null) {
  if (localStorage.getItem("percentageRadioAny") == null) {
    if (JSON.parse(localStorage.getItem(percentageRadioAny)) === true) {
      percentageRadioAny.checked = true;
    }
  }
}

if (percentageRadio40 !== null) {
  if (localStorage.getItem("percentageRadio40") == null) {
    if (JSON.parse(localStorage.getItem(percentageRadio40)) === true) {
      percentageRadioAny.checked = true;
    }
  }
}

if (percentageRadio70 !== null) {
  if (localStorage.getItem("percentageRadio70") == null) {
    if (JSON.parse(localStorage.getItem(percentageRadio70)) === true) {
      percentageRadioAny.checked = true;
    }
  }
}

if (percentageRadio100 !== null) {
  if (localStorage.getItem("percentageRadio100") == null) {
    if (JSON.parse(localStorage.getItem(percentageRadio100)) === true) {
      percentageRadioAny.checked = true;
    }
  }
}

if (hack !== null) {
  hack.addEventListener("click", () => {
    localStorage.setItem("noOfQuestions", JSON.stringify(noOfQuestions.value));
    localStorage.setItem("percentageRadioAny", JSON.stringify(percentageRadioAny.checked));
    localStorage.setItem("percentageRadio40", JSON.stringify(percentageRadio40.checked));
    localStorage.setItem("percentageRadio70", JSON.stringify(percentageRadio70.checked));
    localStorage.setItem("percentageRadio100", JSON.stringify(percentageRadio100.checked));
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
