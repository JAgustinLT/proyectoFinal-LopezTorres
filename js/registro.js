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

  Swal.fire({
    icon: "success",
    title: "Registro exitoso",
    text: "Ahora puedes iniciar sesión."
  }).then(() => {
    window.location.href = "login.html";
  });
});

