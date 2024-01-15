import { Router } from 'express'
import { Customer as CustomerController } from '../controller'

const router = Router()

const customerController = new CustomerController()
const { createCustomer, getCustomer, login , updateCustomer} = customerController


router.post(
    '/customer/register',
    createCustomer.bind(CustomerController)
)

router.post(
    '/customer/login',
    login.bind(customerController)
)

router.get(
    '/customer/profile',
    getCustomer.bind(CustomerController)
)

router.put(
    '/customer/:id',
    updateCustomer.bind(CustomerController)
)

// router.put(
//     '/customer/:id',
//     (req, res) => {
//         const customerId = req.params['id'];
//         console.log(customerId)
//         res.json(req.body)
//     }
// )

export default router