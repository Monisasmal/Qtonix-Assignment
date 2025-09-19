const words = ["My Flow", "Support Business", "Marketing", "Sales"];
let index = 0;
const changingText = document.getElementById("changing-text");
setInterval(()=>{
  index = (index+1)%words.length;
  changingText.textContent = words[index];
},2000);

document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".top-banner").style.display = "none";
});

// const hamburger = document.querySelector(".hamburger");
// const mobileMenu = document.querySelector(".mobile-menu");

// hamburger.addEventListener("click", () => {
//     mobileMenu.style.display === "flex" ? "none" : "flex";
// });