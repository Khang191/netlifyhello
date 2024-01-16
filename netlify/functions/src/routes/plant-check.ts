import { Router } from 'express'
import CustomerController  from '../controller/CustomerController'

const router = Router()

const customerController = new CustomerController()
const { isPlantCheck } = customerController

router.post(
    '/plant-check',
    isPlantCheck.bind(CustomerController)
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