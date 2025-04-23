document.getElementById("agregar").addEventListener('click', function(){
    const input = document.getElementById("tareaingresada");
    const tarea = input.value.trim();

    if(tarea){
       const saludo = tarea;
       document.getElementById("list").innerHTML = saludo;
        input.value = ''; // borra el input

        // botón eliminar
        const botonEliminarTarea = document.createElement("button");
        botonEliminarTarea.textContent = "Eliminar";
        saludo.remove()

     } else {
         document.getElementById("saludo").innerHTML = "Debe escribir una tarea";
     }
 });

 
//  const botonEliminarItem = document.getElementById("boton-eliminar-item")
// botonEliminarItem.addEventListener("click", function() {
//   lista.lastElementChild.remove()

// })