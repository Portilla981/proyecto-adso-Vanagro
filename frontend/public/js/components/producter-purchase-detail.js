document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("purchase-details-container");

    fetch("/frontend/public/views/components/producter-purchase-detail.html")
        .then(res => res.text())
        .then(html => {
            container.innerHTML = html;
        })
        .catch(err => console.error("Error cargando el componente:", err));
});
