const alumnos = [{nombre:"Lucas Mater", imagen:"alumno2.jpeg", descripcion:["Edad: 18", "Curso: 6º año", "Division: Economia"]},
    {nombre:"Melany Alva", imagen:"alumna4.jpeg", descripcion:["Edad: 18", "Curso: 6º año", "Division: Economia"]},
    {nombre:"Matias Morrel", imagen:"alumno3.jpeg", descripcion:["Edad: 18", "Curso: 6º año", "Division: Economia"]},
    {nombre:"Sofia Mazi", imagen:"alumna2.jpeg", descripcion:["Edad: 17", "Curso: 5º año", "Division: Naturales"]},
    {nombre:"Simon Golna", imagen:"alumno4.jpeg", descripcion:["Edad: 17", "Curso: 5º año", "Division: Naturales"]},
    {nombre:"Fiorella Lim", imagen:"alumna1.jpeg", descripcion:["Edad: 17", "Curso: 5º año", "Division: Sociales"]},
    {nombre:"Liam Wyn", imagen:"alumno1.jpeg", descripcion:["Edad: 16", "Curso: 4º año", "Division: Sociales"]},
    {nombre:"Lara Sini", imagen:"alumna3.jpeg", descripcion:["Edad: 16", "Curso: 4º año", "Division: Sociales"]}];

$("#alumnos").prepend('<p class="subTitulo">Lista de alumnos</p>');

function mostrarAlumnos(alumnos){
    let contenido = "";

    for (let alumno of alumnos){
        contenido += "<div class='perfil'>";
        contenido += "<h2>" + alumno.nombre + "</h2>";
        contenido += "<div>";
        contenido += "<img src='imagenes/" + alumno.imagen + "' class='foto' alt='foto de alumno'>";
        contenido += "<div>";
        contenido += "<p>";
        contenido += "<ul>";

        for (let descrip of alumno.descripcion){
            contenido += "<li>" + descrip + "</li>";
        }
        contenido += "</ul>";
        contenido += "</p>";
        contenido += "</div>";
        contenido += "</div>";
        contenido += "</div>";
    }
    
    $("#alumnos").append(contenido);
}

mostrarAlumnos(alumnos);

// --
// --------------------------------------------
// --

function mostrarlista() {
    $("#contenedorAlumnos").slideDown("slow", function() {
        $("#btn_mostrar").fadeOut(0);
        $("#btn_ocultar").fadeIn(0);
    });
}

function ocultarlista() {
    $("#contenedorAlumnos").slideUp("slow", function() {
        $("#btn_ocultar").fadeOut(0);
        $("#btn_mostrar").fadeIn(0);
    });
}