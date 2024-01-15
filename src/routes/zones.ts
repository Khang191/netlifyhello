import { Router } from 'express'
import Client from './../client/Client'
import { getOptions } from '../utils/options'
import responseHandler from "../utils/ResponseHandler";
import { Request, Response } from 'express'

const router = Router()

async function getData(req: Request, res: Response) {
    const options = getOptions()
    const rootClient = new Client()
    const apiRoot = rootClient.getApiRoot(
        rootClient.getClientFromOption(options)
    )

    const data = await apiRoot
        .withProjectKey({projectKey: options.projectKey})
        .zones()
        .get()
        .execute()

    if (data?.statusCode == 200) {
        return responseHandler.successResponse(
            res,
            data.statusCode,
            '',
            data.body
        )
    }
}



router.get('/zones', (req, res, next) => {
    getData(req,res);
})

export default router