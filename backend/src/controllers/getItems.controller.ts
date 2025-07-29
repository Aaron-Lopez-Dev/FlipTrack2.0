import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

const prisma = new PrismaClient();

export async function getItems(req: Request, res: Response){

    let allItems = await prisma.items.findMany()

    res.json(allItems)
}