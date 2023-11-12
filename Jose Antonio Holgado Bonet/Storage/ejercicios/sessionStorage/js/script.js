"use strict";
// Obtengo los datos almacenados en sessionStorage
let datos = JSON.parse(sessionStorage.getItem("sessionDatos"));

// Muestro los datos en la tabla
mostrarDatos(datos);

// Obtengo las referencias a los elementos del formulario y los botones
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const guardar = document.getElementById("guardar");
const borrar = document.getElementById("borrar");
const borrarDatos = document.getElementById("borrarDatos");

// Agrego un evento al botón "Guardar" para almacenar un nuevo dato en sessionStorage
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, edad.value);
});

// Agrego un evento al botón "Borrar" para eliminar un dato por nombre de sessionStorage
borrar.addEventListener("click", function () {
    borrarDato(nombre.value);
});

// Agrego un evento al botón "Borrar Datos" para eliminar todos los datos de sessionStorage
borrarDatos.addEventListener("click", function () {
    borrarTodo();
});
