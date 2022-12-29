const nav = document.querySelector(".navbar");
const header = document.querySelector("header")

const headerOptions = {
  rootMargin: "-50px 0px 0px 0px",
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.style.opacity = "1";
    } else {
      nav.style.display = "unset";
      nav.style.opacity = "0";
    }
  });
}, headerOptions);

navObserver.observe(header);

$(window).on("resize", () => {
  if ($(window).width() < 992) {
    nav.style.backgroundColor="#242424";
  }
  else {
    nav.style.backgroundColor = "transparent";
  }
})