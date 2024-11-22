/*
  Warnings:

  - You are about to drop the column `created_at` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inventory` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimumPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "created_at",
DROP COLUMN "name",
DROP COLUMN "stock",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "inventory" INTEGER NOT NULL,
ADD COLUMN     "minimumPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "price" DROP DEFAULT,
ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "_OrderItemProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderItemProduct_AB_unique" ON "_OrderItemProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderItemProduct_B_index" ON "_OrderItemProduct"("B");

-- AddForeignKey
ALTER TABLE "_OrderItemProduct" ADD CONSTRAINT "_OrderItemProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "OrderItem"("order_item_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderItemProduct" ADD CONSTRAINT "_OrderItemProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;
