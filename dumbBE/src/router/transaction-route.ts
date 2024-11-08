import { Router } from "express";
import { authentication } from "../middlewares/authentication";
import * as transactionController from "../controller/transaction-controller";

const checkoutRoute = Router();

checkoutRoute.post(
  "/",
  authentication,
  transactionController.createTransactionHandler
);

checkoutRoute.get(
  "/detail/:transactionId",
  authentication,
  transactionController.getTransactionStatusHandler
);

export default checkoutRoute;
