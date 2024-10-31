import { Router } from "express";
import * as productController from "../controller/product-controller";
import { authentication } from "../middlewares/authentication";
import upload from "../middlewares/uploadFile";
import { parseIntegers } from "../middlewares/parseIntProduct";

const productRoute = Router();

productRoute.post(
  "/create",
  authentication,
  parseIntegers,
  upload.single("image"),
  productController.create
);
productRoute.get("/", authentication, productController.getAll);
productRoute.get("/:id", authentication, productController.getById);
productRoute.put("/:id", authentication, productController.update);
productRoute.delete("/:id", authentication, productController.deleteProduct);

export default productRoute;
