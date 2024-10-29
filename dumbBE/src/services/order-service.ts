import { prisma } from "../libs/prisma";

export const createOrder = async (data: { userId: number; total: number }) => {
  return await prisma.order.create({ data });
};

export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const getOrderById = async (id: number) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });
};

export const updateOrder = async (id: number, data: { total?: number }) => {
  return await prisma.order.update({
    where: { id },
    data,
  });
};

export const deleteOrder = async (id: number) => {
  return await prisma.order.delete({
    where: { id },
  });
};
