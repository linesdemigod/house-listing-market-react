import { useEffect, useState, useRef } from "react";

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const token = localStorage.getItem("token");

      if (token) {
        setIsAuthenticated(true);
      }
      setCheckingStatus(false);
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return {
    isAuthenticated,
    checkingStatus,
  };
};
