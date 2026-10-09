// Lingua delle pagine pubbliche: italiano per chi ha il browser in italiano, inglese per gli altri.
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* storage bloccato */ }
  // Un valore estraneo (altri siti dello stesso indirizzo usano lo stesso localStorage) non vale: il foglio di stile nasconde solo «it» ed «en».
  var lang = saved === "it" || saved === "en" ? saved : ((navigator.language || "en").toLowerCase().indexOf("it") === 0 ? "it" : "en");
  function apply(l) { root.setAttribute("data-lang", l); root.lang = l; }
  apply(lang);
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("lang");
    if (!btn) return;
    btn.addEventListener("click", function () {
      lang = lang === "it" ? "en" : "it";
      try { localStorage.setItem("lang", lang); } catch (e) { /* ignora */ }
      apply(lang);
    });
  });
})();
