document.addEventListener("DOMContentLoaded", function () {
  const contactContainer = document.querySelector(".contact__section");
  // Cargar el contenido del archivo contactenos.html en el contenedor
  // Verifica si el contenedor existe antes de intentar cargar el contenido
  // Esto previene errores si el contenedor no está presente en la página
  // y asegura que el script no falle si se carga en una página diferente
  // o si el contenedor no está definido en el HTML.
  // Esto es útil para mantener la modularidad y reutilización del código.
  // Además, permite que el contenido se cargue dinámicamente sin necesidad de recargar la  página.       
  if (contactContainer) {
    fetch("/frontend/public/views/components/contactenos.html")
      .then(response => response.text())
      .then(data => {
        contactContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar cards:", error));
  }
});