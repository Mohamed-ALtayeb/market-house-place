import { useState, useLayoutEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const UserAuthStatus = () => {
  const [loggedIn, setLoaggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);
  const auth = getAuth();
  useLayoutEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoaggedIn(true);
        }
        setCheckingStatus(false);
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};
