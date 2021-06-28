import { useContext, useState } from 'react';
import styling from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  // console.log(props.items);
  console.log(CartContext);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };
  const cartItems = (
    <ul className={styling['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styling.actions}>
      <button className={styling['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styling.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
