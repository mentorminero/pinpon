// Obtener el valor pasado como parámetro en la URL
const urlParams = new URLSearchParams(window.location.search);
const secretValue = urlParams.get("pinpon_secret");

// Mostrar el valor en la consola
console.log(`El valor del secreto es: ${secretValue}`);
