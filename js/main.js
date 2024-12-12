document
.getElementById("registroForm")
.addEventListener("submit", function (e) {
    e.preventDefault();
});

document
.getElementById("comentario")
.addEventListener("input", function(){
    const maxLenght = this.maxLenght;
    const currentLenght = this.value.lenght;
    document.getElementById("contador").innerHTML = `${currentLenght}/${maxLenght} caracteres`;
});

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("aoellido").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let pais = document.getElementById("pais").value;
    let asunto = document.getElementById("asunto").value;
    let descripcion = document.getElementById("descripcion").value;

    let valid = true;

    if (nombre === "") {
        document.getElementById("errorNombre").innerText =
        "El nombre es obligatorio";
        valid = false;
    } else {
        document.getElementById("errorNombre").innerText = "";
    }
}