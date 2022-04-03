class Contacto {
    constructor (datos_formulario) {
        this.nombre = datos_formulario.nombre;
        this.apellido = datos_formulario.apellido;
        this.edad = datos_formulario.edad;
        this.genero = datos_formulario.genero;
        this.email = datos_formulario.email;
        this.modalidad = datos_formulario.modalidad;
    }
}

function validarFormulario() {
    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let apellido_cliente = document.getElementById("apellido_cliente").value;
    let edad_cliente = document.getElementById("edad_cliente").value;
    let email_cliente = document.getElementById("mail_cliente").value;

    if ((nombre_cliente == "") || (nombre_cliente.length <= 3)) {
        mostrarError (true, "Ingrese un Nombre!!");
        return false;
    } else {
        mostrarError (false, "");
    }

    if ((apellido_cliente == "") || (apellido_cliente.length <= 3)) {
        mostrarError (true, "Ingrese un Apellido!!");
        return false;
    } else {
        mostrarError (false, "");
    }

    if ((edad_cliente == "") || (edad_cliente < 12) || (edad_cliente > 18)) {
        mostrarError (true, "Ingrese una Edad!!");
        return false;
    } else {
        mostrarError (false, "");
    }

    if ((email_cliente == "") || (email_cliente.length <= 3)) {
        mostrarError (true, "Ingrese un Email!!");
        return false;
    } else {
        mostrarError (false, "");
    }

    guardarDatos();

    mostrarMensaje("El formulario se ha enviado correctamente!");

    newAlumno();
}

// --
// --------------------------------------------
// --

function mostrarError(estado, mensaje){
    if(estado) {
        document.getElementById("resultado").innerHTML = '<p class="mensaje_error">"' + mensaje + '"</p>';
    } else {
        document.getElementById("resultado").innerHTML = "";
    }
}

// -----------------

function mostrarMensaje(mensaje){
    document.getElementById("resultado").innerHTML = '<p class="mensaje">"' + mensaje + '"</p>';
}

// -----------------

function guardarDatos() {
    let nombre_cliente = document.getElementById("nombre_cliente").value;
    let apellido_cliente = document.getElementById("apellido_cliente").value;
    let edad_cliente = document.getElementById("edad_cliente").value;
    let genero_cliente = document.getElementById("genero_cliente").value;
    let email_cliente = document.getElementById("mail_cliente").value;
    let modalidad_cliente = document.getElementById("modalidad_cliente").value;
    let contacto = new Contacto({nombre:nombre_cliente, apellido:apellido_cliente, edad:edad_cliente, genero:genero_cliente, email:email_cliente, modalidad:modalidad_cliente});
    localStorage.setItem("datos_formulario", JSON.stringify(contacto));
}

// -----------------

function newAlumno() {
    const nuevoAlumno = JSON.parse(localStorage.getItem("datos_formulario"));
    let contenido = "";

    contenido += "<div class='perfil'>";
    contenido += "<h2>" + nuevoAlumno.nombre + " " + nuevoAlumno.apellido + "</h2>";
    contenido += "<div>";

    if (nuevoAlumno.genero == "Masculino") {
        contenido += "<img src='imagenes/alumno5.jpeg' class='foto' alt='foto del alumno nuevo'>";
    }if (nuevoAlumno.genero == "Femenino") {
        contenido += "<img src='imagenes/alumna5.jpeg' class='foto' alt='foto de la alumna nueva'>";
    }if (nuevoAlumno.genero == "No definido") {
        contenido += "<img src='imagenes/alumne.jpeg' class='foto' alt='foto del alumne nueve'>";
    }

    contenido += "<div>";
    contenido += "<p>";
    contenido += "<ul>";
    contenido += "<li>Edad: " + nuevoAlumno.edad + "</li>";

    if ((nuevoAlumno.edad == 12) && (nuevoAlumno.edad == 13)) {
        contenido += "<li>Curso: 1° año</li>";
    }if (nuevoAlumno.edad == 14) {
        contenido += "<li>Curso: 2° año</li>";
    }if (nuevoAlumno.edad == 15) {
        contenido += "<li>Curso: 3° año</li>";
    }if (nuevoAlumno.edad == 16) {
        contenido += "<li>Curso: 4° año</li>";
    }if (nuevoAlumno.edad == 17) {
        contenido += "<li>Curso: 5° año</li>";
    }if (nuevoAlumno.edad == 18) {
        contenido += "<li>Curso: 6° año</li>";
    }

    contenido += "<li>Division: " + nuevoAlumno.modalidad + "</li>";
    contenido += "</ul>";
    contenido += "</p>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";

    $("#alumnos").append(contenido);
}

// -----------------

function cargarDatos() {
    let contacto = JSON.parse(localStorage.getItem("datos_formulario"));
    console.log(contacto);
    document.getElementById("nombre_cliente").value = contacto.nombre;
    document.getElementById("apellido_cliente").value = contacto.apellido;
    document.getElementById("edad_cliente").value = contacto.edad;
    document.getElementById("genero_cliente").value = contacto.genero;
    document.getElementById("mail_cliente").value = contacto.email;
    document.getElementById("modalidad_cliente").value = contacto.modalidad;
    mostrarMensaje("Los datos se cargaron correctamente!");
}

// -----------------

function borrarDatos() {
    localStorage.clear();
    mostrarMensaje("Los datos se borraron correctamente!");
}

// -----------------

document.getElementById("enviar_datos").addEventListener("click", validarFormulario);

document.getElementById("cargar_datos").addEventListener("click", cargarDatos);

document.getElementById("borrar_datos").addEventListener("click", borrarDatos);