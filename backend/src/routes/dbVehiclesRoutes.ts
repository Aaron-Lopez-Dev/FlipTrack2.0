import { Router } from "express";
import { addVehicle } from '../controllers/addVehicle.controller';
import { getVehicles } from '../controllers/getVehicles.controller'; 
import { deleteVehicle } from  '../controllers/deleteVehicle.controller'
const router = Router()

router.post('/', addVehicle)
router.get("/", getVehicles)
router.delete("/", deleteVehicle)

export default router