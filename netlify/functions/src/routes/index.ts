import { Router } from "express"
import hello from './plant-check'
import movies from './movies'

const router = Router();
router.use(hello);
router.use(movies);

export default router;
