import express from "express";
import routerLogin from "./routes/routeLogin";

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

//Routes

app.use("/Login",routerLogin);



app.listen(PORT,()=>{
  console.log("backend corriendo http://localhost:3000");
})