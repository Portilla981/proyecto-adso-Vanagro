document.addEventListener("DOMContentLoaded", () => {
    const detailsContainer = document.querySelector(".product-details__container");
    if (detailsContainer) {
        fetch("/frontend/public/views/components/product-details.html")
        .then(res => res.text())
        .then(html => {
            detailsContainer.innerHTML = html;
        })
        .catch(err => console.error("Error al cargar los detalles del producto:", err));
    }
});
