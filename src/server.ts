import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Rodando no localhost:${PORT}`);
});

console.log(" App reiniciado em:", new Date().toLocaleTimeString());