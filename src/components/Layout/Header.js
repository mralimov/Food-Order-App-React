import { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpg';
import headerStyle from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
  return (
    <Fragment>
      <header className={headerStyle.header}>
        <h1>Food Order App react</h1>
        <HeaderCartButton />
      </header>
      <div className={headerStyle['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
