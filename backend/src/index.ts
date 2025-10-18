import express from "express";
import cors from "cors";

import { PORT } from "./config/env";
import router from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas centralizadas
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}/api`);
});
