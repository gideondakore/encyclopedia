const sideStyle = document.querySelectorAll(".sideStyle");
const subjectItems = document.querySelectorAll(".subjects-items");
const subjects = document.querySelector(".subjects");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowSubjects = document.querySelector(".browse");
const browseArrow = document.querySelector(".browseArrow");
const main = document.querySelector("main");
const control = document.querySelectorAll(".control");

const openModal = function () {
  subjects.classList.remove("hidden");
  browseArrow.classList.remove("hidden");
};

const closeModal = function () {
  subjects.classList.add("hidden");
  browseArrow.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

btnShowSubjects.addEventListener("click", () => {
  let modalState = browseArrow.classList.contains("hidden");

  if (modalState) {
    openModal();
  } else {
    closeModal();
  }
});

for (let i = 0; i < subjectItems.length; i++) {
  subjectItems[i].addEventListener(
    "mouseover",
    (e) => {
      e.preventDefault();
      sideStyle[i].style.display = "block";
    },
    true
  );

  subjectItems[i].addEventListener(
    "mouseout",
    (e) => {
      e.preventDefault();
      sideStyle[i].style.display = "none";
    },
    true
  );
}

main.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    let modalState = false;

    for (let i = 0; i < control.length; i++) {
      if (
        event.target === control[i] ||
        event.target.offsetParent === control[i].offsetParent
      ) {
        modalState = true;
        break;
      } else {
        modalState = false;
      }
    }

    if (modalState) {
      return;
    } else {
      closeModal();
    }
  },
  true
);
