import { Router } from 'express'

const router = Router()

router.get(
    '/plant-check',
    (req, res) => {
        const rs = {
            statusCode: 200,
            message: "ok"
        }

        res.statusCode(200).json(rs)
    }
)

export default router