document.addEventListener("DOMContentLoaded", function () {
    const cuentaContainer = document.querySelector(".user-register");
    
    if (cuentaContainer) {
        fetch("/frontend/public/views/components/user-account.html")
            .then(response => response.text())
            .then(data => {
                cuentaContainer.innerHTML = data;
            })
            .catch(error => console.error("Error al cargar la cuenta del usuarios:", error));
    }
});