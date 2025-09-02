document.addEventListener("DOMContentLoaded", function () {
    const navbarLoggedContainer = document.querySelector(".navbar-logged-in-container");
    
    if (navbarLoggedContainer) {
        fetch("/frontend/public/views/components/navbar-logged-in.html")
        .then(response => response.text())
        .then(html => {
            navbarLoggedContainer.innerHTML = html;
        })
        .catch(error => console.error("Error al cargar el navbar logged in", error)); 
    }
});
