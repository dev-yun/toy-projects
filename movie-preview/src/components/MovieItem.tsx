import styled, { css } from 'styled-components';
import { IR, multiEllipsis, slEllipsis } from '../style/util';
import { movieProps } from './MovieCont';
import starImg from '../assets/별점이미지.png';
import playImg from '../assets/아이콘_재생.png';

const MovieItems = styled.li`
  overflow: hidden;
  float: left;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 24px 10px 0;
`;

const MovieWrapper = styled.article`
  width: 180px;
  padding: 19px 19px 0 19px;
`;

const ItemDetail = styled.h4`
  ${IR}
`;

const ItemLink = styled.a`
  display: block;
  margin-bottom: 11px;
`;

const ItemLinkText = styled.span`
  ${IR}
`;

const ItemLinkImg = styled.img`
  width: 180px;
  height: 250px;
  left: 20px;
  top: 19px;

  border: 1px solid #bdbdbd;
  border-radius: 10px;
`;

const ItemTitle = styled.strong`
  ${slEllipsis}
  font-weight: 900;
  font-size: 16px;
  line-height: 23px;
`;

const ItemInfoList = styled.dl`
  margin-top: 12px;
`;

const ItemInfoTitle = styled.dt`
  display: inline-block;
  font-size: 13px;
  vertical-align: top;
  font-weight: 400;
  line-height: 19px;
  font-weight: lighter;
  color: #828282;
  margin-right: 5px;
`;

const ItemInfoWrap = styled.div`
  display: inline-block;
  margin-bottom: 5px;

  &.item-star {
    float: right;

    ${ItemInfoTitle}::after {
      display: inline-block;
      content: '';
      width: 14px;
      height: 13px;
      margin-left: 5px;
      margin-right: -2px;
      background: url(${starImg});
      vertical-align: top;
    }
  }
`;

const ItemInfoContent = styled.dd`
  display: inline-block;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  &.multi-ellipsis {
    ${multiEllipsis}
    width: 140px;
    height: 28px;
    float: right;
    display: -webkit-box;
  }
`;

const ReservationLink = styled.a`
  display: inline-block;
  width: 50%;
  text-align: center;
  height: 41px;
  line-height: 41px;
  background: #f2f2f2;
  border-top: 1px solid #bdbdbd;

  text-decoration: none;
  color: black;
  &::after {
    display: block;
    float: right;
    content: '';
    width: 1px;
    height: 100%;
    background: #bdbdbd;
  }
`;

const TeaserLink = styled.a`
  display: inline-block;
  width: 50%;
  text-align: center;
  height: 41px;
  line-height: 41px;
  background: #f2f2f2;
  border-top: 1px solid #bdbdbd;

  text-decoration: none;
  color: black;

  &::before {
    display: inline-block;
    content: '';
    width: 16px;
    height: 16px;
    background: url(${playImg});
    background-size: contain;
    vertical-align: top;
    margin: 11px 2px 0 0;
  }
`;

const MovieItem = ({ item }: movieProps) => {
  console.log(item);
  return (
    <MovieItems>
      <MovieWrapper>
        <ItemDetail>영화 상세 정보</ItemDetail>
        <ItemLink href="#none" className="link-movie">
          <ItemLinkText>영화 상세페이지로 이동</ItemLinkText>
          <ItemLinkImg
            src={'/asset/poster/' + item.image}
            alt={item.title}
          ></ItemLinkImg>
        </ItemLink>

        <ItemTitle>{item.title}</ItemTitle>

        <ItemInfoList>
          <ItemInfoWrap>
            <ItemInfoTitle>개요</ItemInfoTitle>
            <ItemInfoContent>{item.genre}</ItemInfoContent>
          </ItemInfoWrap>

          <ItemInfoWrap className="item-star">
            <ItemInfoTitle>평점</ItemInfoTitle>
            <ItemInfoContent>{item.score}</ItemInfoContent>
          </ItemInfoWrap>

          <ItemInfoWrap>
            <ItemInfoTitle>개봉</ItemInfoTitle>
            <ItemInfoContent>{item.date}</ItemInfoContent>
          </ItemInfoWrap>

          <ItemInfoWrap>
            <ItemInfoTitle>출연</ItemInfoTitle>
            <ItemInfoContent className="multi-ellipsis">
              {item.actors}
            </ItemInfoContent>
          </ItemInfoWrap>
        </ItemInfoList>
      </MovieWrapper>
      <ReservationLink href="#none" className="link-reserv">
        예매하기
      </ReservationLink>
      <TeaserLink href="#none" className="link-teaser">
        예고편
      </TeaserLink>
    </MovieItems>
  );
};

export default MovieItem;
