
  document.addEventListener("DOMContentLoaded", function () {
  const msjContainer = document.querySelector(".product-details__container");
  if (msjContainer) {
    fetch("/frontend/public/views/components/product-details_user.html")
      .then(response => response.text())
      .then(data => {
        msjContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar los detalles del producto:", error));
  }
});
