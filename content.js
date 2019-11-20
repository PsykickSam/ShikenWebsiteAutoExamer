try {
  var currentCounter = JSON.parse(localStorage.getItem("counter"));
  var total = 100;
  var randomTotal = Math.floor(Math.random() * 5) + 30;
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
    if (random % 2 == 0) {
      document.getElementById("t").click();
    } else {
      var text = document.querySelector(".selectBtn").textContent;
      if (text == "ア") {
        document.querySelector(".selectBtn").click();
      }
    }
    setTimeout(200);

    submit.click();
    setTimeout(200);
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
