import {createAuthForPasswordFlow, createAuthForAnonymousSessionFlow} from "@commercetools/sdk-client-v2";
import fetch from 'node-fetch'

let _credentials = null

export function getOptions(
    crendentials? : {username: string; password: string}
) {

    let authMiddleware

    if (crendentials) {
        _credentials = crendentials
        authMiddleware = createAuthForPasswordFlow({
            host: 'https://auth.europe-west1.gcp.commercetools.com',
            projectKey:'kk_development',
            credentials: {
                clientId: '6wGlo9uJ8jbWTH8jHzaJFbUP',
                clientSecret: 'K7kzYqA4yOuOkhCczzXuqNOlnBfAmjDg',
                user: {
                    ..._credentials
                }
            },
            scopes:['manage_project:kk_development'],
            fetch
        })
    } else {
        authMiddleware = createAuthForAnonymousSessionFlow({
            host: 'https://auth.europe-west1.gcp.commercetools.com',
            projectKey:'kk_development',
            credentials: {
                clientId: '6wGlo9uJ8jbWTH8jHzaJFbUP',
                clientSecret: 'K7kzYqA4yOuOkhCczzXuqNOlnBfAmjDg'
            },
            scopes:['manage_project:kk_development'],
            fetch
        })
    }


    return {
        authMiddleware,
        projectKey:'kk_development',
        credentials: _credentials ? true : false,
        httpMiddlewareOptions: {
            host: 'https://api.europe-west1.gcp.commercetools.com',
            fetch
        }
    }
}