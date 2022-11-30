import React from 'react';
import styled, { css } from 'styled-components';

const getWrapperBackgroundColor = emotion => {
  let wrapperBackground;

  switch (emotion) {
    case 1:
      wrapperBackground = '#64c964';
      break;
    case 2:
      wrapperBackground = '#9dd772';
      break;
    case 3:
      wrapperBackground = '#fdce17';
      break;
    case 4:
      wrapperBackground = '#fd8446';
      break;
    case 5:
      wrapperBackground = '#fd565f';
      break;
    default:
      wrapperBackground = '#ececec';
  }
  return css`
    background-color: ${wrapperBackground};
    color: white;
  `;
};

const ItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  border-radius: 5px;
  padding: 20px 0px;

  background-color: #ececec;
  ${props => props.isSelected && getWrapperBackgroundColor(props.emotionId)}

  img {
    width: 50%;
    margin-bottom: 10px;
  }
`;

function EmotionItem({
  emotionId,
  emotionDescription,
  emotionImg,
  handleSelectEmotion,
  isSelected,
}) {
  return (
    <ItemWrapper
      role="presentation"
      key={emotionId}
      onClick={() => handleSelectEmotion(emotionId)}
      isSelected={isSelected}
      emotionId={emotionId}
    >
      <img src={emotionImg} alt={emotionDescription} />
      {emotionDescription}
    </ItemWrapper>
  );
}

export default EmotionItem;
