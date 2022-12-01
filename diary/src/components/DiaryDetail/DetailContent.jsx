import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #ececec;
  border-radius: 5px;

  word-break: keep-all;
  overflow-wrap: break-word;
  overflow: scroll;

  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }
  p {
    padding: 20px;
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.7;
  }
`;

function DetailContent({ content }) {
  return (
    <section>
      <h3>오늘의 일기</h3>
      <Wrapper>
        <p>{content}</p>
      </Wrapper>
    </section>
  );
}

export default DetailContent;
