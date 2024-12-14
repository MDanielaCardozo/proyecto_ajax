document
  .getElementById("registroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    validarFormulario();
  });

document.getElementById("mensaje").addEventListener("input", function () {
  const maxLength = this.maxLength;
  const currentLength = this.value.length;
  document.getElementById(
    "contador"
  ).innerHTML = `${currentLength}/${maxLength} caracteres`;
});

 let formulario = document.getElementById("registroForm");

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let asunto = document.getElementById("asunto").value;
  let descripcion = document.getElementById("mensaje").value;

  console.log(nombre);

  let valid = true;

  if (nombre === "") {
    document.getElementById(
      "errorNombre"
    ).innerHTML += `<div class="alert alert-primary" role="alert">
    El nombre es obligatorio
  </div> `;
    valid = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }

  if (apellido === "") {
    document.getElementById(
      "errorApellido"
    ).innerHTML += `<div class="alert alert-primary" role="alert">
    El apellido es obligatorio
  </div> `;
    valid = false;
  } else {
    document.getElementById("errorApellido").innerText = "";
  }

  if (telefono === "") {
    document.getElementById(
      "errorTelefono"
    ).innerHTML += `<div class="alert alert-primary" role="alert">
    El teléfono es obligatorio
  </div> `;
    valid = false;
  } else {
    document.getElementById("errorTelefono").innerText = "";
  }

  if (email === "") {
    document.getElementById(
      "errorEmail"
    ).innerHTML += `<div class="alert alert-primary" role="alert">
    El email es obligatorio
  </div> `;
    valid = false;
  } else {
    document.getElementById("errorEmail").innerText = "";
  }

  if (asunto === "") {
    document.getElementById(
      "errorAsunto"
    ).innerHTML += `<div class="alert alert-primary" role="alert">
    El asunto es obligatorio
  </div> `;
    valid = false;
  } else {
    document.getElementById("errorAsunto").innerText = "";
  }

  if (descripcion === "") {
    document.getElementById(
      "errorDescripcion"
    ).innerHTML += `<div class="alert alert-primary" role="alert">
    La descripción es obligatoria
  </div> `;
    valid = false;
  } else {
    document.getElementById("errorDescripcion").innerText = "";
  }

  function limpiarFormulario(){
    formulario.reset(); 
}

  if (valid) {
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Formulario enviado con éxito!",
        showConfirmButton: false,
        timer: 2000
      });
  }

  limpiarFormulario();

}
