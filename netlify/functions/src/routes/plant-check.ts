import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {

        console.log(req);
        if (req.body.resource.id) {
            res.status(201).json()
        } else {
            res.status(400).json({
                statusCode: 400,
                message: "First error message.",
                errors: [
                    {
                        "code": "General",
                        "message": "Plant Check Error"
                    }
                ]
            })
        }
    }
)

export default router