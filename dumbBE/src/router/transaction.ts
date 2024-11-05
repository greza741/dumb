import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import * as transactionController from "../controller/transaction-controller";

const checkoutRoute = Router();

checkoutRoute.post(
  "/",
  authentication,
  transactionController.createTransactionHandler
);

checkoutRoute.patch(
  "/transaction-item",
  authentication,
  transactionController.handleWebhook
);

export default checkoutRoute;
