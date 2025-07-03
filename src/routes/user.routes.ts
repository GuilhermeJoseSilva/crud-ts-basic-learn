import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/", async (req, res) => {
  await userController.create(req, res);
});
export default router;