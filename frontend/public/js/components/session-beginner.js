document.addEventListener("DOMContentLoaded", function(){
    
    const sesionElement = document.querySelector(".session-container_beginer");    
    if(sesionElement){        
        fetch('/frontend/public/views/components/session-beginner.html')    
        .then(response => response.text())    
        .then(data => {sesionElement.innerHTML = data;})    
        .catch(error => console.error("Error de carga el hero", error))           
    }
});