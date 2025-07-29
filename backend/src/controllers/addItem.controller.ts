import { Request, Response } from 'express'
import { newItemService } from '../services/newItemService'

export async function addItem(req: Request, res: Response) {
    const { itemName, itemPrice } = req.body
    await newItemService(itemName, itemPrice)
    res.json("Passed")
}
