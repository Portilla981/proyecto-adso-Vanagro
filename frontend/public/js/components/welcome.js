document.addEventListener("DOMContentLoaded", function () {
  const welcomeContainer = document.querySelector(".welcome-container");
  if (welcomeContainer) {
    fetch("/frontend/public/views/components/welcome-begin.html")
      .then(response => response.text())
      .then(data => {
        welcomeContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar welcome", error));
  }
});