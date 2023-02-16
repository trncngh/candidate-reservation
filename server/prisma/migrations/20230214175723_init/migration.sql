/*
  Warnings:

  - You are about to drop the column `time` on the `Meeting` table. All the data in the column will be lost.
  - Added the required column `times` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meeting" DROP COLUMN "time",
ADD COLUMN     "times" TIMESTAMP(3) NOT NULL;
