const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Obtén el secreto desde una variable de entorno
  const secreto = process.env.PINPON_SECRET;
  
  // Envía el secreto como parte de la respuesta HTTP al cliente
  res.send(`<script src="script.js" data-secreto="${secreto}"></script>`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
