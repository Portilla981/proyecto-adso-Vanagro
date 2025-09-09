document.addEventListener("DOMContentLoaded", function () {
  const msjContainer = document.querySelector(".msj-confirm-container");
  if (msjContainer) {
    fetch("/frontend/public/views/components/confim-msj.html")
      .then(response => response.text())
      .then(data => {
        msjContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar el mensaje emergente:", error));
  }
});