import express  from "express";
import controller from "../controllers/controllerNuevoTurno";

const router = express.Router();

router.post("/", controller.addNuevoTurno)


export default router;