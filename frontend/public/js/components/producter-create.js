document.addEventListener("DOMContentLoaded", function () {
    const producterContainer = document.querySelector(".form-register__producter");
    
    if (producterContainer) {
        fetch("/frontend/public/views/components/create-producter.html")
            .then(response => response.text())
            .then(data => {
                producterContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar registro de productores:", error));
    }
});