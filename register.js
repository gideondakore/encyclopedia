const btnRegister = document.querySelector(".btnRegister");
const btnBack = document.querySelector(".back-btn");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(window.location.href);
  window.location.href = "/entry.html";
});

btnBack.addEventListener("click", (e) => {
  window.history.back();
});
