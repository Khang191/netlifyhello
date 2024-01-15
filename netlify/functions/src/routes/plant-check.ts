import { Router } from 'express'

const router = Router()

router.get(
    '/plant-check',
    (req, res) => {

        res.status(200)
    }
)

export default router