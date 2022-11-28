import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 0px;
  border-bottom: 1px solid #e2e2e2;
`;

const HeaderText = styled.p``;

function Header({ headText }) {
  return (
    <StyledHeader>
      <Button text="왼쪽" type="positive" />
      <HeaderText>{headText}</HeaderText>
      <Button text="오른쪽" />
    </StyledHeader>
  );
}

export default Header;
