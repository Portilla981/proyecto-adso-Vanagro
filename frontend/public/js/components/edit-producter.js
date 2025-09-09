document.addEventListener("DOMContentLoaded", function () {
  const editContainer = document.querySelector(".edit_producter_section");
  // Cargar el contenido del archivo edit-producter.html en el contenedor
  // Verifica si el contenedor existe antes de intentar cargar el contenido
  // Esto previene errores si el contenedor no está presente en la página
  // y asegura que el script no falle si se carga en una página diferente
  // o si el contenedor no está definido en el HTML.
  // Esto es útil para mantener la modularidad y reutilización del código.
  // Además, permite que el contenido se cargue dinámicamente sin necesidad de recargar la  página.       
  if (editContainer) {
    fetch("/frontend/public/views/components/edit-producter.html")
      .then(response => response.text())
      .then(data => {
        editContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar cards:", error));
  }
});