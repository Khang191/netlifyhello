import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {
        if (req.body) {
            res.status(201).json()
        } else {
            res.status(400).json({
                "statusCode": 400,
                "message": "First error message.",
                "errors": []
            })
        }
    }
)

export default router