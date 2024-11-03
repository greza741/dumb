-- AlterTable
ALTER TABLE "cart" ADD COLUMN     "totalPrice" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "cartItem" ADD COLUMN     "totalPrice" INTEGER NOT NULL DEFAULT 0;
