import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {

        res.status(400).json( {
                statusCode: 400,
                message: 'Cannot create a cart',
                errors: []
            }
        )
    }
)

export default router