import { Request, Response } from 'express'
import { newVehicleService } from '../services/newVehicleService'


export async function addVehicle (req: Request, res: Response){
    const { year, make, model, mileage, price} = req.body
    await newVehicleService(year, make, model, mileage, price)
    res.json("Passed")
}
