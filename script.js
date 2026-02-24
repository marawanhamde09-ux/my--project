const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const loveImg = document.getElementById("loveImg");

// زر No يهرب في كل الصفحة 😈
noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// لما تضغط Yes تظهر الصورة ❤️
yesBtn.addEventListener("click", () => {
  loveImg.style.display = "block";
});
