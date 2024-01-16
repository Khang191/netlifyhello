import { getOptions } from './../utils/options'
import CustomerRepository from '../repository/CustomerRepository'
import  responseHandler from '../utils/ResponseHandler'
import { Request, Response } from 'express'

class CustomerController {
    constructor() {}

    async isPlantCheck(req: Request, res: Response) {
        const options = getOptions()

        const {resource: { obj: { customerId } }} = req.body
        const customer = await new CustomerRepository(options).getCustomerById(customerId)

        const { custom: {fields} } = customer.body

        if (customer?.statusCode === 200 && fields?.plantCheck == 1) {
            res.status(400).json({
                statusCode: 400,
                message: "Error message.",
                errors: [
                    {
                        "code": "General",
                        "message": "Plant Check Error!"
                    }
                ]
            })
        } else {
            res.status(201).json()
        }
    }
}

export default CustomerController