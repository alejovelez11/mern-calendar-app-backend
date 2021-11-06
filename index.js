const express = require("express");
const cors = require("cors");
const dbConnection = require("./database/config");
require("dotenv").config();
const app = express();
// Conexion BD
dbConnection();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});
