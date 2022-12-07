import styles from './Header.module.css';
import { Link, useParams } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Header() {
  const { logout } = useLogout();

  const { user } = useAuthContext();
  console.log(user);

  return (
    <nav className={styles.nav}>
      <h1 className={styles.tit}>두근두근 비밀일기</h1>
      {!user ? (
        <ul className={styles.list_nav}>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.list_nav}>
          <li>
            <strong>환영합니다. {user.displayName}님! </strong>
            <button onClick={logout}>로그아웃</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
