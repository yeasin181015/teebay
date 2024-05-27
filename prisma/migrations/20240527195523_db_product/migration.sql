/*
  Warnings:

  - You are about to drop the column `type` on the `CategoryWiseProduct` table. All the data in the column will be lost.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategoryWiseProduct" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "name" TEXT NOT NULL;
