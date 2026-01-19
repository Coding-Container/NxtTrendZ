<<<<<<< HEAD
import CartContext from '../../context/CartContext'

import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'
=======
import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
<<<<<<< HEAD
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }
=======
      // TODO: Update the functionality to remove all the items in the cart
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
<<<<<<< HEAD
                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={onClickRemoveAllBtn}
                >
=======
                <button type="button" onClick={() => removeAllCartItems()}>
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
                  Remove All
                </button>
                <CartListView />
                <CartSummary />
<<<<<<< HEAD
=======

                {/* TODO: Add your code for Cart Summary here */}
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
<<<<<<< HEAD

=======
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
export default Cart
