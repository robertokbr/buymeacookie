-- CreateTable
CREATE TABLE "Transactions" (
    "txHash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "github" TEXT,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_txHash_key" ON "Transactions"("txHash");
