document.addEventListener("DOMContentLoaded", function () {
    const navbarLoggedContainer = document.querySelector(".navbar-simple");
    
    if (navbarLoggedContainer) {
        fetch("/frontend/public/views/components/navbar-logged-2.html")
        .then(response => response.text())
        .then(html => {
            navbarLoggedContainer.innerHTML = html;
        })
        .catch(error => console.error("Error al cargar el navbar logged in", error)); 
    }
});
