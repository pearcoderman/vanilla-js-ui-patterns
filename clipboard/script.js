document.querySelectorAll("[data-copy]").forEach(btn => {
  btn.onclick = async () => {
    await navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent = "Copied!";
  };
});
