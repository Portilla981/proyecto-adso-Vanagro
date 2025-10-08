// Cargar modal desde componente
fetch("components/payment.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("payment-container").innerHTML = html;

    const modal = document.querySelector(".payment-modal");
    const openBtn = document.getElementById("open-payment");
    const closeBtn = document.getElementById("close-payment");
    const overlay = modal.querySelector(".payment-modal__overlay");

    if (openBtn) {
      openBtn.addEventListener("click", () => {
        modal.classList.add("active");
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }

    if (overlay) {
      overlay.addEventListener("click", () => {
        modal.classList.remove("active");
      });
    }
  });
