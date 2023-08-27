// Accede al atributo "data-secreto" del script para obtener el secreto
const script = document.querySelector('script[data-secreto]');
const secreto = script.getAttribute('data-secreto');

console.log(`El valor del secreto es: ${secreto}`);

