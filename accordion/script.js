document.querySelectorAll(".header").forEach(btn => {
  btn.onclick = () => {
    btn.parentElement.classList.toggle("open");
  };
});
