import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import axios, { AxiosResponse } from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const UserContext = createContext({});

const UserProvider = (props: PropsWithChildren) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const access_token = cookies.get("access_token");
    if (access_token) {
      axios
        .get(`http://localhost:5000/user/me?access_token=${access_token}`)
        .then((res: AxiosResponse) => {
          setLoading(false);
          if (res.status === 200) {
            setUser(res.data);
          } else {
            setUser(null);
          }
        });
    } else {
      setUser(null);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {loading ? <div>Loading...</div> : props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
