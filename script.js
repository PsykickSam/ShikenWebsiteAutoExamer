var noOfQuestions = document.getElementById("noOfQuestions");
var percentageRadio70 = document.getElementById("percentageRadio70");
var percentageRadio100 = document.getElementById("percentageRadio100");
var emailFrom = document.getElementById("emailFrom");
var emailTo = document.getElementById("emailTo");
var hack = document.getElementById("hack");

var isRunScript = JSON.parse(localStorage.getItem("isRunScript"));

if (isRunScript == null) {
    isRunScript = false;
    localStorage.setItem("isRunScript", isRunScript);
}

if (chrome.tabs) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true
    },
    function(tabs) {
      if (tabs[0].url !== "https://www.fe-siken.com/fekakomon.php") {
        noOfQuestions.disabled = true;
        percentageRadio70.disabled = true;
        percentageRadio100.disabled = true;
        emailFrom.disabled = true;
        emailTo.disabled = true;
        hack.disabled = true;
      } else {
        noOfQuestions.disabled = false;
        percentageRadio70.disabled = false;
        percentageRadio100.disabled = false;
        emailFrom.disabled = false;
        emailTo.disabled = false;
        hack.disabled = false;
      }

      hack.addEventListener("click", () => {
        window.close();
        chrome.tabs.executeScript({
            file: "content.js"
        });
        isRunScript = true;
        localStorage.setItem("isRunScript", isRunScript);
      });
    }
  );
}

if (isRunScript) {
  chrome.tabs.executeScript({
    file: "content.js"
  });
}
