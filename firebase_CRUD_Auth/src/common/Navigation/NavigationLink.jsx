import React from 'react';
import { Link } from 'react-router-dom';

function NavigationLink({ icon, path, text, onClick }) {
  return (
    <Link to={path} onClick={onClick}>
      <img src={icon} alt={text} />
    </Link>
  );
}

export default NavigationLink;
