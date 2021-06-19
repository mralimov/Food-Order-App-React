import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import headerCartStyle from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-contex';
const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${headerCartStyle.button} ${
    btnIsHighlighted ? headerCartStyle.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={headerCartStyle.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={headerCartStyle.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
