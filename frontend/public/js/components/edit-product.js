document.addEventListener("DOMContentLoaded", function () {
  const editContainer = document.querySelector(".product-edit__container");
  if (editContainer) {
    fetch("/frontend/public/views/components/product-edit.html")
      .then(response => response.text())
      .then(data => {
        editContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar Edit Product", error));
  }
});