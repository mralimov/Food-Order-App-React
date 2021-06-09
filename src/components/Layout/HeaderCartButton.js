import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import headerCartStyle from './HeaderCartButton.module.css';
import CartContext from '../store/cart-contex';
const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={headerCartStyle.button} onClick={props.onClick}>
      <span className={headerCartStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartStyle.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
