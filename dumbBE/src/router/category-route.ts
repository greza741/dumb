import { Router } from "express";
import * as categoryController from "../controller/category-controller";
import { authentication } from "../middlewares/authentication";

const categoryRoute = Router();

categoryRoute.post("/create", authentication, categoryController.create);
categoryRoute.get("/", authentication, categoryController.getAll);
categoryRoute.get("/:id", authentication, categoryController.getById);
categoryRoute.put("/:id", authentication, categoryController.update);
categoryRoute.delete("/:id", authentication, categoryController.deleteCategory);

export default categoryRoute;
