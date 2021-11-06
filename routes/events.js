const { Router } = require("express");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

// obtener eventos
router.get("/", [validarJWT], getEventos);

// crear un nuevo evento
router.post(
  "/",
  [
    validarJWT,
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha inicio es obligatorio").custom(isDate),
    check("end", "Fecha finalizacion es obligatorio").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// actualizar un nuevo evento
router.put("/:id", validarJWT, actualizarEvento);

// eliminar un nuevo evento
router.delete("/:id", validarJWT, eliminarEvento);

module.exports = router;
