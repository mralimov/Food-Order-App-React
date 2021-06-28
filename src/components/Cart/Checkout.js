import React, { useRef, useState } from 'react';
import styling from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;
function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
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

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }
  };
  return (
    <form className={styling.form} onSubmit={confirmHandler}>
      <div
        className={`${styling.control} ${
          formInputsValidity.name ? '' : styling.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInpuRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid Name!</p>}
      </div>
      <div
        className={`${styling.control} ${
          formInputsValidity.street ? '' : styling.invalid
        }`}
      >
        <label htmlFor="name">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter a valid Street!</p>}
      </div>
      <div
        className={`${styling.control} ${
          formInputsValidity.postal ? '' : styling.invalid
        }`}
      >
        <label htmlFor="name">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
        {!formInputsValidity.postal && <p>Please enter a valid Postal Code!</p>}
      </div>
      <div
        className={`${styling.control} ${
          formInputsValidity.city ? '' : styling.invalid
        }`}
      >
        <label htmlFor="name">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid City!</p>}
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
