import { prisma } from "../libs/prisma";

export const createCategory = async (name: string) => {
  return await prisma.category.create({ data: { name } });
};

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    include: { products: true },
  });
};

export const getCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: { products: true },
  });
};

export const updateCategory = async (id: number, name: string) => {
  return await prisma.category.update({
    where: { id },
    data: { name },
  });
};

export const deleteCategory = async (id: number) => {
  return await prisma.category.delete({
    where: { id },
  });
};
