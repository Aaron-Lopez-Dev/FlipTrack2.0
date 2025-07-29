import { Router } from 'express'
import { addItem } from '../controllers/addItem.controller'
import { deleteItem } from '../controllers/deleteItem.controller'
import { getItems } from '../controllers/getItems.controller'
const router = Router()

router.post('/', addItem)
router.delete("/", deleteItem)
router.get('/', getItems)

export default router