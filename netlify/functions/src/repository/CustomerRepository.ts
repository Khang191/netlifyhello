import { Client } from "../client"
import { ApiRoot} from "@commercetools/platform-sdk";

interface ICustomerRepository {
    apiRoot: ApiRoot
    projectKey: string
    getCustomerById(customerId): any | never
}

class CustomerRepository implements ICustomerRepository {
    apiRoot: ApiRoot
    projectKey: string

    constructor(options) {
        const rootClient = new Client()
        this.apiRoot = rootClient.getApiRoot(
            rootClient.getClientFromOption(options)
        )
        this.projectKey = options.projectKey
    }
    async getCustomerById(customerId) {
        try {
            const customer = await this.apiRoot
                .withProjectKey({projectKey: this.projectKey})
                .customers()
                .withId({ ID: customerId} )
                .get()
                .execute()

            return customer
        } catch (e) {
            return e;
        }
    }
}

export default CustomerRepository
