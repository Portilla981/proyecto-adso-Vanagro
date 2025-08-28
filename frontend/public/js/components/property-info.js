async function cargarFincas() {
  const fincas = [
    {
      nombre: "Finca El Atardecer",
      encargado: "José Guillermo Ocampo López",
      imagen: "/frontend/public/assets/finca.jpeg"
    },
    {
      nombre: "Finca La Valentina",
      encargado: "Valentina Toro Peña",
      imagen: "/frontend/public/assets/finca7.jpg"
    },
    {
      nombre: "Finca La Natalia",
      encargado: "Angelly Natalia Agudelo Idárraga",
      imagen: "/frontend/public/assets/finca2.jpg"
    },
    {
      nombre: "Finca Portones de David",
      encargado: "Johan David Portilla Zambrano",
      imagen: "/frontend/public/assets/finca6.jpg"
    },
    {
      nombre: "Finca Las Bovinas",
      encargado: "Julio Armando Cifuentes Correa",
      imagen: "/frontend/public/assets/finca5.jpg"
    },
    {
      nombre: "Finca La Montañera",
      encargado: "María Antonia Restrepo Palacios",
      imagen: "/frontend/public/assets/finca3.jpg"
    }
  ];

  const container = document.getElementById("fincas-container");

  for (const finca of fincas) {
    const response = await fetch("./components/property-info.html");
    const template = await response.text();

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = template;

    const card = tempDiv.querySelector(".card-property");
    card.querySelector(".card__image").src = finca.imagen;
    card.querySelector(".card__title").textContent = finca.nombre;
    card.querySelector(".card__owner").textContent = finca.encargado;

    container.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", cargarFincas);
