import React from 'react';
import styled, { css } from 'styled-components';

const getButtonColor = props => {
  let buttonColor;
  let fontColor;

  switch (props.buttonType) {
    case 'positive':
      buttonColor = '#64c964';
      fontColor = 'white';
      break;
    case 'negative':
      buttonColor = 'tomato';
      fontColor = 'white';
      break;
    default:
      buttonColor = '#ececec';
      fontColor = 'black';
  }

  return css`
    background-color: ${buttonColor};
    color: ${fontColor};
  `;
};

const StyleButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;

  ${props => getButtonColor(props)}
  padding: 10px 20px;
  white-space: nowrap;

  font-family: LINESeedKR-Bd;
`;

function Button({ text, type, onClick }) {
  return (
    <StyleButton buttonType={type} onClick={onClick}>
      {text}
    </StyleButton>
  );
}

export default Button;
