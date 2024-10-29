import { GenderEnum } from "@prisma/client";

export interface UpdateProfileDTO {
  name?: string;
  avatar?: string;
  gender?: GenderEnum;
  phone?: string;
  address?: string;
}
