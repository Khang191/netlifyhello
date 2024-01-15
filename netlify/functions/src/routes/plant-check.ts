import { Router } from 'express'

const router = Router()

router.get(
    '/plant-check',
    (req, res) => {

        res.status(200).json({})
    }
)

export default router