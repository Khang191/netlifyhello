import { Router } from "express";
import { CategoriesController } from './../../controller'
import containerController from "../../controller/Import/ContainerController";

const router = Router()

const categoriesController = new CategoriesController()
const { importer } = categoriesController

router.post(
    '/import/categories',
    importer.bind(containerController)
)


export default router