import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0px;
  border-bottom: 1px solid #e2e2e2;

  button {
    box-sizing: border-box;
    padding: 10px 17px;
  }
`;

const HeaderText = styled.p`
  font-size: 1.2rem;
`;

const EmptyBox = styled.div`
  width: 70px;
`;

function Header({
  headText,
  leftBtnText,
  rightBtnText,
  leftBtnClick,
  rightBtnClick,
}) {
  return (
    <StyledHeader>
      {leftBtnText && (
        <Button text={leftBtnText} onClick={() => leftBtnClick()} />
      )}
      <HeaderText>{headText}</HeaderText>
      {rightBtnText ? (
        <Button text={rightBtnText} onClick={() => rightBtnClick()} />
      ) : (
        <EmptyBox />
      )}
    </StyledHeader>
  );
}

export default Header;
