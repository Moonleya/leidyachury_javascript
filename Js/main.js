//Variables básicas
let nombreproyecto = "";
let fechacotizacion = "";
let componente = "";
let idioma = "";
let estado = ""; 

// Función 1: Obtener valores desde el formulario
function obtenerValores() {
    nombreproyecto = document.getElementById("nombreproyecto").value;
    fechacotizacion = document.getElementById("fechacotizacion").value;

    let compRadios = document.getElementsByName("componente");
    for(let i=0; i< compRadios.length; i++){
        if (compRadios[i].checked) {
            componente= compRadios[i].value;
        }
    }

    let idiomaRadios = document.getElementsByName("idioma");
    for(let i=0; i < idiomaRadios.length; i++){
        if(idiomaRadios[i].checked){
            idioma = idiomaRadios [i].value;
        }
    }

    let estadoRadios = document.getElementsByName("estado");
    for(let i=0; i< estadoRadios.length; i++) {
        if(estadoRadios[i].checked){
            estado = estadoRadios [i].value;
        }
    }
}

// Función 2: Mostrar resumen en consola
function mostrarResumen(){
    obtenerValores();

    console.log("=====RESUMEN DE INFORMACIÓ DEL PROYECTO=====");
    console.log("Nombre del Proyecto:" + nombreproyecto);
    console.log("Fecha de Cotización:" + fechacotizacion);
    console.log("Idioma del Proyecto:"+ idioma);
    console.log("Estado del Proyecto:" + estado);


//Uso de If 
if(estado === "Idea"){
    console.log("El proyecto aún está en fase de idea.");
    alert("Atención:El proyecto aún está en fase de idea");
} else {
    console.log ("El proyecto ya tiene un avance definido.");
    alert("El proyecto ya tiene un avance definido.");
}
// Uso de for-> Mostrar cada campo capturado
let datos= [nombreproyecto, fechacotizacion, componente, idioma, estado];
for(let i=0; i< datos.length; i++){
    console.log("Dato "+ (i+1)+ ":" +datos[i]);
    }

let confirmar = confirm("¿Deseas guardar esta información del Proyecto?");
if (confirmar){
    console.log ("proyecto confirmado y guardado.");
    } else {
    console.log ("proyecto no guardado.");
    }
}

// Función 3: Validación simple
function validarCampos() {
    if (nombreProyecto === "" || fechacotizacion === "") {
        console.log(" Faltan campos por llenar.");
    } else {
        console.log(" Todos los campos principales fueron llenados.");
    }
}