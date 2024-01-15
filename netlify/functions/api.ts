import cors from 'cors'
import express from "express";
import routes from './src/routes'
import serverless from "serverless-http";

const api = express();

api.use(cors())

api.use("/api/", routes);

export const handler = serverless(api);