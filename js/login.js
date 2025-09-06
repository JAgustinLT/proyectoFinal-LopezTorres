document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const cliente = clientes.find(c => c.usuario === usuario && c.password === password);

  const mensaje = document.getElementById("mensaje");

  if (cliente) {
    localStorage.setItem("clienteLogueado", JSON.stringify(cliente));
    mensaje.textContent = "✅ Login exitoso, redirigiendo...";
    mensaje.className = "success";

    setTimeout(() => {
      window.location.href = "bienvenido.html";
    }, 2000);
  } else {
    mensaje.textContent = "❌ No estás registrado o datos incorrectos";
    mensaje.className = "error";
  }
});
