import express  from "express";
import  misTurnos  from "../controllers/controllerMisTurnos"

const router = express.Router();

router.get("/", misTurnos.getAllListaTurnos);

export default router;