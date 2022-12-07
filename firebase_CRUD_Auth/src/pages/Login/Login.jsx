import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();
  const navigate = useNavigate();

  const handleData = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    } else if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password);
    !error && !isPending && navigate('/', { replace: true });
  };

  return (
    <form className={styles.login_form} onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인</legend>

        <label htmlFor="myEmail">email : </label>
        <input
          type="email"
          id="myEmail"
          required
          value={email}
          onChange={handleData}
        />

        <label htmlFor="myPassWord">password : </label>
        <input
          type="password"
          id="myPassWord"
          required
          value={password}
          onChange={handleData}
        />

        {!isPending ? (
          <button type="submit" className={styles.btn}>
            로그인
          </button>
        ) : (
          <strong>로그인이 진행중입니다...</strong>
        )}
        {error && <strong>{error}</strong>}
      </fieldset>
    </form>
  );
}

export default Login;
