import { Router } from 'express'
import { BrandController } from './../controller'

const router = Router()
const brandController = new BrandController()
const { getBrands } = brandController

router.post(
    '/list-brands',
    getBrands.bind(BrandController)
)
export default router