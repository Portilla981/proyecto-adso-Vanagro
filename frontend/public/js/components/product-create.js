document.addEventListener("DOMContentLoaded", () => {
  const createContainer = document.querySelector(".product-create__container");
  
  if (createContainer) {
    fetch("/frontend/public/views/components/product-create.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el componente product-create.html");
        }
        return response.text();
      })
      .then((html) => {
        createContainer.innerHTML = html;
      })
      .catch((error) => console.error(error));
  }
});