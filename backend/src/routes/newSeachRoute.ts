import { Router } from "express";
import { performSearch } from '../controllers/performSearch.controller'

const router = Router()

router.post('/', performSearch)

export default router