/*
  Warnings:

  - You are about to drop the `transaction_item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "transaction_item" DROP CONSTRAINT "transaction_item_productId_fkey";

-- DropForeignKey
ALTER TABLE "transaction_item" DROP CONSTRAINT "transaction_item_transactionId_fkey";

-- DropTable
DROP TABLE "transaction_item";

-- CreateTable
CREATE TABLE "transactionItem" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "status" "TransactionItemStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactionItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transactionItem" ADD CONSTRAINT "transactionItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactionItem" ADD CONSTRAINT "transactionItem_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
