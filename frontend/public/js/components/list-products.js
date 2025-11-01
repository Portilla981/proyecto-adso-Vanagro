let products = [];

// Cargar componente y después los datos
fetch("components/list-products.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("list-products-container").innerHTML = html;
    loadProducts(); // aquí llamamos a la carga desde JSON
  });

// Función para cargar usuarios desde JSON
function loadProducts() {
  fetch("/frontend/public/data/list-products.json")
    .then(res => res.json())
    .then(data => {
      products = data;
      renderProducts();
    })
    .catch(err => console.error("Error cargando productos:", err));
}

function renderProducts() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = "";

  products.forEach(product => {
    const tr = document.createElement("tr");
    tr.classList.add("user-list__row");

    // ✅ Ajuste: añadimos data-label a cada celda
    tr.innerHTML = `
      <td class="user-list__cell" data-label="ID">${product.id}</td>
      <td class="user-list__cell" data-label="Nombre">${product.nombre}</td>
      <td class="user-list__cell" data-label="U. medida">${product.unidad_medida}</td>
      <td class="user-list__cell" data-label="precio">${product.precio}</td>
      <td class="user-list__cell" data-label="stock">${product.stock}</td>
      <td class="user-list__cell" data-label="Acciones">
        <button 
          class="user-list__action-btn ${product.estado ? "user-list__action-btn--disable" : "user-list__action-btn--enable"}" 
          onclick="toggleProduct('${product.id}')">
          ${product.estado ? "Deshabilitar" : "Habilitar"}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function toggleProduct(id) {
  const product = products.find(u => u.id === id);
  if (product) {
    product.estado = !product.estado;
    renderProducts();
  }
}
