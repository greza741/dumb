import { Router } from "express";
import * as userController from "../controller/user-controller";
import upload from "../middlewares/uploadFile";
import uploader from "../libs/cloudinary";
import { authentication } from "../middlewares/authentication";
const userRoute = Router();

userRoute.put(
  "/edit",
  authentication,
  upload.single("avatar"),
  userController.updateUserController
);

export default userRoute;
