import { Router } from "express";
import { performSearch } from '../controllers/performSearch.controller'
import { Request, Response } from "express";


const router = Router()

router.post('/', performSearch)


export default router