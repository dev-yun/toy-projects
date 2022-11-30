import React from 'react';
import styled from 'styled-components';
import EmotionItem from './EmotionItem';

const emotionList = [
  {
    emotionId: 1,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion/emotion1.png`,
    emotionDescription: '완전 좋음',
  },
  {
    emotionId: 2,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion/emotion2.png`,
    emotionDescription: '좋음',
  },
  {
    emotionId: 3,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion/emotion3.png`,
    emotionDescription: '보통',
  },
  {
    emotionId: 4,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion/emotion4.png`,
    emotionDescription: '나쁨',
  },
  {
    emotionId: 5,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion/emotion5.png`,
    emotionDescription: '완전 나쁨',
  },
];

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
