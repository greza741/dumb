/*
  Warnings:

  - The values [Male,Felame,DemiGod] on the enum `GenderEnum` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GenderEnum_new" AS ENUM ('MALE', 'FEMALE', 'DEMIGOD');
ALTER TABLE "user" ALTER COLUMN "gender" TYPE "GenderEnum_new" USING ("gender"::text::"GenderEnum_new");
ALTER TYPE "GenderEnum" RENAME TO "GenderEnum_old";
ALTER TYPE "GenderEnum_new" RENAME TO "GenderEnum";
DROP TYPE "GenderEnum_old";
COMMIT;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "image" DROP NOT NULL;
