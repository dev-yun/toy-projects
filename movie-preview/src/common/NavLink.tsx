import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavPath = styled(Link)`
  text-decoration: none;

  color: ${(props) =>
    props.to === window.location.pathname ? '#000' : '#828282'};
`;

interface NavLinkProps {
  path: string;
  text: string;
  onClick: () => void;
}

function NavLink({ path, text, onClick }: NavLinkProps) {
  return (
    <NavPath to={path} onClick={onClick}>
      {text}
    </NavPath>
  );
}

export default NavLink;
