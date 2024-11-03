import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user-service";
import { UpdateProfileDTO } from "../dto/profile-dto";
import { prisma } from "../libs/prisma";

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = res.locals.user.id;
    const data: UpdateProfileDTO = req.body;

    const user = await userService.updateServices(
      id,
      data,
      req.file as Express.Multer.File
    );
    res.json(user);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const getUserWithCart = async (userId: number) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: {
      cart: {
        include: {
          cartItems: {
            include: {
              product: true,
            },
          },
        },
      },
    },
  });
};
