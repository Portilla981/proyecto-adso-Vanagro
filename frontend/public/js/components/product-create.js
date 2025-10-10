// document.addEventListener("DOMContentLoaded", function () {
//   const createContainer = document.querySelector(".product-create__container");
//   if (createContainer) {
//     fetch("/frontend/public/views/components/product-create.html")
//       .then(response => response.text())
//       .then(data => {
//         createContainer.innerHTML = data;
//       })
//       .catch(error => console.error("Error al cargar Create Product", error));
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const createContainer = document.querySelector(".product-create__container");
  
  if (createContainer) {
    fetch("/frontend/public/views/components/product-create.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el componente product-create.html");
        }
        return response.text();
      })
      .then((html) => {
        createContainer.innerHTML = html;
      })
      .catch((error) => console.error(error));
  }
});


// --- Previsualización de imágenes ---
// document.addEventListener("DOMContentLoaded", () => {
//   const input = document.getElementById("product-images");
//   const preview = document.getElementById("image-preview");
//   const uploadLabel = document.querySelector(".product-form__image--upload span");

//   input.addEventListener("change", () => {
//     preview.innerHTML = "";

//     if (input.files.length > 0) {
//       uploadLabel.textContent = "Agregar más fotos";
//     } else {
//       uploadLabel.textContent = "Subir fotos del producto";
//     }

//     [...input.files].forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const img = document.createElement("img");
//         img.src = e.target.result;
//         img.classList.add("preview-img");
//         preview.appendChild(img);
//       };
//       reader.readAsDataURL(file);
//     });
//   });
// });

