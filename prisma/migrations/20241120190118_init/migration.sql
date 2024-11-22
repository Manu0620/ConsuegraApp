/*
  Warnings:

  - You are about to drop the column `address` on the `Address` table. All the data in the column will be lost.
  - Added the required column `address_line_1` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "address",
ADD COLUMN     "address_line_1" TEXT NOT NULL,
ADD COLUMN     "address_line_2" TEXT;
