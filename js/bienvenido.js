const cliente = JSON.parse(localStorage.getItem("clienteLogueado"));

if (cliente) {
  document.getElementById("mensaje").textContent = `Bienvenido, ${cliente.nombre}!`;
} else {
  document.getElementById("mensaje").textContent = "No estás registrado";
}
