window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".goTopButton");
  scroll.classList.toggle("active", window.scrollY > 300);
});

function scrollToTop(id) {
  document
    .getElementById(id)
    .scrollIntoView({block: "start", behavior: "smooth"});
}
