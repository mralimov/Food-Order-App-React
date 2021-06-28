import React, { useRef } from 'react';
import styling from './Checkout.module.css';

function Checkout(props) {
  const nameInpuRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = e => {
    e.prevent.default();

    const enteredName = nameInpuRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
  };
  return (
    <form className={styling.form} onSubmit={confirmHandler}>
      <div className={styling.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInpuRef}></input>
      </div>
      <div className={styling.control}>
        <label htmlFor="name">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
      </div>
      <div className={styling.control}>
        <label htmlFor="name">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
      </div>
      <div className={styling.control}>
        <label htmlFor="name">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
      </div>
      <div className={styling.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styling.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
