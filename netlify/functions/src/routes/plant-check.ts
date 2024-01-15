import { Router } from 'express'

const router = Router()

router.get(
    '/plant-check',
    (req, res) => res.json(req)
)

export default router