import { Router } from 'express'
import Client from './../client/Client'
import { getOptions } from '../utils/options'

const router = Router()

const options = getOptions()
const rootClient = new Client()
const apiRoot = rootClient.getApiRoot(
    rootClient.getClientFromOption(options)
)


router.get('/tax-categories', (req, res, next) => {
    apiRoot
        .withProjectKey({projectKey: options.projectKey})
        .taxCategories()
        .get()
        .execute()
        .then(function ({body}){
            res.json(body)
        })
})

export default router