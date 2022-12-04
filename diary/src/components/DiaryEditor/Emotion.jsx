import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { newEmotionState } from '../../store/recoilNewDiaryState';
import emotionList from '../../utils/emotionImgList';
import EmotionItem from './EmotionItem';

const StyleUl = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

function Emotion() {
  const [newEmotion, setNewEmotion] = useRecoilState(newEmotionState);

  const handleSelectEmotion = emotion => {
    setNewEmotion(emotion);
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
            isSelected={item.emotionId === newEmotion}
          />
        ))}
      </StyleUl>
    </section>
  );
}

export default React.memo(Emotion);
