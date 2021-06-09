import styling from './Cart.module.css';
import Modal from '../UI/Modal';
const Cart = props => {
  const cartItems = (
    <ul>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styling.total}>
        <span>Total Amount</span>
        <span>42.99</span>
      </div>
      <div className={styling.actions}>
        <button className={styling['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={styling.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
