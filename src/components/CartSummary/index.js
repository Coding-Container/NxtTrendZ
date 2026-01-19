import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
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
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
