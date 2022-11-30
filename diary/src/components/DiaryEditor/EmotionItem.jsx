import React from 'react';
import styled from 'styled-components';
import getWrapperBackgroundColor from '../../utils/wrapperBackgroundColor';

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
