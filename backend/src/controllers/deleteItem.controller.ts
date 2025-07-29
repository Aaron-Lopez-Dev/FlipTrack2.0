import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function deleteItem(req: Request, res:Response){
    const { index } = req.body

    await prisma.items.delete({
        where: {
            id: index
        }
        
    })
    console.log("Item Deleted")
    res.json("Deleted")
}