import  responseHandler from '../utils/ResponseHandler'
import { Request, Response } from 'express'

class MovieController {
    constructor() {}

    async getMoviesById(req: Request, res: Response) {
        const { id } = req.body

        const rs = {
            data: {
                episodeID: 4,
                openingCrawl: "Khang test ok!!!!!.",
                releaseDate: "1977-05-25",
                title: "A New Hope"
            }
        }

        res.status(200).send(rs)

        // if (customer?.statusCode === 200 && fields?.plantCheck == 1) {
        //     res.status(400).json({
        //         statusCode: 400,
        //         message: "Error message.",
        //         errors: [
        //             {
        //                 "code": "General",
        //                 "message": "Plant Check Error!"
        //             }
        //         ]
        //     })
        // } else {
        //     res.status(201).json()
        // }
    }
}

export default MovieController