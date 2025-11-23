let products = [];

// Cargar componente y después los datos
fetch("components/list-buys-orders.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("product-list-container").innerHTML = html;
    loadUsers(); // aquí llamamos a la carga desde JSON
  });

// Función para cargar usuarios desde JSON
function loadUsers() {
  fetch("/frontend/public/data/list-orders.json")
    .then(res => res.json())
    .then(data => {
      products = data;
      renderUsers();
    })
    .catch(err => console.error("Error cargando las ordenes:", err));
}

function renderUsers() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = "";

  products.forEach(user => {
    const tr = document.createElement("tr");
    tr.classList.add("user-list__row");


    tr.innerHTML = `
      <td class="user-list__cell" data-label="ID Compra">${user.id}</td>
      <td class="user-list__cell" data-label="Fecha">${user.fecha}</td>
      <td class="user-list__cell" data-label="Producto">${user.producto}</td>
      <td class="user-list__cell" data-label="Precio">${user.precio}</td>
      <td class="user-list__cell" data-label="Estado">${user.estado}</td>
      <td class="user-list__cell" data-label="Acciones">
        <a href="#details">
          <button class="buttons__action--primary">Detalles</button>
        </a>

        
      </td>
      <hr class="user-list__hr">
    `;
    tbody.appendChild(tr);
  });
}

function toggleUser(id) {
  const user = users.find(u => u.id === id);
  if (user) {
    user.activo = !user.activo;
    renderUsers();
  }
}
