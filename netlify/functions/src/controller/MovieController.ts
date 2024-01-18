import  responseHandler from '../utils/ResponseHandler'
import { Request, Response } from 'express'

class MovieController {
    constructor() {}

    async getMoviesById(req: Request, res: Response) {
        const { id } = req.body

        const rs = {
            data: {
                film: {
                    episodeID: 4,
                    openingCrawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                    releaseDate: "1977-05-25",
                    title: "A New Hope"
                }
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