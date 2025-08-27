document.addEventListener("DOMContentLoaded", function () {
    const registertContainer = document.querySelector(".form_regisrer_usuario");
    
    if (registertContainer) {
        fetch("/frontend/public/views/components/form_registro.html")
            .then(response => response.text())
            .then(data => {
                registertContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar registro de usuarios:", error));
    }
});