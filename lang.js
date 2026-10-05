(function (global) {
  var KEY = "ad-lang";

  function read() {
    try {
      var q = new URLSearchParams(location.search).get("lang");
      if (q === "en" || q === "hr") return q;
      var saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "hr") return saved;
    } catch (e) {}
    return null;
  }

  function save(lang) {
    if (lang !== "en" && lang !== "hr") return;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  global.ADigitalLang = { read: read, save: save };
})(window);
