import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
function App() {
  const [seeCart, setSeeCart] = useState(false);

  const showCartHandler = () => {
    setSeeCart(true);
  };

  const hideCartHandler = () => {
    setSeeCart(false);
  };
  return (
    <CartProvider>
      {seeCart && <Cart onClose={hideCartHandler} />}
      <Header onSeeCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
