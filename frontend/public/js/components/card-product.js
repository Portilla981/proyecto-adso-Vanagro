
export async function loadCards(containerSelector, cardIds = []) {
    // obtenemos el contenedor del dom
    const containerProd = document.querySelector(containerSelector);
    // condicinal de la existencia de la constante en el dom, si no se retorna
    if(!containerProd)return;

    try{
        // intentar, await espere
        const[templeateRest, datosRes] = await Promise.all([
            
            fetch("/frontend/public/views/components/cards-home.html"),
            fetch("/frontend/public/data/productos.json"),

        ]);

        //conertir las repuestas a texto y json
        const template = await templeateRest.text();
        const cards = await datosRes.json();

        // Filtramos las cards si se proporcina los IDs especifcicos
        const filteredCards = cardIds.length? cards.filter(card => cardIds.includes(card.id)) // Solo las que estan en el arreglo 
        :cards; // si no hay filtros utilice todas

        filteredCards.forEach(card => {

            let html = template
            .replace("{{title}}",card.title)
            .replace("{{imgProd}}",card.imgProd)
            .replace("{{breve}}",card.breve)
            .replace("{{precio}}",card.precio)

            containerProd.innerHTML += html;
            
        });


    }
    catch (error){
        console.error("error cargando las cards")
    }
    
}