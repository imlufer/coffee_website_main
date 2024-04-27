let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

//ANIMACION
// Obtener todos los elementos que deseas animar
const about = document.querySelectorAll(".about");
const menu = document.querySelectorAll(".menu");
const products = document.querySelectorAll(".products");
const review = document.querySelectorAll(".review");
const contact = document.querySelectorAll(".contact");
const blogs = document.querySelectorAll(".blogs");

// Función para verificar la posición de los elementos y mostrarlos si están en el viewport
function showElementsOnScroll() {
  about.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
    if (elementTop < windowHeight / 2) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("visible");
    }
  });
  menu.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
    if (elementTop < windowHeight / 2) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("visible");
    }
  });
  products.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
    if (elementTop < windowHeight / 2) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("visible");
    }
  });
  review.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
    if (elementTop < windowHeight / 2) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("visible");
    }
  });
  contact.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
    if (elementTop < windowHeight / 2) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("visible");
    }
  });
  blogs.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
    if (elementTop < windowHeight / 2) {
      element.classList.add("visible");
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
      element.classList.remove("visible");
    }
  });
}

// Función para manejar la animación al hacer scroll
function handleScroll() {
  window.requestAnimationFrame(showElementsOnScroll);
}

// Agregar un listener para el evento scroll
window.addEventListener("scroll", handleScroll);

// Llamar a la función una vez al cargar la página para verificar el estado inicial
showElementsOnScroll();

//================================================================================================//
//CARRITO DE COMPRAS

document.addEventListener("DOMContentLoaded", () => {
  let cartCounter = 0; // Contador de elementos en el carrito
  const cartCounterSpan = document.getElementById("cart-counter");
  const menuItems = document.querySelectorAll(".box .btn");
  const cartItemsContainer = document.querySelector(".cart-items-container");
  const emptyCartMessage = document.querySelector(".empty-cart-message");
  const checkoutButton = document.querySelector(".cart-items-container .btn");

  const addToCart = (itemName, itemPrice, itemImage) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <span class="fas fa-times"></span>
        <img src="${itemImage}" alt="">
        <div class="content">
            <h3>${itemName}</h3>
            <div class="price">${itemPrice}/-</div>
        </div>
      `;
    cartItemsContainer.appendChild(cartItem);
    updateCartState();
    setupCartItemRemoveEvent(cartItem);
    // Actualizar contador
    cartCounter++;
    updateCartCounter();
  };
  // Función para actualizar el contador
  const updateCartCounter = () => {
    cartCounterSpan.textContent = cartCounter;
  };

  const updateCartState = () => {
    const cartItems = document.querySelectorAll(".cart-item");
    if (cartItems.length > 0) {
      emptyCartMessage.style.display = "none";
      checkoutButton.style.display = "block";
      // Insertar el botón de checkout al final del contenedor
      cartItemsContainer.appendChild(checkoutButton);
    } else {
      emptyCartMessage.style.display = "block";
      checkoutButton.style.display = "none";
    }
  };

  const setupCartItemRemoveEvent = (cartItem) => {
    const removeButton = cartItem.querySelector(".fa-times");
    removeButton.addEventListener("click", () => {
      cartItem.remove();
      updateCartState();
      cartCounter--; // Restar del contador al eliminar un elemento
      updateCartCounter(); // Actualizar contador
    });
  };

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      event.preventDefault();
      const box = menuItem.closest(".box");
      const itemName = box.querySelector("h3").textContent;
      const itemPrice = box.querySelector(".price").textContent;
      const itemImage = box.querySelector("img").src;
      addToCart(itemName, itemPrice, itemImage);
    });
  });

  checkoutButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Implementa la lógica de checkout aquí.");
    // Implementa la lógica de checkout (enviar datos al servidor, etc.).
  });
});

// Función para configurar evento de clic para el botón de checkout
const checkoutButton = document.querySelector(".cart-items-container .btn");
checkoutButton.addEventListener("click", checkoutNow);

// Función para realizar el checkout
function checkoutNow(event) {
  event.preventDefault();
  const cartItems = document.querySelectorAll(".cart-item");

  // Recorrer cada elemento del carrito y obtener información relevante
  cartItems.forEach((cartItem, index) => {
    const itemName = cartItem.querySelector("h3").textContent;
    const itemPrice = cartItem.querySelector(".price").textContent;
    console.log(`Item ${index + 1}: ${itemName} - Price: ${itemPrice}`);
    // Aquí puedes realizar acciones adicionales como enviar datos al servidor
  });

  // Redirigir a una página de confirmación u otra acción de checkout
  // Por ejemplo, redireccionar a una página de gracias por su compra
  window.location.href = "checkout_confirmation.html";
}
