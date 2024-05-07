var pressedKeys = []; // Arreglo para almacenar las teclas presionadas

function captureKeys(event){
    var pressedKeyInput = document.getElementById("pressedKeys");
    var muestra = document.getElementById("lblPressedKeys");

    var key = event.key; // Obtiene la tecla presionada

    muestra.innerHTML += key; // Muestra cada tecla presionada en la etiqueta
    pressedKeys.push(key); // Añade la tecla al arreglo

    pressedKeyInput.value = pressedKeys.join(', '); // Convierte el arreglo a una cadena separada por comas y la muestra en el input
}

// Agrega un escuchador de eventos al formulario para manejar el envío
document.getElementById("keyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera convencional

    var pressedKeyInput = document.getElementById("pressedKeys");
    alert("Teclas presionadas: " + pressedKeyInput.value); // Muestra una alerta con las teclas presionadas
});
