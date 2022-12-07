import React, { useState } from 'react';

import styles from './Navigation.module.css';

import homeIcon from '../../assets/navImg/icon-home.svg';
import filledHomeIcon from '../../assets/navImg/icon-home-fill.svg';
import messageIcon from '../../assets/navImg/icon-message-circle.svg';
import filledMessageIcon from '../../assets/navImg/icon-message-circle-fill.svg';
import postIcon from '../../assets/navImg/icon-edit.svg';
import userIcon from '../../assets/navImg/icon-user.svg';
import filledUserIcon from '../../assets/navImg/icon-user-fill.svg';
import NavigationLink from './NavigationLink';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navigation() {
  const [currentPath, setCurrentPath] = useState();
  const location = useLocation();

  const handlePathChange = (path) => {
    setCurrentPath(path);
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <NavigationLink
        icon={currentPath === '/' ? filledHomeIcon : homeIcon}
        path="/"
        text="Home Page"
        onClick={() => handlePathChange('/')}
      />
      <NavigationLink
        icon={currentPath === '/chat' ? filledMessageIcon : messageIcon}
        path="/chat"
        text="Chatting Page"
        onClick={() => handlePathChange('/chat')}
      />
      <NavigationLink
        icon={postIcon}
        path="/post"
        text="Post Page"
        onClick={() => handlePathChange('/post')}
      />
      <NavigationLink
        icon={currentPath === '/profile' ? filledUserIcon : userIcon}
        path="/profile"
        text="Profile Page"
        onClick={() => handlePathChange('/profile')}
      />
    </div>
  );
}

export default Navigation;
