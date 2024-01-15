import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {

        res.status(400).json({
            "statusCode": 400,
            "message": "First error message.",
            "errors": [
                {
                    "code": "SyntaxError",
                    "message": "First error message."
                },
                {
                    "code": "SemanticError",
                    "message": "Second error message."
                }
            ]
        })
    }
)

export default router