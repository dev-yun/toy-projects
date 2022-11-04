import React from 'react';
import styled from 'styled-components';
import { IR } from '../style/util';
import NavLink from './NavLink';

const HeaderTitle = styled.h2`
  ${IR}
`;

const Navigator = styled.nav`
  text-align: center;

  &::before {
    display: block;
    content: '';
    width: 650px;
    height: 2px;
    background: #bdbdbd;
    margin: 0 auto;
  }
`;

const NavList = styled.ul`
  display: inline-block;
  margin: 27px 0;
`;

const NavItem = styled.li`
  float: left;

  & + & {
    margin-left: 60px;
  }
`;

const Header = () => {
  const [currentPathName, setCurrentPathName] = React.useState<string>();

  const handleClick = (pathName: string) => {
    setCurrentPathName(pathName);
  };

  return (
    <header>
      <HeaderTitle>영화 정보 목록</HeaderTitle>
      <Navigator>
        <NavList>
          <NavItem>
            <NavLink
              path="/"
              text="현재개봉영화"
              onClick={() => handleClick('/')}
            ></NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              path="/released"
              text="상영예정영화"
              onClick={() => handleClick('/released')}
            ></NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              path="/box-office"
              text="박스오피스"
              onClick={() => handleClick('/box-office')}
            ></NavLink>
          </NavItem>
        </NavList>
      </Navigator>
    </header>
  );
};

export default Header;
