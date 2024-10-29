import { Request, Response } from "express";
import * as OrderItemService from "../services/order-item-service";

export const createOrderItem = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItemService.createOrderItem(req.body);
    res.status(201).json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create order item" });
  }
};

export const getAllOrderItems = async (req: Request, res: Response) => {
  try {
    const orderItems = await OrderItemService.getAllOrderItems();
    res.json(orderItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch order items" });
  }
};

export const getOrderItemById = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItemService.getOrderItemById(
      Number(req.params.id)
    );
    if (!orderItem) {
      return res.status(404).json({ error: "Order item not found" });
    }
    res.json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch order item" });
  }
};

export const updateOrderItem = async (req: Request, res: Response) => {
  try {
    const orderItem = await OrderItemService.updateOrderItem(
      Number(req.params.id),
      req.body
    );
    res.json(orderItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update order item" });
  }
};

export const deleteOrderItem = async (req: Request, res: Response) => {
  try {
    await OrderItemService.deleteOrderItem(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete order item" });
  }
};
