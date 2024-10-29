import { Router } from "express";
import * as OrderItemController from "../controller/order-item-controller";
import { authentication } from "../middlewares/authentication";

const orderItemRoute = Router();

orderItemRoute.post("/", OrderItemController.createOrderItem);
orderItemRoute.get("/", OrderItemController.getAllOrderItems);
orderItemRoute.get("/:id", OrderItemController.getOrderItemById);
orderItemRoute.put("/:id", OrderItemController.updateOrderItem);
orderItemRoute.delete("/:id", OrderItemController.deleteOrderItem);

export default orderItemRoute;
