document.addEventListener("DOMContentLoaded", function () {
  const editContainer = document.querySelector(".edit_producter_section");

  if (editContainer) {
    fetch("/frontend/public/views/components/edit-producter.html")
      .then(response => response.text())
      .then(data => {
        editContainer.innerHTML = data;

        const toggleBtn = document.getElementById("toggleStoreBtn");

        if (toggleBtn) {
          toggleBtn.addEventListener("click", () => {
            const isActive = toggleBtn.dataset.active === "true";

            if (isActive) {
              toggleBtn.textContent = "Habilitar tienda";
              toggleBtn.classList.remove("user-list__action-btn--disable");
              toggleBtn.classList.add("user-list__action-btn--enable");
              toggleBtn.dataset.active = "false";
            } else {
              toggleBtn.textContent = "Deshabilitar tienda";
              toggleBtn.classList.remove("user-list__action-btn--enable");
              toggleBtn.classList.add("user-list__action-btn--disable");
              toggleBtn.dataset.active = "true";
            }
          });
        }
      })
      .catch(error => console.error("Error al cargar Edit Producter:", error));
  }
});
