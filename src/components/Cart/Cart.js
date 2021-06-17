import { useContext } from 'react';
import styling from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-contex';
const Cart = props => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={styling['cart-items']}>
      {cartCtx.items.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styling.actions}>
        <button className={styling['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styling.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
