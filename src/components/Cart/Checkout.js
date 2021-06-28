import React from 'react';
import styling from './Cart.module.css';
function Checkout() {
  return (
    <form>
      <div className={styling.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={styling.control}>
        <label htmlFor="name">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={styling.control}>
        <label htmlFor="name">Postal Code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={styling.control}>
        <label htmlFor="name">City</label>
        <input type="text" id="city"></input>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Checkout;
