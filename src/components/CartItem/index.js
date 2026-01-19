import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
<<<<<<< HEAD
      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      const totalPrice = price * quantity
=======
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
<<<<<<< HEAD
                onClick={onClickDecrement}
                data-testid="minus"
=======
                data-testid="minus"
                onClick={() => decrementCartItemQuantity(id)}
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
              >
                <BsDashSquare color="#52606D" size={12} />
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
<<<<<<< HEAD
                onClick={onClickIncrement}
                data-testid="plus"
=======
                data-testid="plus"
                onClick={() => incrementCartItemQuantity(id)}
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
              >
                <BsPlusSquare color="#52606D" size={12} />
              </button>
            </div>
            <div className="total-price-remove-container">
<<<<<<< HEAD
              <p className="cart-total-price">Rs {totalPrice}/-</p>
=======
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
<<<<<<< HEAD
            data-testid="remove"
=======
>>>>>>> bb380096a1501f668a89562de3b86392cbbcaa55
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
