import styled from 'styled-components';
import cart from '../../assets/icon-shopping-cart-white.svg';

const Cart = styled.img`
  position: fixed;
  width: 60px;
  height: 60px;
  right: calc(50% - 750px);
  top: 150px;

  padding: 10px;
  background: #6327fe;
  border-radius: 30%;

  cursor: pointer;
`;

const ShoppingCart = () => {
  return (
    <>
      <Cart src={cart} />
    </>
  );
};

export default ShoppingCart;
