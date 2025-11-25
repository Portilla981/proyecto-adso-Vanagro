document.addEventListener("DOMContentLoaded", function () {
  const editContainer = document.querySelector(".edit-password");
         
  if (editContainer) {
    fetch("/frontend/public/views/components/password_change.html")
      .then(response => response.text())
      .then(data => {
        editContainer.innerHTML = data;
      })
      .catch(error => console.error("Error al cargar edicion de password:", error));
  }
});