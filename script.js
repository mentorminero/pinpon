// script.js

// Accede al valor de la variable de entorno MI_SECRETO
const secreto = window.MI_SECRETO || "Valor predeterminado si el secreto no está disponible";

// Actualiza el contenido del elemento con id "secreto-value" con el valor del secreto
document.getElementById("secreto-value").textContent = `El valor del secreto es: ${secreto}`;
