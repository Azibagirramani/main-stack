import { useState, useEffect } from "react";
import { BASE_URL, USER_ENDPOINT } from "./config";
import type { User } from "src/types";

const useFetchPayments = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL.concat(USER_ENDPOINT));
      const data = await response.json();
      setUser(data);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading };
};

export default useFetchPayments;
