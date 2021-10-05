const toggleButton = document.getElementsByClassName("toggle-button")[0];
console.log(toggleButton);
const links = document.getElementsByClassName("links")[0].childNodes[1];
console.log(links);
toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
});
