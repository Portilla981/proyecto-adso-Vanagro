let users = [];

// Cargar componente y después los datos
fetch("components/list-users.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("user-list-container").innerHTML = html;
    loadUsers(); // aquí llamamos a la carga desde JSON
  });

// Función para cargar usuarios desde JSON
function loadUsers() {
  fetch("/frontend/public/data/list-users.json")
    .then(res => res.json())
    .then(data => {
      users = data;
      renderUsers();
    })
    .catch(err => console.error("Error cargando usuarios:", err));
}

function renderUsers() {
  const tbody = document.getElementById("user-table-body");
  tbody.innerHTML = "";

  users.forEach(user => {
    const tr = document.createElement("tr");
    tr.classList.add("user-list__row");

    tr.innerHTML = `
      <td class="user-list__cell" data-label="ID">${user.id}</td>
      <td class="user-list__cell" data-label="Nombre">${user.nombre}</td>
      <td class="user-list__cell" data-label="Correo">${user.correo}</td>
      <td class="user-list__cell" data-label="Rol">${user.rol}</td>
      <td class="user-list__cell" data-label="Acciones">
        <button 
          class="user-list__action-btn ${user.activo ? "user-list__action-btn--disable" : "user-list__action-btn--enable"}" 
          onclick="toggleUser(${user.id})">
          ${user.activo ? "Deshabilitar" : "Habilitar"}
        </button>
      </td>
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