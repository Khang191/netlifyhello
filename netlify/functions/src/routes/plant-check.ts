import { Router } from 'express'

const router = Router()

router.post(
    '/plant-check',
    (req, res) => {

        res.status(201).json({
            "type": "Cart",
            "id": "27b39077-aa57-48a5-b504-914f68fa44dc",
            "version": 1,
            "createdAt": "2023-01-23T13:06:28.569Z",
            "lastModifiedAt": "2023-01-23T13:06:28.569Z",
            "lastModifiedBy": {
                "isPlatformClient": false
            },
            "createdBy": {
                "isPlatformClient": false
            },
            "lineItems": [],
            "cartState": "Active",
            "totalPrice": {
                "type": "centPrecision",
                "currencyCode": "EUR",
                "centAmount": 0,
                "fractionDigits": 2
            },
            "shippingMode": "Single",
            "shipping": [],
            "customLineItems": [],
            "discountCodes": [],
            "directDiscounts": [],
            "inventoryMode": "None",
            "taxMode": "Platform",
            "taxRoundingMode": "HalfEven",
            "taxCalculationMode": "LineItemLevel",
            "refusedGifts": [],
            "origin": "Customer",
            "itemShippingAddresses": []
        })
    }
)

export default router