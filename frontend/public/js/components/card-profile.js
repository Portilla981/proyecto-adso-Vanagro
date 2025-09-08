export async function loadCards(containerSelector, cardIds = []) {
    const containerProd = document.querySelector(containerSelector);
    if (!containerProd) return;

    try {
        const [templateRes, dataRes] = await Promise.all([
            fetch("/frontend/public/views/components/card-profile.html"),
            fetch("/frontend/public/data/card-profile.json")
        ]);

        const template = await templateRes.text();
        const cards = await dataRes.json();

        const iconMap = {
            "ver-productos": "visibility",
            "compras-pedidos": "shopping_bag",
            "ver-eventos": "calendar_month",
            "reportes": "description",
            "ajustes": "settings"
        };

        const filteredCards = cardIds.length
            ? cards.filter(card => cardIds.includes(card.id))
            : cards;

        filteredCards.forEach(card => {
            let html = template
                .replace("{{title}}", card.title)

            containerProd.innerHTML += html;
        });

    } catch (error) {
        console.error("Error cargando las cards:", error);
    }
}