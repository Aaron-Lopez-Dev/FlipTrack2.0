import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export async function newItemService(itemName: string, itemPrice: number) {
    console.log("Service: " + itemName + itemPrice)
    const item = await prisma.items.create({
        data: {
            name: itemName,
            price: Number(itemPrice)
        },
    })
}