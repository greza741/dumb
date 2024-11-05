/*
  Warnings:

  - You are about to drop the column `status` on the `transactionItem` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `transactionItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactionItem" DROP COLUMN "status",
ADD COLUMN     "quantity" INTEGER NOT NULL;
