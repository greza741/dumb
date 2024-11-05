/*
  Warnings:

  - Added the required column `subTotal` to the `transactionItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactionItem" ADD COLUMN     "subTotal" INTEGER NOT NULL;
