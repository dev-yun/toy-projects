import React, { useState } from 'react';
import styled from 'styled-components';
import heart from '../../../assets/icon-heart-on.svg';
import emptyHeart from '../../../assets/icon-heart.svg';

const ProductWrapper = styled.li`
  position: relative;
  width: 380px;
  cursor: pointer;

  & img {
    width: 100%;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;

const ProductName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  width: 310px;
  flex-basis: 310px;
  align-items: center;

  color: #333333;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Heart = styled.span`
  width: 18px;
  height: 16px;
  background: url(${(props) => (props.checked ? heart : emptyHeart)}) no-repeat
    center;
  background-size: cover;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;

  color: #333333;

  &::after {
    content: '원';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
  }
`;

function ProductItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const checkedHandler = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    <ProductWrapper>
      <img
        src={`https://test.api.weniv.co.kr/${props.thumbnailImg}`}
        alt={props.productName}
      ></img>
      <Wrapper>
        <ProductName>{props.productName}</ProductName>
        <Heart checked={isChecked} onClick={checkedHandler} />
      </Wrapper>
      <ProductPrice>{props.price}</ProductPrice>
    </ProductWrapper>
  );
}

export default ProductItem;
