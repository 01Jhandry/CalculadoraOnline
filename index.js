// Obtener el elemento del display
let display = document.getElementById("display");

// Función para agregar valores al display
function appendValue(value) {
    display.value += value; // Concatenar el valor
}

// Función para limpiar toda la pantalla
function clearDisplay() {
    display.value = "";
}

// Función para eliminar el último carácter
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado
function calculate() {
    try {
        // Evalúa la operación escrita
        display.value = eval(display.value);
    } catch (error) {
        // Manejo de errores
        display.value = "Error";
    }
}