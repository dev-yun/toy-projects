import styled from 'styled-components';
import twitterImg from '../assets/sns/twitter.png';
import instagramImg from '../assets/sns/instagram.png';
import facebookImg from '../assets/sns/facebook.png';

const FooterCont = styled.footer`
  background: #f2f2f2;
  margin-top: 135px;
`;

const FooterSection = styled.section`
  position: relative;
  overflow: hidden;
  width: 1189px;
  margin: 0 auto;
`;

const IR = styled.h1`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const FooterTitle = styled.strong`
  display: block;
  font-size: 22px;
  height: 118px;
  line-height: 118px;
  border-bottom: 2px solid #c4c4c4;
  font-weight: 700;
`;

const InfoList = styled.dl`
  float: left;
  margin: 38px 0;
`;

const InfoTitle = styled.dt`
  display: inline-block;
  font-weight: 700;
  margin-right: 5px;
`;

const InfoContent = styled.dd`
  display: inline-block;
  font-weight: 400;

  &::after {
    display: inline-block;
    content: '';
    width: 1px;
    height: 12px;
    margin: 0 7px;
    background: #000;
  }

  &:last-child::after {
    display: none;
  }
`;

const SNSList = styled.ul`
  position: absolute;
  overflow: hidden;
  top: 50px;
  right: 0;
`;

const SNSItem = styled.li`
  float: left;
  margin-left: 22px;
`;

const SNSLink = styled.a`
  display: inline-block;
  width: 24px;
  height: 24px;
  font-size: 1px;
  text-indent: -9999px;
  overflow: hidden;

  &.twitter {
    /* background-color: tomato; */
    background-image: url(${twitterImg});
    background-repeat: no-repeat;
    background-size: contain;
  }

  &.instagram {
    /* background-color: teal; */
    background-image: url(${instagramImg});
    background-repeat: no-repeat;
    background-size: contain;
  }

  &.facebook {
    /* background-color: yellow; */
    background-image: url(${facebookImg});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const CopyRight = styled.small`
  float: right;
  margin-top: 38px;
`;

const Footer = () => {
  return (
    <FooterCont>
      <FooterSection>
        <IR as={'h2'}>기업 정보</IR>
        <FooterTitle>Jungle Cinema</FooterTitle>
        <InfoList>
          <IR as={'dt'}>사명</IR>
          <InfoContent>(주)정글 시네마</InfoContent>

          <InfoTitle>대표</InfoTitle>
          <InfoContent>라이캣</InfoContent>

          <InfoTitle>사업자번호</InfoTitle>
          <InfoContent>010-1234-5678</InfoContent>
          <InfoContent>광고 영화 및 비디오물 제작</InfoContent>

          <InfoTitle>주소</InfoTitle>
          <InfoContent>경기도 성남시</InfoContent>
        </InfoList>
        <IR as={'em'}>sns 링크 목록</IR>
        <SNSList>
          <SNSItem>
            <SNSLink className="twitter">트위터</SNSLink>
          </SNSItem>
          <SNSItem>
            <SNSLink className="instagram">인스타그램</SNSLink>
          </SNSItem>
          <SNSItem>
            <SNSLink className="facebook">페이스북</SNSLink>
          </SNSItem>
        </SNSList>
        <CopyRight>&copy;The Jungle</CopyRight>
      </FooterSection>
    </FooterCont>
  );
};

export default Footer;
