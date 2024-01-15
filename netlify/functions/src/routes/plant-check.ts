import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {

        res.status(400).json( {
                "code": "ExtensionPredicateEvaluationFailed",
                "message": "The compared field 'cart' is not present",
                "errorByExtension": {
                    "id": "{{extension-id}}",
                    "key": "{{extension-key}}"
                }
            }
        )
    }
)

export default router