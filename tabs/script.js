document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab,.panel")
      .forEach(el => el.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.panel)
      .classList.add("active");
  };
});
