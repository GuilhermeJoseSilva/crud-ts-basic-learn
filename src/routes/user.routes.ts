import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/", async (req, res) => {
  await userController.create(req, res);
});

router.get("/", async (req, res) => {
  await userController.index(req, res);
});

router.get("/:id", async (req, res) => {
  await userController.show(req, res);
});


router.put("/:id", async (req, res) => {
  await userController.update(req, res);
});

router.delete("/:id", async (req, res) => {
  await userController.delete(req, res);
});
export default router;