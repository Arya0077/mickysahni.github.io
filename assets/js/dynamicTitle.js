window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "MiCky Sahni";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "assets/images/pfp.png";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "assets/images/pfp.png";
    } else {
        document.title = attentionMessage;
        favicon.href = "./assets/images/folded.png";
    }
  }   
};