const modal = document.getElementById("modal");

document.getElementById("open").onclick = () =>
  modal.classList.add("open");

document.getElementById("close").onclick = () =>
  modal.classList.remove("open");

modal.onclick = e => {
  if (e.target === modal) modal.classList.remove("open");
};
