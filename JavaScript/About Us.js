const moreBtn = document.getElementById("moreBtn");
const moreText = document.getElementById("moreText");

moreBtn.addEventListener("click", function () {
  moreText.classList.toggle("hidden");

  if (moreText.classList.contains("hidden")) {
    moreBtn.textContent = "Learn More";
  } else {
    moreBtn.textContent = "Show Less";
  }
}
);