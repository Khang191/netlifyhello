import { ClientBuilder, Credentials } from '@commercetools/sdk-client-v2'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

const anonymousClientBuilder = new ClientBuilder();
const userClientBuilder = new ClientBuilder()

interface Options {
    projectKey: string
    oauthUri?: string
    baseUri?: string
    credentials?: Credentials
}

class Client {
    constructor() {}

    getDefaultClient({ projectKey, oauthUri, baseUri, credentials }: Options) {
        return anonymousClientBuilder
            .defaultClient(
                baseUri,
                credentials,
                oauthUri,
                projectKey
            )
            .build()
    }

    getClientFromOption(options) {
        const {
            authMiddleware,
            projectKey,
            credentials,
            httpMiddlewareOptions
        } = options

        if (credentials) {
            return userClientBuilder
                .withProjectKey(projectKey)
                .withMiddleware(authMiddleware)
                .withHttpMiddleware(httpMiddlewareOptions)
                .withLoggerMiddleware()
                .build()
        }

        return anonymousClientBuilder
            .withProjectKey(projectKey)
            .withMiddleware(authMiddleware)
            .withHttpMiddleware(httpMiddlewareOptions)
            .withLoggerMiddleware()
            .build()
    }

    getApiRoot(client) {
        return createApiBuilderFromCtpClient(client)
    }
}

export default Client