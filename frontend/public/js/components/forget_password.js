document.addEventListener("DOMContentLoaded", () => {
    const detailsContainer = document.querySelector(".forget-container");
    if (detailsContainer) {
        fetch("/frontend/public/views/components/forget-password.html")
        .then(res => res.text())
        .then(html => {
            detailsContainer.innerHTML = html;
        })
        .catch(err => console.error("Error al cargar los detalles del producto:", err));
    }
});
