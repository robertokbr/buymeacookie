-- CreateTable
CREATE TABLE "Transactions" (
    "txHash" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_txHash_key" ON "Transactions"("txHash");
