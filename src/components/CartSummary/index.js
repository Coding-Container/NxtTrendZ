<<<<<<< HEAD
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Payment from '../Payment'

import CartContext from '../../context/CartContext'

import './index.css'

=======
import CartContext from '../../context/CartContext'

>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
<<<<<<< HEAD
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <Popup
              modal
              trigger={
                <button className="checkout-btn" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </>
=======
      const totalAmount = cartList.reduce(
        (total, each) => total + each.quantity * each.price,
        0,
      )
      return (
        <div>
          <h1>Order Total: Rs {totalAmount}</h1>
          <p>{cartList.length} items in cart</p>
          <button type="button">Checkout</button>
        </div>
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
      )
    }}
  </CartContext.Consumer>
)
<<<<<<< HEAD

=======
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
export default CartSummary
