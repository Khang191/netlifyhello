import { Router } from "express"
import hello from './plant-check'

const router = Router();
router.use(hello);
export default router;
