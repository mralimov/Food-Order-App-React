import CartIcon from '../Cart/CartIcon';
import headerCartStyle from './HeaderCartButton.module.css';
const HeaderCartButton = props => {
  return (
    <button className={headerCartStyle.button}>
      <span className={headerCartStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartStyle.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
