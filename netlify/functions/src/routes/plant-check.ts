import { Router } from 'express'

const router = Router()

router.get(
    '/plant-check',
    (req, res) => {
        const rs = {
            statusCode: 200,
            message: "ok"
        }

        res.status(200).json(req)
    }
)

export default router