/*
  Warnings:

  - The values [SUCCESS,FAILED] on the enum `TransactionStatusEnum` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `cartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionStatusEnum_new" AS ENUM ('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED');
ALTER TABLE "transaction" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "transaction" ALTER COLUMN "status" TYPE "TransactionStatusEnum_new" USING ("status"::text::"TransactionStatusEnum_new");
ALTER TYPE "TransactionStatusEnum" RENAME TO "TransactionStatusEnum_old";
ALTER TYPE "TransactionStatusEnum_new" RENAME TO "TransactionStatusEnum";
DROP TYPE "TransactionStatusEnum_old";
ALTER TABLE "transaction" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "cartItem" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropEnum
DROP TYPE "TransactionItemStatus";
