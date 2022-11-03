import { Fragment } from 'react';
import styled from 'styled-components';
import { IR } from '../style/util';
import Header from './Header';

const MainTitle = styled.h1`
  ${IR}
`;

const MainContainer = styled.section`
  width: 1006px;
  margin: 86px auto 0;
  padding: 0 27px 29px;
  border: 2px solid #bdbdbd;
  border-radius: 15px;
  background: #e5e5e5;
`;

const ContainerTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  line-height: 28px;
  padding: 38px 0;
`;

const MainCont = () => {
  return (
    <Fragment>
      <MainTitle>정글 시네마</MainTitle>
      <MainContainer>
        <ContainerTitle>정글 시네마 영화 목록</ContainerTitle>
        <Header></Header>
      </MainContainer>
    </Fragment>
  );
};

export default MainCont;
