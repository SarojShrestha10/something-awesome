const htmlBody = document.querySelector("body");
const modeButtonText = document.querySelector(".mode-button");
document.querySelector(".mode-button").onclick = changeMode;

function changeMode() {
  if (htmlBody.style.backgroundColor === "white") {
    htmlBody.style.backgroundColor = "black";
    modeButtonText.innerText = "Turn on Light Mode";
  } else {
    htmlBody.style.backgroundColor = "white";
    modeButtonText.innerText = "Turn on Dark Mode";
  }
}
