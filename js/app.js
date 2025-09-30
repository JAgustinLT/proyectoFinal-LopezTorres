let cart = [];

// Cargar planes desde el JSON
fetch("planes.json")
  .then(res => res.json())
  .then(data => {
    renderPlans(data);
  })
  .catch(err => console.error("Error cargando planes:", err));

function renderPlans(planes) {
  const container = document.getElementById("planes-container");
  container.innerHTML = "";

  planes.forEach(plan => {
    const div = document.createElement("div");
    div.classList.add("plan-card");
    div.innerHTML = `
      <h3>${plan.name}</h3>
      <p>Precio: $${plan.price}</p>
      <button class="btn" onclick="addToCart(${plan.id}, '${plan.name}', ${plan.price})">Agregar</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id, name, price) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  renderCart();

  Swal.fire({
    icon: "success",
    title: "Agregado al carrito",
    text: `${name} fue agregado correctamente.`
  });
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
    cartItems.appendChild(li);

    total += item.price * item.quantity;
  });

  document.getElementById("cart-total").textContent = total;
}
