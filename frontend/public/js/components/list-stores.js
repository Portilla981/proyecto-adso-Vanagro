let stores = [];

// Cargar componente y después los datos
fetch("components/list-stores.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("user-list-container").innerHTML = html;
    loadStores(); // aquí llamamos a la carga desde JSON
  });

// Función para cargar usuarios desde JSON
function loadStores() {
  fetch("/frontend/public/data/list-stores.json")
    .then(res => res.json())
    .then(data => {
      stores = data;
      renderStores();
    })
    .catch(err => console.error("Error cargando tiendas:", err));
}

function renderStores() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = "";

  stores.forEach(store => {
    const tr = document.createElement("tr");
    tr.classList.add("user-list__row");

    tr.innerHTML = `
      <td class="user-list__cell" data-label="ID">${store.id}</td>
      <td class="user-list__cell" data-label="Nombre">${store.nombre}</td>
      <td class="user-list__cell" data-label="Propietario">${store.propietario}</td>
      <td class="user-list__cell" data-label="Ubicación">${store.ubicacion}</td>
      <td class="user-list__cell" data-label="Acciones">
        <button 
          class="user-list__action-btn ${store.activo ? "user-list__action-btn--disable" : "user-list__action-btn--enable"}" 
          onclick="toggleStore(${store.id})">
          ${store.activo ? "Deshabilitar" : "Habilitar"}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleStore(id) {
  const store = stores.find(u => u.id === id);
  if (store) {
    store.activo = !store.activo;
    renderStores();
  }
}
