import { Router } from "express";
import authRoute from "./auth-route";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/auth", authRoute);

export default router;
