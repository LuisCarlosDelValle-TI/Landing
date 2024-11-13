const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Hola, mundo!');
});

// Ruta para login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Aquí iría la lógica de autenticación
  res.send(`Usuario: ${username}, Contraseña: ${password}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});