import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { appAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  // 에러 정보를 저장합니다.
  const [error, setError] = useState(null);
  // 서버와의 통신 상태를 저장합니다.
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = () => {
    setError(null);
    setIsPending(true);

    signOut(appAuth)
      .then(() => {
        // Sign-out successful.
        dispatch({ type: 'logout' });
        setError(null);
        setIsPending(false);
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
        setIsPending(false);
      });
  };

  return { error, isPending, logout };
};
