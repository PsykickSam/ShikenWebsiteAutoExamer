
try {
  var noq = localStorage.getItem("noq") === null ? null : JSON.parse(localStorage.getItem('noq'));
  var per = localStorage.getItem("per") === null ? null : JSON.parse(localStorage.getItem('per'));

  if (
    document.location.href.includes("noq=") &&
    document.location.href.includes("p=")
  ) {
    noq = getUrlVars(location).noq;
    per = getUrlVars(location).p;

    localStorage.setItem("noq", JSON.stringify(noq));
    localStorage.setItem("per", JSON.stringify(per));
  }

  var currentCounter = JSON.parse(localStorage.getItem("counter"));
  var randomTotal = noq === null ? Math.floor(Math.random() * 5) + 30 : noq;
  var submit = document.querySelector(".submit");
  var random = Math.floor(Math.random() * 4);

  if (currentCounter == null) {
    currentCounter = 0;
    localStorage.setItem("counter", currentCounter);
  } else {
    currentCounter += 1;
    localStorage.setItem("counter", currentCounter);
  }

  if (currentCounter < randomTotal) {
    if (per === "100") {
      document.getElementById("t").click();
    } else {
      if (random % 2 == 0) {
        document.getElementById("t").click();
      } else {
        var text = document.querySelector(".selectBtn").textContent;
        if (text == "ア") {
          document.querySelector(".selectBtn").click();
        }
      }
    }

    submit.click();
    setTimeout(300);
  } else {
    localStorage.clear();
    var showReport = document.querySelector("#showReport");
    showReport.click();

    var changeDate = document.querySelector(".studyTime.fr");
    changeDate.innerHTML = "60分";

    setTimeout(function() {
      var overLayer = document.getElementById("overLayer");
      html2canvas(overLayer, {
        onrendered: function(canvas) {
          var tempcanvas = document.createElement("canvas");
          var link = document.createElement("a");
          var context = tempcanvas.getContext("2d");

          tempcanvas.width = canvas.width;
          tempcanvas.height = canvas.height;
          context.drawImage(canvas, 0, 0, 800, 739);
          link.href = tempcanvas.toDataURL("image/jpg");
          link.download = "screenshot.jpg";
          link.click();
        }
      });
    }, 3000);
  }
} catch (error) {
  console.log("Don't worry it is fine...", error);
}
