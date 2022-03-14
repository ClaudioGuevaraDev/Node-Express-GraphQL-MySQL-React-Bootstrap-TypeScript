import { Router } from "express"

import { validateAccount } from "../controllers/auth"

const router = Router()

router.get("/validateAccount/:id", validateAccount)

export default router