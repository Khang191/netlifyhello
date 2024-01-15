import { Router } from "express";
import { ContainerController } from './../../controller'

const router = Router()

const containerController = new ContainerController()
const { create } = containerController

router.post(
    '/import/container',
    create.bind(containerController)
)
export default router