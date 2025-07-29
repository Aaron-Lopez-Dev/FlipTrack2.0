import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function newVehicleService(year: number, make: string, model: string, mileage: number, price: number) {
    const vehicle = await prisma.vehicles.create({
        data: {
            year: Number(year),
            make,
            model,
            mileage: Number(mileage),
            price: Number(price)
        },
    })
}