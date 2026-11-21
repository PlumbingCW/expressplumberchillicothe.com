(function () {
  document.documentElement.classList.add("js");
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  ready(function () {
    var toggle = document.getElementById("mob-toggle");
    var drawer = document.getElementById("mob-drawer");
    var overlay = document.getElementById("mob-overlay");
    var closeBtn = document.getElementById("drawer-close");
    function openMenu() {
      drawer.classList.add("open");
      overlay.classList.add("visible");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close navigation menu");
      document.documentElement.style.overflow = "hidden";
    }
    function closeMenu() {
      drawer.classList.remove("open");
      overlay.classList.remove("visible");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      document.documentElement.style.overflow = "";
    }
    if (toggle && drawer && overlay) {
      toggle.addEventListener("click", function () {
        if (toggle.getAttribute("aria-expanded") === "true") closeMenu();
        else openMenu();
      });
      if (closeBtn) closeBtn.addEventListener("click", closeMenu);
      overlay.addEventListener("click", closeMenu);
      Array.prototype.forEach.call(drawer.querySelectorAll("a"), function (a) {
        a.addEventListener("click", closeMenu);
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeMenu();
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth > 768) closeMenu();
      });
    }
    Array.prototype.forEach.call(document.querySelectorAll(".faq-q"), function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.parentNode.parentNode;
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  });
})();
