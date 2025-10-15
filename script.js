const webList = ["PigGame", "MyPortfolio", "Calender", "RPSGame", "ToDoList", "TicTacToe", "Youtube", "DrumKit", "Calculator", "Clock", "DigitalClock", "Temperature"]

const main = document.querySelector(".main")
const list = document.querySelector(".list")
const addBtn = document.querySelector(".add-btn");
const overlay = document.querySelector(".overlay");
const developer = document.querySelector(".developer");
const closeBtn = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");
const popupWindow = document.querySelector(".popup-window");
const password = document.querySelector(".password");
const websiteName = document.querySelector(".website-name");

const addPopup = function () {
  overlay.classList.remove("hidden");
  popupWindow.classList.remove("hidden");
}
const closePopup = function () {
  overlay.classList.add("hidden");
  popupWindow.classList.add("hidden");
  developer.classList.add("hidden");
  resetPopup()

}
const resetPopup = function () {
  websiteName.value = "";
  password.value = "";
}
function renderList() {
  webList.forEach((webname, index) => {
    const box = document.createElement("a");
    box.classList.add("box");
    box.href = `https://rjt06.github.io/${webname}`;
    box.innerText = webname;
    list.appendChild(box);
  })
}

function resetList() {
  list.innerHTML = "";
}
renderList();
addBtn.addEventListener("click", addPopup);
closeBtn.addEventListener("click", closePopup);

submitBtn.addEventListener("click", () => {
  if (password.value === "aman113114") {
    console.log("Correct password");
    webList.unshift(websiteName.value);
    closePopup();
    resetList();
    renderList();
  } else {
    console.log("Incorrect password")
    password.value = "";
    developer.classList.remove("hidden");
  }
})


