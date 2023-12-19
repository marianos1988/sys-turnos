import express  from "express";
import  misTurnos  from "../controllers/controllerMisTurnos"

const router = express.Router();

router.get("/", misTurnos.getAllListaTurnos);
router.get("/Search/:year-:month-:date", misTurnos.getSearchDate)

export default router;