document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(max-width: 990px)");
  if (mediaQuery.matches) {
    const course = document.getElementById("course");
    course.classList.remove("border-end");
  }
});
