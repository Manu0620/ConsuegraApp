/*
  Warnings:

  - Made the column `phone` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "advice" TEXT;

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "phone" SET NOT NULL;
