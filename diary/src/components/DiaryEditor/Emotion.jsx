import React from 'react';
import styled from 'styled-components';
import emotionList from '../../utils/emotionImgList';
import EmotionItem from './EmotionItem';

const StyleUl = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

function Emotion({ handleEmotion, emotionId }) {
  const handleSelectEmotion = emotion => {
    handleEmotion(emotion);
  };

  return (
    <section>
      <h3>오늘의 감정</h3>
      <StyleUl>
        {emotionList.map(item => (
          <EmotionItem
            key={item.emotionId}
            {...item}
            handleSelectEmotion={handleSelectEmotion}
            isSelected={item.emotionId === emotionId}
          />
        ))}
      </StyleUl>
    </section>
  );
}

export default Emotion;
