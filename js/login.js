document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  const clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  const cliente = clientes.find(c => c.usuario === usuario && c.password === password);

  if (cliente) {
    localStorage.setItem("clienteLogueado", JSON.stringify(cliente));
    Swal.fire({
      icon: "success",
      title: "Login exitoso",
      text: "Redirigiendo..."
    }).then(() => {
      window.location.href = "bienvenido.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Usuario o contraseña incorrectos"
    });
  }
});



