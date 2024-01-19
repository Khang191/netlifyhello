import { Router } from "express"
import hello from './plant-check'
import movies from './movies'
import brands from './brands'

const router = Router();
router.use(hello);
router.use(movies);
router.use(brands);

export default router;
