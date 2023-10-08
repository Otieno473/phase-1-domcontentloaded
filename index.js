const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  log.textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";
  setTimeout(() => {
    window.location.reload(true);
  }, 200);
});

window.addEventListener("This is really cool", (event) => {
  log.textContent += "This is really cool\n";
});

document.addEventListener("JavaScript is so cool. It lets me add text to my page programmatically.", (event) => {
  log.textContent += `JavaScript is so cool. It lets me add text to my page programmatically.: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += "DOMContentLoaded\n";
});