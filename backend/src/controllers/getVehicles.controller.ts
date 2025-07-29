import { PrismaClient } from "@prisma/client"
import { Request, Response } from 'express'

const prisma = new PrismaClient();

export async function getVehicles(req: Request, res: Response){

    let allVehicles = await prisma.vehicles.findMany()

    res.json(allVehicles)
}