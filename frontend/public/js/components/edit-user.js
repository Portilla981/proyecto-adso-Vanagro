document.addEventListener("DOMContentLoaded", function () {
    const registertContainer = document.querySelector(".form-register__user");
    
    if (registertContainer) {
        fetch("/frontend/public/views/components/form-edit-user.html")
            .then(response => response.text())
            .then(data => {
                registertContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar registro de usuarios:", error));
    }
});