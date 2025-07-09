import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();
const authController = new AuthController();

router.post("/login", async (req, res) => {
  await authController.login(req, res);
});

export default router;