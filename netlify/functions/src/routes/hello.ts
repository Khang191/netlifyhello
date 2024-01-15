import { Router } from 'express'

const router = Router()

router.get(
    '/hello',
    (req, res) => res.json({mess:"Hello World! Testinggggg"})
)

export default router