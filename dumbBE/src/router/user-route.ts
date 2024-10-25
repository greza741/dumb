import { Router } from "express";
import * as userController from "../controller/user-controller";
import upload from "../middleware/uploadFile";
import uploader from "../libs/cloudinary";
import { authentication } from "../middlewares/authentication";
const userRoute = Router();

userRoute.post(
  "/edit",
  authentication,
  upload.single("avatar"),
  userController.updateUserController
);

export default userRoute;
