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
const newEntryArticle = document.getElementById("newEntry-article--container");

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
      case "new":
        window.location.href = "/new.html";
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

const companies = [
  "Apple",
  "Microsoft",
  "Amazon",
  "Alphabet",
  "Facebook",
  "Alibaba",
  "Tencent",
  "Tesla",
  "Johnson & Johnson",
  "JPMorgan Chase",
  "Berkshire Hathaway",
  "Visa",
  "Walmart",
  "Procter & Gamble",
  "Samsung",
  "Toyota",
  "Coca-Cola",
  "Pfizer",
  "Nestlé",
  "Exxon Mobil",
  "Walt Disney",
  "AT&T",
  "Netflix",
  "Adobe",
  "General Electric",
  "Cisco",
  "Mastercard",
  "McDonald's",
  "IBM",
  "PepsiCo",
];

let randNewsList = [];
const randomCompany = function () {
  const randomIndex = Math.floor(Math.random() * companies.length);
  return companies[randomIndex];
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options).toUpperCase();
}

const fetchData = async function (company) {
  try {
    // const url = `https://newsapi.org/v2/everything?q=${company}&from=2024-02-10&to=2024-02-10&sortBy=popularity&apiKey=6e9e643cb4764c3898791e4bb1d66336`;
    const req = new Request(url);
    const response = await fetch(req);
    if (!response.ok) {
      throw new Error("Unable to fetch the data");
    }
    const data = await response.json();
    data.articles.company = company;
    return data.articles;
  } catch (error) {
    // console.error("Oops! problem occurs while fetching the data: ", error);
  }
};

const displayNews = function (list) {
  const newsArticleWrapper = document.getElementById("news-article--list");
  newsArticleWrapper.innerHTML = "";
  if (list.length === 0) {
    const defaultHTML = `<pre>
     <strong>This message only display with two major possibility:</strong>
     <h2>The Problems:</h2>
     <strong>&#8226;</strong> <code>No internet connection.</code>
     <strong>&#8226;</strong> <code>The Api key duration had expired.</code>
     <h2>The Solutions:</h2>
     <strong>&#8226; </strong> <code>Connected to the internet</code>
     <strong>&#8226;</strong> <code>The api key was registered for development purposes: 
     1) Wait for 24hours for it be renew if you have not reach the monthly lifespan.
     2) Or visit this site <a class="newsapi" target="_blank" href="https://newsapi.org">newsapi.org</a> to register for new api key.
     3) With the new api key obtain change the old api key in the url params found in the entry.js 
     file if you happen to have access to the source code.</code>
     </pre>`;

    newsArticleWrapper.insertAdjacentHTML("afterbegin", defaultHTML);

    document.querySelector(".newsapi").addEventListener("click", (e) => {
      e.preventDefault();
      window.open("https://newsapi.org", "_blank");
    });
  }
  // console.log("LIST: ", list.length);

  list.forEach((list, i) => {
    const date = formatDate(list.publishedAt);
    const html = `<li>
      <p>${date}</p>
      <h4>${list.title}</h4>
      <p>${list.description}</p>
      <a target="_blank" href=${list.url}>click for detail news</a>
      <p>Author:${list.author}</p>
      </li>`;

    newsArticleWrapper.insertAdjacentHTML("afterbegin", html);
  });
};

for (let i = 0; i < 5; i++) {
  fetchData(randomCompany()).then((data) => {
    if (data) {
      const randNews = data[Math.floor(Math.random() * data.length)];

      randNewsList.push(randNews);
    }
  });
}

(function loadRandomNews() {
  const newsArticleWrapper = document.getElementById("news-article--list");
  newsArticleWrapper.innerHTML = "";
  newsArticleWrapper.insertAdjacentHTML(
    "afterbegin",
    `<div class="loader"></div>`
  );
  setTimeout(() => {
    displayNews(randNewsList);
  }, 5000);
})();

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const localStorageData = localStorage.getItem("newEntry");
  if (localStorageData) {
    const jsonData = JSON.parse(localStorageData);
    console.log(jsonData);
  }
});
