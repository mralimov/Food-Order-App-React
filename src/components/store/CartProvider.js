import CartContext from './cart-contex';
import { useReducer } from 'react';

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  return defaultCartState;
};
const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD' });
  };

  const removeItemFromCartHandler = id => {};

  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
