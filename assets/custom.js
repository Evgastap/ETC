// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-115261192-1');
//------------------------------------------------------------------------------
//Paricles
particleground(document.getElementById('particles'));
//------------------------------------------------------------------------------
//Initial animation on page load
$(window).on('load', function() {
  console.log("Page loaded! Starting animation...");
  $("#Top").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1s"
  });
  $("#Right").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.1s"
  });
  $("#Left").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.2s"
  });
  $("#Right-inside").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.3s"
  });
  $("#Left-inside").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.4s"
  });
  $("#Middle").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.5s"
  });
  $(".understand-tomorrow").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.7s"
  });
  $(".mission").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "1.8s"
  });
  $(".navbar-item").css({
    "animation": "logofade 0.5s ease-in",
    "animation-fill-mode": "forwards",
    "animation-delay": "2.0s"
  });
});
