const infoElement = document.getElementById("info");
infoElement.style.fontFamily = "Kaph, cursive";
const socialMediaBtn = document.getElementById("socialMediaBtn");
const socialMediaPanel = document.createElement("div");
socialMediaPanel.id = "socialMediaPanel";
socialMediaPanel.className = "panel";
socialMediaPanel.innerHTML = `
  <button class="socialMediaBtn">Instagram</button>
  <button class="socialMediaBtn">Twitter</button>
  <button class="socialMediaBtn">Youtube</button>
`;
socialMediaBtn.appendChild(socialMediaPanel);

socialMediaPanel.style.position = "absolute";
socialMediaPanel.style.top = "100%";
socialMediaPanel.style.display = "none";

socialMediaBtn.addEventListener("click", () => {
  if (socialMediaPanel.style.display === "none") {
    socialMediaPanel.style.display = "block";
  } else {
    socialMediaPanel.style.display = "none";
  }
});
