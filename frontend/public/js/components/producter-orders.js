let orders = [];

// Cargar componente y después los datos
fetch("components/producter-orders.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("list-orders-container").innerHTML = html;
    loadOrders(); // aquí llamamos a la carga desde JSON
  });

// Función para cargar usuarios desde JSON
function loadOrders() {
  fetch("/frontend/public/data/producter-orders.json")
    .then(res => res.json())
    .then(data => {
      orders = data;
      renderOrders();
    })
    .catch(err => console.error("Error cargando pedidos:", err));
}

function renderOrders() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = "";

  orders.forEach(order => {
    const tr = document.createElement("tr");
    tr.classList.add("user-list__row");

    // ✅ Ajuste: añadimos data-label a cada celda
    tr.innerHTML = `
      <td class="user-list__cell" data-label="Id Pedido">${order.id}</td>
      <td class="user-list__cell" data-label="Fecha Pedido">${order.fecha}</td>
      <td class="user-list__cell" data-label="Nombre Producto">${order.nombre}</td>
      <td class="user-list__cell" data-label="Valor">${order.valor}</td>
      <td class="user-list__cell" data-label="Acciones">
        <button 
          class="user-list__action-btn ${order.estado ? "user-list__action-btn--disable" : "user-list__action-btn--enable"}" 
          onclick="toggleOrder('${order.id}')">
          ${order.estado ? "Cancelar" : "Habilitar"}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleOrder(id) {
  const order = orders.find(u => u.id === id);
  if (order) {
    order.estado = !order.estado;
    renderOrders();
  }
}
