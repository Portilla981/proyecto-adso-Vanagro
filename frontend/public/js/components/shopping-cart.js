// Productos simulados
const products = [
  {
    name: "Banano",
    measure: "Kg",
    price: 7800,
    quantity: 1,
    store: "Finca La Valentina",
    image: "/frontend/public/assets/banano.png"
  },
  {
    name: "Carne de res posta",
    measure: "Kg",
    price: 34200,
    quantity: 1,
    store: "Finca Las Bovinas",
    image: "/frontend/public/assets/posta.png"
  },
  {
    name: "Café",
    measure: "L",
    price: 21600,
    quantity: 1,
    store: "Finca La Natalia",
    image: "/frontend/public/assets/cafe.jpg"
  }
];

// Renderizar productos
const cartContainer = document.getElementById("cart-products");
const totalElement = document.getElementById("cart-total");

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  products.forEach((product, index) => {
    const subtotal = product.price * product.quantity;
    total += subtotal;

    const productCard = document.createElement("article");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-card__image">
      <h3 class="product-card__title">${product.name}</h3>
      <p class="product-card__measure">${product.measure}</p>
      <div class="product-card__quantity">
        <button class="product-card__btn product-card__btn--decrease">-</button>
        <span class="product-card__count">${product.quantity}</span>
        <button class="product-card__btn product-card__btn--increase">+</button>
      </div>
      <p class="product-card__price">$${subtotal.toLocaleString()}</p>
      <p class="product-card__store">${product.store}</p>
      <button class="product-card__remove">🗑</button>
    `;

    // Eventos de botones
    productCard.querySelector(".product-card__btn--decrease").addEventListener("click", () => {
      if (product.quantity > 1) {
        product.quantity--;
        renderCart();
      }
    });

    productCard.querySelector(".product-card__btn--increase").addEventListener("click", () => {
      product.quantity++;
      renderCart();
    });

    productCard.querySelector(".product-card__remove").addEventListener("click", () => {
      products.splice(index, 1);
      renderCart();
    });

    cartContainer.appendChild(productCard);
  });

  totalElement.textContent = `$${total.toLocaleString()}`;
}

renderCart();
