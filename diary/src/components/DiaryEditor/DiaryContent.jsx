import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { newContentState } from '../../store/recoilNewDiaryState';

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

function DiaryContent({ contentRef }) {
  const [newContent, setNewContent] = useRecoilState(newContentState);

  const handleChangeContent = e => {
    setNewContent(e.target.value);
  };

  return (
    <section>
      <h3>오늘의 일기</h3>
      <StyledTextArea
        ref={contentRef}
        value={newContent}
        placeholder="오늘은 어땠나요??"
        onChange={handleChangeContent}
      />
    </section>
  );
}

export default React.memo(DiaryContent);
