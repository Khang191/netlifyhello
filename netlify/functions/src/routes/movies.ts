import { Router } from 'express'
import { MovieController }  from '../controller'

const router = Router()

const movieController = new MovieController()
const { getMoviesById } = movieController

router.post(
    '/plant-check',
    getMoviesById.bind(MovieController)
)


// router.post(
//     '/plant-check',
//     (req, res) => {
//
//         const {resource: { obj }} = req.body
//
//         console.log(obj);
//         if (req.body.resource.id) {
//             res.status(201).json()
//         } else {
//             res.status(400).json({
//                 statusCode: 400,
//                 message: "First error message.",
//                 errors: [
//                     {
//                         "code": "General",
//                         "message": "Plant Check Error"
//                     }
//                 ]
//             })
//         }
//     }
// )

export default router