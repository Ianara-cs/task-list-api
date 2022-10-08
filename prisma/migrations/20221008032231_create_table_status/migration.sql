-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NEW', 'RUNNING', 'FINISHED');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'NEW';
