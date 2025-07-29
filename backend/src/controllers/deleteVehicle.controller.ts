import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function deleteVehicle(req: Request, res:Response){
    const { index } = req.body

    await prisma.vehicles.delete({
        where: {
            id: index
        }
        
    })
    console.log("Deleted")
    res.json("Deleted")
}