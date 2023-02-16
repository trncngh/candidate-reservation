/*
  Warnings:

  - You are about to drop the column `times` on the `Meeting` table. All the data in the column will be lost.
  - Added the required column `time` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meeting" DROP COLUMN "times",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;
