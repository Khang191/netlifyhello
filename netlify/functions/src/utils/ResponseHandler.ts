interface MyResponse {
    status: string
    message?: string
    data?: object
}

class ResponseHandler {
    static successResponse = (response, statusCode, message, data) => {
        const responseBody: MyResponse = {status: 'success'}

        if (message !== '') {
            responseBody.message = message
        }

        if (data) {
            responseBody.data = data
        }

        return response.status(statusCode).json({
            ...responseBody
        })
    }

    static errorResponse = (response, statusCode, message, data) => {
        const responseBody: MyResponse = {status: 'error'}

        if (message !== '') {
            responseBody.message = message
        }

        if (data) {
            responseBody.data = data
        }

        return response.status(statusCode).json({
            ...responseBody
        })
    }
}

export default ResponseHandler;