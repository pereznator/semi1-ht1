const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    Instancia: "Instancia #1 - API #1",
    Curso: "Seminario de Sistemas 1",
    Estudiante: "Jorge Antonio Perez Ordoñez - 201900810"
  });
});

router.get("/check", (req, res) => {
  return res.status(200).json("API 1");
});

app.use(router);

app.listen(3000, () => {
  console.info("Escuchando en puesto 3000.");
});
