import {Request, Response} from 'express'


const fs = require('fs')
const path = './netlify/functions/src/files/brand_data.json';

class BrandController
{
    constructor() {}

    async getBrands(req: Request, res: Response)
    {
        // Get data object from json file
        const jsonBranchData = JSON.parse(getBrandSource())

        // Get request filter
        const { status, isLogoRequired, isNameRequired } = req.body

        // Filter brands
        const rs = []

        jsonBranchData.map((brand, i) => {
            if (brand.status === status
                && (isLogoRequired === 1 && brand.logo !== '')
                && (isNameRequired === 1 && brand.name !== '')
            ) {
                rs.push(brand)
            }
            if (brand.status === status
                && (isLogoRequired === 1 && brand.logo !== '')
                && (isNameRequired === 0)
            ) {
                rs.push(brand)
            }
            if (brand.status === status
                && (isLogoRequired === 0)
                && (isNameRequired === 1 && brand.name !== '')
            ) {
                rs.push(brand)
            }
            if (brand.status === status
                && (isLogoRequired === 0)
                && (isNameRequired === 0)
            ) {
                rs.push(brand)
            }
        })

        res.status(200).send({
            data: rs
        })
    }
}

function getBrandSource() {
    return "[\n" +
        "    {\n" +
        "        \"status\": \"active\",\n" +
        "        \"name\": \"Nike\",\n" +
        "        \"logo\": \"path_logo_nike.png\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"status\": \"active\",\n" +
        "        \"name\": \"Adidas\",\n" +
        "        \"logo\": \"path_logo_adidas.png\"\n" +
        "    },\n" +
        "    {\n" +
        "        \"status\": \"active\",\n" +
        "        \"name\": \"\",\n" +
        "        \"logo\": \"path_logo_puma.png\"\n" +
        "    }\n" +
        "]"
}

export default BrandController