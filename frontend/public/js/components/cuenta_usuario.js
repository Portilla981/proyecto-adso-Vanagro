document.addEventListener("DOMContentLoaded", function () {
    const cuentaContainer = document.querySelector(".user-registred");
    
    if (cuentaContainer) {
        fetch("/frontend/public/views/components/cuenta-user.html")
            .then(response => response.text())
            .then(data => {
                cuentaContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar la cuenta del usuarios:", error));
    }
});