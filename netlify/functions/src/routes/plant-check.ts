import { Router } from 'express'

const router = Router()

router.get(
    '/plant-check',
    (req, res) => {

        res.status(400).json({
            "statusCode": 400,
            "message": "First error message."
        })
    }
)

export default router