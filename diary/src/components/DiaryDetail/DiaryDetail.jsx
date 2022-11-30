import React from 'react';
import styled from 'styled-components';
import DetailContent from './DetailContent';
import DetailEmotion from './DetailEmotion';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin: 20px 0px;

    gap: 20px;
  }
`;

function DiaryDetail({ originData }) {
  console.log(originData);
  return (
    <StyledMain>
      <DetailEmotion emotion={originData.emotion} />
      <DetailContent content={originData.content} />
    </StyledMain>
  );
}

export default DiaryDetail;
