const dashboard = document.querySelector(".right");
const dashtext = document.querySelector("#dashtext");
const doctorsdiv = document.querySelector(".wrapper");
const colleagues = document.querySelector("#doctors");
dashtext.addEventListener("click", function () {
  dashboard.classList.toggle("active");
  doctorsdiv.classList.remove("active");
  dashboard.style.opacity = "1";
});
colleagues.addEventListener("click", function () {
  doctorsdiv.classList.toggle("active");
  dashboard.classList.remove("active");
  doctorsdiv.style.opacity = "1";
});
