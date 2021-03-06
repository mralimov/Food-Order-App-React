import { useContext } from 'react';
import styling from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-contex';

const MealItem = props => {
  // const context = useContext(contextValue);
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styling.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styling.description}>{props.description}</div>
        <div className={styling.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
