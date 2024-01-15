import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {

        res.status(400).json( {
                "code": "ExtensionPredicateEvaluationFailed",
                "message": "The compared field 'cart' is not present",
                "errorByExtension": {
                    "id": "f0b48b75-f375-4d26-a747-691e877bb0ff",
                    "key": "my-extension"
                }
            }
        )
    }
)

export default router