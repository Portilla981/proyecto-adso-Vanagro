document.addEventListener("DOMContentLoaded", function () {
  const createContainer = document.querySelector(".product-create__container");
  if (createContainer) {
    fetch("/frontend/public/views/components/product-create.html")
      .then(response => response.text())
      .then(data => {
        createContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar Create Product", error));
  }
});
