import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DiaryDispatchContext } from '../../App';
import Button from '../../common/Button/Button';
import { slEllipsis } from '../../styles/util';
import getWrapperBackgroundColor from '../../utils/wrapperBackgroundColor';

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;

  padding: 15px 0px;
  border-bottom: 1px solid #ececec;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  min-width: 120px;
  height: 80px;
  border-radius: 5px;

  ${props => getWrapperBackgroundColor(props.type)}
`;

const ContentWrapper = styled.div`
  ${slEllipsis}
  cursor: pointer;
  flex-grow: 1;

  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;

  p:first-child {
    font-weight: bold;
    font-size: 1.1rem;

    margin-bottom: 10px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 2px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

function DiaryItem({ id, content, emotion, date }) {
  const navigate = useNavigate();
  const strDate = new Date(+date).toLocaleDateString();
  const { onRemove } = useContext(DiaryDispatchContext);

  const goDiaryDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goDiaryEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <StyledItem>
      <ImgWrapper type={emotion} onClick={goDiaryDetail}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/emotion/emotion${emotion}.png`}
          alt="emotionImg"
        />
      </ImgWrapper>
      <ContentWrapper onClick={goDiaryDetail}>
        <p>{strDate}</p>
        <p>{content}</p>
      </ContentWrapper>
      <ButtonWrapper>
        <Button type="positive" text="수정하기" onClick={goDiaryEdit} />
        <Button type="negative" text="삭제하기" onClick={handleRemove} />
      </ButtonWrapper>
    </StyledItem>
  );
}

export default DiaryItem;
