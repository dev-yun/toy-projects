import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  font-family: LINESeedKR-Bd;
  font-size: 20px;

  box-sizing: border-box;
  width: 100%;
  min-height: 300px;
  resize: vertical;
  padding: 15px;

  border: none;
  background-color: #ececec;
  border-radius: 5px;
`;

function DiaryContent({ handleContent, contentRef, content }) {
  const handleChangeContent = e => {
    handleContent(e.target.value);
  };

  return (
    <section>
      <h3>오늘의 일기</h3>
      <StyledTextArea
        ref={contentRef}
        value={content}
        placeholder="오늘은 어땠나요??"
        onChange={handleChangeContent}
      />
    </section>
  );
}

export default DiaryContent;
