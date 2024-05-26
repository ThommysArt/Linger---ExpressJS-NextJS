/*
  Warnings:

  - Added the required column `score` to the `FinishedQuiz` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FinishedQuiz" ADD COLUMN     "score" INTEGER NOT NULL;
