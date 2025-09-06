document.getElementById("formRegistro").addEventListener("submit", function(e) {
  e.preventDefault();

  const cliente = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    direccion: document.getElementById("direccion").value,
    telefono: document.getElementById("telefono").value,
    usuario: document.getElementById("usuario").value,
    password: document.getElementById("password").value
  };

  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  clientes.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientes));

  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "✅ Registro exitoso, ahora puedes iniciar sesión.";
  mensaje.className = "success";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
