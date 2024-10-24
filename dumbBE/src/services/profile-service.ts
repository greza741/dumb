import { prisma } from "../libs/prisma";
import * as userRepo from "../repositories/user-repo";

export const getProfile = async (name: string) => {
  return userRepo.findUser(name);
};
