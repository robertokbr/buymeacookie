import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = await prisma.transactions.findMany();

    return res.json(result);
  } else if (req.method === 'POST') {
    const { 
      txHash,     
      address, 
      amount, 
      message, 
    } = req.body
    
    const result = await prisma.transactions.create({
      data: {
        txHash,     
        address, 
        amount, 
        message, 
      }
    });
    
    return res.json(result);
  }

  return res.status(400).json({ message: "Route only allows POST and GET calls" });
}