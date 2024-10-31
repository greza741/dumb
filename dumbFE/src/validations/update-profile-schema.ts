import { z } from "zod";

export const updateProfileSchema = z
  .object({
    name: z.string(),
    avatar: z.string(),
    gender: z.string(),
    phone: z.string(),
    address: z.string(),
  })
  .required();

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;
