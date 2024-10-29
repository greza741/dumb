import { Router } from "express";
import * as OrderController from "../controller/order-controller";
import { authentication } from "../middlewares/authentication";

const orderRoute = Router();

orderRoute.post("/", OrderController.createOrder);
orderRoute.get("/", OrderController.getAllOrders);
orderRoute.get("/:id", OrderController.getOrderById);
orderRoute.put("/:id", OrderController.updateOrder);
orderRoute.delete("/:id", OrderController.deleteOrder);

export default orderRoute;
