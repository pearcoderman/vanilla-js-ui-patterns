const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.onclick = e => {
  e.stopPropagation();
  menu.classList.toggle("open");
};

document.onclick = () => menu.classList.remove("open");
