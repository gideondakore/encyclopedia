const subjects = document.querySelector(".subjects");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowSubjects = document.querySelector(".browse");
const browseArrow = document.querySelector(".browseArrow");
const main = document.querySelector("main");
const control = document.querySelectorAll(".control");
const btnRegister = document.querySelector(".btnRegister");
const btnLogin = document.querySelector(".btnLogin");
const linkAnchors = document.querySelectorAll(".info>ul>li>a");
const subjectsWrapper = document.querySelector(".subjectsWrapper");
const subjectLinks = document.querySelectorAll(".subjects-items>a");
const searchIcon = document.querySelector(".searchIcon");
const searchQuery = document.getElementById("q");

// console.log(searchQuery);

const subjectLists = [
  "Africa history",
  "America history",
  "Anthropology",
  "Asian history",
  "Business and Management",
  "Classical Studies",
  "Climate Science",
  "Communication",
  "Criminology and Criminal Justice",
  "Economics and Finance",
  "Education",
  "Environmental Science",
  "Computer Science",
  "Food Studies",
  "Global Public Health",
  "International Studies",
  "Latin America History",
  "Linguistics",
  "Literature",
  "Natural Hazard Science",
  "Neuroscience",
  "Physics",
  "Planetry Science",
  "Politics",
  "Psychology",
  "Religion",
  "Social Work",
].sort((a, b) => b.localeCompare(a));

const displaySubjectList = function (lists) {
  subjectsWrapper.innerHTML = "";

  lists.forEach(function (list, i) {
    const html = `<li class="subjects-items control" ">
      <div class="sideStyle control"></div>
      <a>${list}</a>
      </li>`;

    subjectsWrapper.insertAdjacentHTML("afterbegin", html);
  });

  const subjectItems = document.querySelectorAll(".subjectsWrapper>li");
  const sideStyle = document.querySelectorAll(".subjectsWrapper>li>div");
  const subjectAnchor = document.querySelectorAll(".subjectsWrapper>li>a");

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

    subjectItems[i].addEventListener("click", (e) => {
      e.preventDefault();

      const subjectTitle = subjectAnchor[i].textContent;
      const subjectUrl = `https://www.google.com/search?q=${encodeURIComponent(
        subjectTitle
      )}`;

      window.open(subjectUrl, "_blank");
    });
  }
};

const openModal = function () {
  subjects.classList.remove("hidden");
  browseArrow.classList.remove("hidden");
};

const closeModal = function () {
  subjects.classList.add("hidden");
  browseArrow.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

btnShowSubjects.addEventListener("click", (e) => {
  e.preventDefault();
  displaySubjectList(subjectLists);

  let modalState = browseArrow.classList.contains("hidden");

  if (modalState) {
    openModal();
  } else {
    closeModal();
  }
});

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

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/login.html";
});

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/register.html";
});

for (let i = 0; i < linkAnchors.length; i++) {
  linkAnchors[i].addEventListener("click", (e) => {
    e.preventDefault();
    const aLink = e.target.innerText.toLowerCase();

    switch (aLink) {
      case "home":
        window.location.href = "/index.html";
        break;
      case "about":
        window.location.href = "/about.html";
        break;
      case "contact":
        window.location.href = "/contact.html";
        break;
      case "personal profile":
        window.location.href = "/profile.html";
        break;
      default:
        window.location.href = "/";
    }
  });
}

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const searchParam = searchQuery.value;
  if (!searchParam) return;
  const apiUrl = `https://www.google.com/search?q=${searchParam}`;

  window.open(apiUrl, "_blank");
});

searchQuery.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const searchTerm = searchQuery.value;
    if (!searchTerm) return;

    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}`;

    window.open(searchUrl, "_blank");
  }
});
