import { OrderItemDTO } from "../dto/order-item-dto";
import { prisma } from "../libs/prisma";

export const createOrderItem = async (data: OrderItemDTO) => {
  return await prisma.orderItem.create({ data });
};

export const getAllOrderItems = async () => {
  return await prisma.orderItem.findMany({
    include: {
      order: true,
      product: true,
    },
  });
};

export const getOrderItemById = async (id: number) => {
  return await prisma.orderItem.findUnique({
    where: { id },
    include: {
      order: true,
      product: true,
    },
  });
};

export const updateOrderItem = async (
  id: number,
  data: { quantity?: number; price?: number }
) => {
  return await prisma.orderItem.update({
    where: { id },
    data,
  });
};

export const deleteOrderItem = async (id: number) => {
  return await prisma.orderItem.delete({
    where: { id },
  });
};
