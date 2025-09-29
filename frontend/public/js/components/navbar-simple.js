document.addEventListener("DOMContentLoaded", function () {
    const navbarLoggedContainer = document.querySelector(".navbar-simple");
    
    if (navbarLoggedContainer) {
        fetch("/frontend/public/views/components/navbar-simple.html")
        .then(response => response.text())
        .then(html => {
            navbarLoggedContainer.innerHTML = html;
        })
        .catch(error => console.error("Error al cargar el navbar profile", error)); 
    }
});
