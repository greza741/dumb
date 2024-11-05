import { Request, Response } from "express";
import * as transactionService from "../services/transaction-service";

export const createTransactionHandler = async (req: Request, res: Response) => {
  try {
    const { userId, cartId } = req.body;
    const paymentUrl = await transactionService.createTransaction(
      userId,
      cartId
    );
    return res.status(200).json({ paymentUrl });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const handleWebhook = async (req: Request, res: Response) => {
  const { order_id, transaction_status } = req.body;

  try {
    await transactionService.updateTransactionStatus(
      order_id,
      transaction_status
    );
    return res.status(200).json({ message: "Transaction status updated" });
  } catch (error) {
    console.error("Error updating transaction status:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
