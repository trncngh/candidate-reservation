/*
  Warnings:

  - The primary key for the `Meeting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `time` on the `Meeting` table. All the data in the column will be lost.
  - Added the required column `dateTime` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isConfirmed` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSent` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Meeting_candidateId_key";

-- AlterTable
ALTER TABLE "Meeting" DROP CONSTRAINT "Meeting_pkey",
DROP COLUMN "time",
ADD COLUMN     "dateTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL,
ADD COLUMN     "isSent" BOOLEAN NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Meeting_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Meeting_id_seq";
