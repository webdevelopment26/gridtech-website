(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-main");

  if (toggle && nav) {
    let backdrop = document.querySelector(".nav-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "nav-backdrop";
      backdrop.setAttribute("aria-hidden", "true");
      document.body.appendChild(backdrop);
    }

    function setNavOpen(open) {
      nav.classList.toggle("open", open);
      backdrop.classList.toggle("visible", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open.toString());
    }

    toggle.addEventListener("click", () => setNavOpen(!nav.classList.contains("open")));

    backdrop.addEventListener("click", () => setNavOpen(false));

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });
  }
})();
