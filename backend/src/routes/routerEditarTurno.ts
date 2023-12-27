import express from "express";
import controllerEditarTurno from "../controllers/controllerEditarTurno";

const router = express.Router();

router.post("/id=:id", controllerEditarTurno.editarTurno);
router.get("/id=:id", controllerEditarTurno.eliminarTurno);

export default router;