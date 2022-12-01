import React from 'react';
import styled from 'styled-components';
import emotionList from '../../utils/emotionImgList';
import getWrapperBackgroundColor from '../../utils/wrapperBackgroundColor';

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 30px 40px;

  background-color: #ececec;
  ${props => getWrapperBackgroundColor(props.emotionId)}

  font-size: 1.2rem;

  img {
    width: 100%;
    margin-bottom: 10px;
  }
`;

function DetailEmotion({ emotion }) {
  const { emotionImg, emotionDescription } = emotionList.find(
    item => item.emotionId === emotion,
  );

  return (
    <section>
      <h3>오늘의 감정</h3>
      <ImgWrapper emotionId={emotion}>
        <img src={emotionImg} alt="emotionImg" />
        {emotionDescription}
      </ImgWrapper>
    </section>
  );
}

export default DetailEmotion;
