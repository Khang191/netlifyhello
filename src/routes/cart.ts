import { Router } from 'express'
import { CartController } from '../controller'

// build the client
const cartController = new CartController()

const router = Router()
const {
  createCartForCurrentCustomer,
  createCart,
  getActiveCart,
  getCartById,
  updateActiveCart,
  updateDiscountCart,
  removeLineItem,
} = cartController

router.get('/cart/:id', getCartById.bind(cartController))
router.post('/cart/new', createCart.bind(cartController))
router.put('/cart/additem', updateActiveCart.bind(cartController))
router.put('/cart/discountcode', updateDiscountCart.bind(cartController))
router.delete('/cart', removeLineItem.bind(cartController))

export default router
