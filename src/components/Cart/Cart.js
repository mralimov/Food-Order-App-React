import { Fragment, useContext, useState } from 'react';
import styling from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';
import Checkout from './Checkout';
const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitDone, setSubmitDone] = useState(false);
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

  const submitOrderHandler = async userData => {
    setIsSubmitting(true);
    await fetch(
      'https://food-order-react-app-6768c-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setSubmitDone(true);
    cartCtx.clearCart();
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

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </Fragment>
  );
  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={styling.actions}>
        <button className={styling.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
  const isSubmittingModalContent = <p>Sending order data...</p>;
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !submitDone && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && submitDone && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
