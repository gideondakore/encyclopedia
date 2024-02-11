import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const markdownInput = document.getElementById("markdown");
const outputDiv = document.getElementById("output");

markdownInput.addEventListener("input", function (e) {
  const markdownText = e.target.value;

  const htmlText = marked(markdownText);

  outputDiv.innerHTML = htmlText;
});
