document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons-container");

  if (buttonsContainer) {
    fetch("/frontend/public/views/components/buttons.html")
      .then(response => response.text())
      .then(html => {
        buttonsContainer.innerHTML = html; // 👈 SOLO afecta a buttons
      })
      .catch(error => console.error("Error al cargar los botones:", error));
  }
});
