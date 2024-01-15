import { Router } from 'express'

const router = Router()

router.get(
    '/hello',
    (req, res) => res.status(401).json({mess:"Lỗi rồi check lại đi"})
)

export default router